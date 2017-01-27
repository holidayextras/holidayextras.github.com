---
layout: post
title: Speeding up your Grunt tasks with Parallelize
categories: NodeJS
author: joe_warren
tags: grunt task parallelize parallel
comments: true
excerpt: "\"At Holiday Extras we have a grunt task that takes nearly 9 minutes to complete.\" - This is something I never want to have to say to anyone. It's absurd."
---

> At Holiday Extras we have a grunt task that takes nearly 9 minutes to complete.

This is something I never want to have to say to anyone. It's absurd.

The aforementioned task has the responsibility of compiling our [Less](http://lesscss.org/) into 156 different css files for 78 sites and always growing. It's understandable that it takes some time to compile them, the [Less](http://lesscss.org/) isn't straight forward, it's pulling shared styling in from all over the place. What doesn't make sense is that we were building these serially.

This has been a problem we've looked at before, but not given much time to, we were never able to find a quick solution here so had to deal with it. Today though I had a google and found [grunt-parallelize](https://www.npmjs.com/package/grunt-parallelize).

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

Okay... Did it actually work? I loaded up a couple of the sites with the freshly compiled CSS, perfect.

[grunt-parallelize](https://www.npmjs.com/package/grunt-parallelize) is smart and I'd recommend using it for any grunt task that does CPU intensive work on a number of files. You'll notice the difference.
