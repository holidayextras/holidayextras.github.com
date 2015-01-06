---
layout: post
title: SSL SAN Termination in the Amazon Cloud with ELBs
date: 2012-03-16 12:00:00
categories: Ops
author: Mark Fermor
tags: AWS ELB san ssl
comments: true
time: 4 mins
redirect_from:
  - 2012/03/16/ssl-san-termination-in-the-amazon-cloud-with-elbs/
---

## How we carried out SSL termination in the cloud
When it came time for us to think about how we’re going to carry out SSL termination in the cloud, it felt like we had a bit of a problem. We were running 100+ SSLs at the time of moving our architecture into the cloud (Oct 2011 – Went live) which were all previously being terminated by in-house F5 load balancers.

For SSL termination in the AWS cloud you really only have a few number of options.

1. Do it yourself with some clunking together of several strings of software (stunnel-haproxy, pound or some other derivative) adding multiple points of failure and a whole lot more infrastructure to look after on EC2. Where you rely on the speed of some fail-over mechanism whether that be moving Elastic IPs around or some heartbeat method.

2. Termination at the application level adding CPU cycles and latency to your application itself. It’s a pretty good option; however you then need to look after making changes to SSLs etc across your instances and applications when any change to the SSL occurs. Easily done if you have a good config management set-up, but even so its something extra to have to manage.

3. Let the [AWS ELB](aws.amazon.com/elasticloadbalancing) handle it for you. SSL termination was a fairly new feature when we first came to start using it, but I was sure glad to see it available. When we first started looking at AWS ELBs, they didn’t come with any SSL termination support and then we’d have been forced into option 1 or 2 (luckily we weren’t on the cloud by that point so its not a head ache we had to go through).

From a cost point of view and because we don’t have to do much in order to look after ELBs, we decided to go with option number 3. That’s something I stick by even now, we’re about half a year running our systems in production on AWS and SSL termination at the ELB level has been of no concern at all. The procedure to change or update an SSL cert is as easy as ever and there is no load added to any lower tier of architecture.

We could also have tried something like [Server Name Indication](http://en.wikipedia.org/wiki/Server_Name_Indication) (however AWS ELBs do not support SNI but also even if we terminated SSL ourselves, older browsers don’t fully support this either, thus adding the possibility of causing up to 10% of our customers problems connecting to the SSL parts of our site).

What does that leave us with? Well thankfully there are Subject Alternative Name (SAN) SSL certificates available, which seemed to be a pretty good compromise and well supported by pretty much everything in use today, client browser wise at least. All we needed to do was check that AWS supported their use. At the time they didn’t seem to know, it wasn’t something they said they had tested much, however that there shouldn’t be any reason why it wouldn’t work. So we tried it, we bought a small SAN cert and tested it out terminating SSL at the ELB and it worked perfectly for us. From this we knew that we could save the over heads of having to worry about running 100+ ELBs and could drop that easily down to two (because of our application use, could easily be one otherwise). We actually use more than that in production but that’s for other reasons.

## A few things to point out when using SAN certs however:
* Depending on the type of SSL you require, you can find an SSL authority that offers the ability to make free changes to their SAN cert SSLs, otherwise you may find that to make a change to your SAN cert could cost you. (We used Comodo, free to make changes ie swap domains in and only costs when we want to add more domains to the SAN

* Check the limits of the number of domains within a SAN cert, they vary from one company to another, with Comodo we got a pretty high limit which is handy otherwise you’ll need more ELBs

* You’ll need to get hold of and use the intermediary certificate supplied from the CA when setting up ELB, as some mobile devices and older browsers we found didn’t contain the Key embedded in the browser already, so this is important in order to avoid SSL failures or messages to the user from a browser relating to Bad SSL Cert. If using the AWS console to add SSL certificates (which you can do during the creation process of an ELB), then you’ll be copy/pasting the intermediary certificate into the section called “Certificate Chain”

* Currently you have to use AWS API tools directly in order to change the SAN cert that’s already in use on an ELB, otherwise you’ll have to re-create the ELB. IE – any change to the certificate, you’ll get a new cert from your CA which you’ll need to upload to AWS and then use the API tools to switch the cert they are using to this new one.

* The full list of domains held within the SSL SAN cert are visible to people that look at the certificate in a bit more detail, but if that’s not something that concerns you, jobs a gooden.

## Couple of quick examples for Java API and Applying the newly uploaded SAN cert to ELBs:
This command is what you can use to get a list of your currently uploaded SSL certificates, you’ll probably need to run this when you want to change the SSL certificate currently being used by a load balancer, it gives you the information needed for the next command which does the actual setting of which SSL an ELB should be using.

```
# iam-servercertlistbypath
arn:aws:iam::111111111:server-certificate/SAN1/SAN
arn:aws:iam::111111111:server-certificate/SAN1
```
elb-set-lb-listener-ssl-cert.cmd YOUR-ELB-NAME –lb-port=443 –cert-id=[copy and paste one of the output lines from the above command output here to set that particular SSL cert for this ELB]

E.g.

```
# elb-set-lb-listener-ssl-cert.cmd SAN1ELB --lb-port=443 --cert-id=arn:aws:iam::111111111:server-certificate/SAN1
```
There we go, as simple as that. We have an SSL terminating ELB using a SAN SSL certificate, where we can easily update the SSL cert being used for our application at any time with great ease and speed.