---
layout: post
title: Specifying the version of Node.js used by AWS OpsWorks in CloudFormation templates
categories: Ops
author: rob_johnson
tags: aws opsworks node.js version layer cloudformation template
comments: true
---

We have some small parts of our systems still living on [AWS OpsWorks](https://aws.amazon.com/opsworks/) and towards the end of last week we noticed some strange behaviour after deploying an updated version via our [CloudFormation](https://aws.amazon.com/cloudformation/) template.

After debugging we found that somehow the OpsWorks [Node.js](https://nodejs.org/) layer had started installing node version 0.12*x*. Even though it's not documented anywhere or even an option in AWS console.

Our build pipeline was targeting what we thought was the maximum version available and building all of the assets with version 0.10.*x*, some of which failled when trying to run under version 0.12.*x*.

The answer, which was too hard by far to find, lies in the [documentation for the **CreateLayer** API](http://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html#opsworks-CreateLayer-request-Type), but below is the snippet required inside of the CloudFormation template to make this work;

```json
"Type": "AWS::OpsWorks::Layer",
"Properties": {
	"Type": "nodejs-app",
	"Attributes": {
		"NodejsVersion": "0.10.38"
	},

```
To ensure you are using a supported version, you can take it from the management console GUI.

Here's hoping that this can save someone the time it took me to find it.