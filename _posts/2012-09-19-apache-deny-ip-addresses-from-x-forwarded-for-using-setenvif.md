---
layout: post
title: Apache Deny IP addresses from x-forwarded-for (using SetEnvIF)
date: 2012-09-19 12:00:00
categories: Ops
author: mark_fermor
tags: Apache AWS Block Deny ELB Firewall IPAddress
comments: true
redirect_from:
  - 2012/09/19/apache-deny-ip-addresses-from-x-forwarded-for-using-setenvif/
---

I’ve seen many methods for being able to block or deny specific IP addresses based on the X-Forwarded-For (XFF) header with Apache, most methods either make use of Apache’s SetEnvIF directive or create a mod_rewrite rule. I’ve not been able to find anywhere that covers this problem when the XFF header contains multiple IPs (which is allowed to happen as directed by the RFC) and I don’t feel its correct to allow a request to get as far as needing to execute Apache mod_rewrite rules.

This becomes a deeper requirement when you’re missing deep packet inspection firewalls but would still like the ability to deny specific IP addresses without requiring a further application tier above that of your web stack. We have exactly that problem as our servers run on AWS EC2 behind Elastic Load Balancers (ELBs). ELBs don’t have any capability (at the time of this writing) to set deny rules on incoming traffic to your servers, therefore you need to deal with this in the application tier.

We have implemented the following in our Apache config:

```
CustomLog ${APACHE_LOG_DIR}/DenyIP_access.log combinedPlus env=DenyIP

<Directory />
    #Example..
    SetEnvIF X-Forwarded-For "(,| |^)192\.168\.1\.1(,| |$)" DenyIP
    SetEnvIF X-Forwarded-For "(,| |^)10\.1\.1\.1(,| |$)" DenyIP
    Order allow,deny
    Deny from env=DenyIP
    Allow from all
</Directory>
```
This gives us the ability to block a request if the IP address 192.168.1.1 OR 10.1.1.1 appears anywhere within the X-Forwarded-For header, if you want to block more IP addresses then simply add another SetEnvIF directive as i’ve already done in the above example. This method also makes allowances for multiple IPs to exist within the XFF header (and still having the ability to match correctly), and enabling one to be very specific; that what we are trying to deny is the only IP address to be denied. Whereas, if you were to set the RegEx to something like “1\.1\.1\.1″ you can easily match 111.1.1.111 as well and many other variations, so you can see its important to get this right. The above code will also keep track and store in a log file any requests that are blocked by this configuration, allowing you to check exactly when requests are being denied access. You may also want to amend your LogFormat to help further diagnosis into the XFF headers being received by Apache, you can do this as shown in the below example:

```
LogFormat "\"%{X-Forwarded-For}i\" %h %l %u %t %D \"%{Host}i\" \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" combinedPlus
```

This allows you to see in your access logs other information such as the contents of the XFF header, the User-Agent header, %D (time it takes for Apache to process the request) and so on. From there you could make even more use of the logs Apache is collecting and turn the data into a simple tracking/monitoring tool.

Note that of course XFF headers can be spoofed and certainly not 100% reliable, however this does gain you back some control and can come in handy at times.

I hope you find this useful and please feel free to comment or ask questions.