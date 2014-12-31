---
layout: project
title: Pester
tagline: Will pester you, if you're running the wrong version of Node.js for your app
date: 2014-12-31 12:00:00
tags: JS NodeJS
comments: true
github: https://github.com/holidayextras/node-pester/
---

<iframe src="http://ghbtns.com/github-btn.html?user=holidayextras&repo=node-pester&type=watch&count=true"
  allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" align="center"></iframe>

This small module will check your package.json and make sure you are running the Node.js version specfied in package.engines.node.

## Installation

```
npm install pester
```

## Usage
Just require pester in your root file (server.js).

```
require('pester');
```

Which will print a warning like so if your Node.js version does not match that which is specified in your package.json file.

```
---------------------------------------------------------------------
WARNING: Node version doesn't match version specified in package.json!
Current: 0.10.23 Required: 0.10.24
---------------------------------------------------------------------
```