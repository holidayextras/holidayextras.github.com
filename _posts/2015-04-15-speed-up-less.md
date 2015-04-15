---
layout: post
title: Speeding up Less compilation with Grunt
categories: grunt
author: joe_warren
tags: grunt less parallelize
comments: true
excerpt: "\"At Holiday Extras we have a grunt task that takes 8m45.933s to complete.\" - This is something I never want to have to say to anyone."
---

> At Holiday Extras we have a grunt task that takes `real 8m45.933s` to complete.

This is something I never want to have to say to anyone. It's absurd.

The aforementioned task has the responsibility of compiling our less into 156 different css files for 78 sites and always growing. It's understandable that it takes some time to compile them, the less isn't straight forward. It's pulling shared styling in from all over the place. What doesn't make sense is that we were building these serially.

This has been a problem we've looked at before but not given much time too. We we're never able to find a quick solution here so had to deal with it. Today though I had a google and found [grunt-parallelize](https://www.npmjs.com/package/grunt-parallelize).

> This plugin divides src files of your task and executes them in parallel.

> If your task has too many src files and it's CPU intensive like JSHint, this plugin reduces your build time significantly.

That second sentence made me tingle. It was going to solve my problem.


I added this to our Gruntfile and ran `time grunt styles` then made a drink.

```javascript
parallelize: {
  less: {
    all: require('os').cpus().length
  }
}
```

When I got back to my screen I saw this `real 0m58.901s`.

![](http://media4.giphy.com/media/7VIDOAbxnlQs/giphy.gif)

Okay... Did it actually work? I loaded up a couple of the sites with the freshly compiled css, perfect.

[grunt-parallelize](https://www.npmjs.com/package/grunt-parallelize) is smart and i'd recommend using it for any grunt task that does CPU intensive work on a number of files. You'll notice the difference.
