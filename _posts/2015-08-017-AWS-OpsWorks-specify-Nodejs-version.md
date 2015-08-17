---
layout: post
title: Specifying the version of Node.js used by AWS OpsWorks in CloudFormation templates
categories: Ops
author: rob_johnson
tags: aws opsworks node.js version layer cloudformation template
comments: true
---

We have some small parts of our systems still living on [AWS OpsWorks](https://aws.amazon.com/opsworks/) and towards the end of last week we noticed some strange behaviour after deploying an updated version via our [cloudformation template](https://aws.amazon.com/cloudformation/).

After debugging we found that somehow the OpsWorks [Node.js](https://nodejs.org/) layer had started installing node version 0.12. Anywhere you look inside of the AWS console the only option is for node version 0.10.*x*.

Due to the previous maximum version, our build pipeline was building all of the assets with version 0.10.*x* and some of them were failing when trying to run under version 0.12.*x*.

This would ordinarily be a fairly straightforward problem to resolve, but it took far longer to locate the answer to this question than I was happy with, hence the reason for sharing this.

The answer lies in the documentation for the **CreateLayer** API which can be found [here](http://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html#opsworks-CreateLayer-request-Type), but below is the snippet required inside of the cloudformation template to make this work;

```
"Type": "AWS::OpsWorks::Layer",
"Properties": {
	"Type": "nodejs-app",
	"Attributes": {
		"NodejsVersion": "0.10.38"
	},
...
```
The version number matches that found in the management console GUI.

Heres hoping that this can save someone the time it took me to find it.