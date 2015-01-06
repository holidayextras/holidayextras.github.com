---
layout: post
title: Page speed module for NodeJs + Express now available on npm
date: 2012-04-20 12:00:00
categories: NodeJS
author: Paul Clarke
tags: NodeJS NPM PageSpeed
comments: true
time: 2 min
redirect_from:
  - 2012/04/20/page-speed-module-for-node-express/
---

## Page Speed Module
This is the <s>first</s> <s>second</s> third draft<sup>*</sup> of a page speed module for node.js and express. For one reason or another we can’t currently use the Apache page speed module in our production web servers, so we’ve rolled our own code in PHP over the past couple of years. In shifting over to NodeJS we were in danger of missing out some of the goodness we were taking for granted, so as part of a recent hack day we started working on a module to give us back some of those benefits.

So far it only does three of the things we need every time a response is generated, but we’ll be adding more to it soon, like setting headers and so on.

It currently  moves all CSS calls to the head, moves JavaScript calls to the bottom of the body, and strips white space.

### How to install it

```
npm install pagespeed
```

### How to use it

```javascript
var pagespeed = require('pagespeed');
app.configure( function( ) {
...
app.use( pagespeed.middleware( ));
...
});
```

### Let’s collaborate
[Clone it on the github](https://github.com/pauly/pagespeed), send some pull requests if you fix a bug or even add some more functionality.

<sup>*</sup> The first draft passed all the tests but did not actually include the middleware, and the second draft moved our css and js outside of important [conditional comments](https://github.com/pauly/pagespeed/commit/ef42574a78ca0a4173814e6dc02094670f7a14ec)