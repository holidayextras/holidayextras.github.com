---
layout: post
title: 5 tips for great performance from your Cordova app
date: 2014-01-20 12:00:00
categories: Mobile
author: Mike Carter
tags: Mobile App Cordova iOS Android
comments: true
time: 5 mins
redirect_from: 
  - 2014/01/20/getting-performance-cordova-based-application/
---

<img src="http://cordova.apache.org/images/cordova_bot.png" alt="cordova logo">

Holiday Extras have recently launched their first [mobile app](http://mobile.holidayextras.co.uk/) in parallel on [iOS](http://mobile.holidayextras.co.uk/) and [Android](http://mobile.holidayextras.co.uk/). Our main developmental aims for the early version were to 1. keep the codebase as maintainable as possible using our existing skill sets, 2. maintain the ability to iterate quickly, and 3. make the app as fast as possible.

Given that we’re a bit of a web development powerhouse, we settled on using [Apache Cordova](http://cordova.apache.org/) to put a JavaScript app on a iOS and Android. It’s quick to develop and maintain for us because we already know how to write front-end JavaScript apps, but how do you go about getting native performance from a Cordova based application? Here are 5 steps we took:

## 1. Avoid DOM manipulation where possible

Complex DOM manipulation is computationally expensive. For this reason, we preserve as much of our templating as possible between page transitions and then only change the parts of the page that need to be changed. For example, when viewing a product, if you navigate back to your search results and then click back into the product you were previously viewing, no new content is written to the DOM, it simply shows what was already there again via a CSS transition.

This can make your Cordova app code a little more complex, but a quick check to see if some data has changed is minuscule compared to the computational cost of re-rendering an entire view needlessly.

## 2. Avoid slow CSS

CSS animation, drop shadows and opacity all have a serious computational overhead that’s worth considering on a mobile device. When we started the Holiday Extras mobile app we attempted to use iOS-esque slide-in transitions between our views and aesthetically pleasing text shadows. These looked and worked great on the latest iPhone 5s, but on older (and more widely used) devices we noticed flickering and tearing as the phones struggled to keep everything running smoothly.

We found that by avoiding certain CSS, and then using fades instead of slides we could get much better performance from our app. All devices seem to handle fade transitions really well, and they look sleek enough to be used on iOS too. The performance difference is like night and day, the Cordova app behaves in a much more responsive way, and has the snappy feel we were striving for.

## 3. Use user thinking time wisely

You can use the time the user spends thinking about what to do next on your application to your advantage. Prepare content for display before it’s shown, pre-fetch API data and show prefetched content immediately and fill in the images and other media as it loads. All these things help to speed up “time to content” and give the appearance of a more responsive application. We utilise this in the following ways on the Holiday Extras Cordova app:

* Logging a user in automatically in the background, so they see search page content straight away rather than an annoying loading bar.
* Prefetching product upgrade responses from our API when a user views a product, so if they move on to upgrades we have the content immediately.
* Prefetching a user’s bookings and storing them on the device before they go to look at them.

## 4. Long live the objects!

Excessive object setup and teardown can slow down your Cordova application quite a bit, especially when a lot of objects need to be created right as a transition occurs, as is often the case. To avoid this, create as much as you can on launch and keep a reference them around if you’re going to need them.

To do this we use a method outlined by Sam Breed in [this talk](https://www.youtube.com/watch?v=Lm05e5sJaE8) at Backbone Conf. This isn’t a particularly tricky change to make, but helps us to 1.  keep track of what instantiations we have floating around, and 2. avoid unnecessary teardown and setup of objects, and 3. ensure a dependency contract is enforced, which is always nice to have when it comes to writing tests.

## 5. Profile, profile profile…

You’re probably perfectly able to run most of your Cordova application in-browser. This opens up a world of browser-based profiling tools that can be really useful for identifying performance bottlenecks.

Most developers will know to use Chrome’s built in timeline and profiling developer tools to monitor memory and CPU usage. However, few know that you can actually bring up a really useful [profiling flame chart](https://developers.google.com/chrome-developer-tools/docs/flame-chart) to identify peaks in CPU usage and trace all the calls that cause them. By running this profiling over slow actions in your app you can easily identify exactly what’s causing lag, and then take necessary steps in your code to smooth these peaks out and improve performance.

These aren’t the only optimisations you can make for performance, but a good starting point for anyone attempting to make a Cordova based application.