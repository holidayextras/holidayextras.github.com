---
date: 2014-06-05T12:00:00.000Z
layout: post
title: Avoiding common pitfalls starting Node.js
categories: NodeJS
author: Andrew Castle
tags: NodeJS Javascript Promises
comments: 
  - true
  - "true"
time: 5 mins
published: true
---

Not too long ago one morning I walked into the office and found myself tasked with a project that would be written entirely in Node.js, something which I knew very little about. But hey, it’s only Javascript right, how hard can it be? Or so I thought…

Holiday Extras adopted Node.js fairly early, we as a company started utilising it around June 2011. By April 2012 we were using this new and upcoming language in a stable production environment. Utilising Socket IO and Node.js we were able to deliver vital call information directly to web browsers within our company call centre- a system still being used today.

So back to starting out with Node.js. What I want to cover are the main mistakes I made, and more importantly why and how you should avoid them.

## 1. Deeply nested callbacks.
When getting started with Node.js at first you may find the idea of callbacks unnatural (especially if you’ve come from a synchronous language like PHP). You should however be able to pick up the concept quickly enough. The danger however, comes if you get too carried away and end up deeply nesting your callbacks. This results in code that no one wants to have the displeasure of having to read or maintain after you, like this for example:

```javascript
doSomething(function (err1, result1) {
  if(err1) return console.log(err1);
  thenDoThis(result1, function (err2, result2) {
    if(err2) return console.log(err2);
    andThenThis(result2, function (err3, result3) {
      if(err3) return console.log(err3);
      console.log('Finished');
    });
  });
});
```

### Promises
One solution to this awful mess is to use Promises. If you don’t know what Promises are it’s definitely worth investing some time in getting to know and understand how they work. There are many Promise libraries already available however one of the more popular ones is [Q](https://github.com/kriskowal/q). Here is the same code above using Promises (with Q):

```javascript
Q.fcall(doSomething)
.then(thenDoThis)
.then(andThenThis)
.then(function (result3) {
  console.log('Finished');
})
.catch(function (error) {
  // Catch any errors from any of the above functions
  console.log(error);
}).done();
```

There is a bit of background work required in order to adapt your functions to return Promises as apposed to regular callbacks. Make sure you take a look at the relevant documentation for the specifics. You can however see that through utilising Promises you can greatly reduce not only the amount of code required, but also have it presented in a more organised and readable fashion.

### Control flow modules
Another alternative to Promises is to use control flow modules which can help to reduce code complexity. A popular module is [Async](https://github.com/caolan/async). Below I’ve modified the original deeply nested code to use Async:

```javascript
async.waterfall([
  function(cb) {
    doSomething(cb);
  },
  function(result1, cb) {
    thenDoThis(result1, cb);
  },
  function(result2, cb) {
    andThenThis(result2, cb);
  }
], function (err, result3) {
   if(err) return console.log(err);
   console.log('Finished');
});
```

As with the Promise example above you can see that the code is once again much more readable. Obviously the methods I’m using in this example are very simple so you will need to use your judgement in regards as to which method to use (if any). What I will say for sure is that any other developers that have to further develop the code you write in the future will definitely thank you (don’t forget it might even be you!).

## 2. Remember to return callbacks
Leading on from the above section you’ll realise that as you get to grips with Node.js that callbacks will start to become a common sight. One thing thats important to remember is to always return your callbacks. You’ll find this becomes more necessary the more complex your code gets. Consider the following code:

```javascript
function doSomething(err, cb) {
  if(err) cb('Error');
  cb(null, 'Success');
}

doSomething(true, function(err, result) {
  console.log(err, result);
});
```

What you’ll actually find in your terminal output is:

```javascript
Error undefined
null 'Success'
```

So what’s actually happened is that the callback has been executed twice. While this wouldn’t necessarily be a problem in most cases, in others it can result in unexpected behaviour which can be very problematic to debug. I found this out the hard way on many occasions, so save yourself the trouble and return callbacks where you can. The correct code would be:

```javascript
function doSomething(err, cb) {
  if(err) return cb('Error');
  return cb(null, 'Success');
}
```

This will result in the expected terminal output of just: `Error undefined`.

## 3. No modularisation/separation of code
Another common mistake I made when working on my first Node.js project was to not separate my code enough. I’ve since tried to avoid letting my Javascript files and methods from becoming too long. Node.js has an inbuilt Module system, accessible via `module.exports` which can be used to export both objects and functions with ease. I’ve included an simple example of an exported function below.


```javascript
//hello.js
module.exports = function(name) {
  return 'Hello ' + name;
}
```

```javascript
//test.js
var sayHello = require('./hello');
sayHello('John'); // returns 'Hello John'
```

So make sure you separate your code as much as you can. Don’t put all of your code in `server.js` as I did in my first project. Node has an excellent module system, don’t forget to use it!


## 4. Avoid poor test coverage
Ensuring that you have good test coverage on your code is a fundamental part of web development (or any sort of programming for that matter!). Im ashamed to say that on my ever Node.js project I had 0% test coverage on my production ‘ready’ code. While I can take some comfort that my particular project turned out to be quite stable, it’s definitely not the right attitude to have.

Writing tests has now become a daily task in my role as a Web Developer at Holiday Extras, and I strongly advise anyone getting started with Node to start with testing in mind. Whether you’d rather write your tests after you’ve written your code, or whether you prefer the [TDD](http://en.wikipedia.org/wiki/Test-driven_development) approach, make sure you allocate time in your project for writing tests.

There are many test frameworks available in Node that can take away some of the pain of writing unit tests. At Holiday Extras our testing framework of choice is currently [Mocha](Mochahttp://mochajs.org/) which provides a simple and intuitive way of constructing tests.

## 5. Lack of logging
No matter how big or small your Node.js application is if it’s going to be serving visitors it’s essential for you (and them for that matter) that you have adequate logging in place.

When I refer to logging I’m not just referring to our good old friend `console.log` and `stdout`. While it’s important that you’ve got that in place as a basic audit log, it’s also important to be made aware of errors (most commonly uncaught exceptions) as they happen. Not later when one of your visitors contacts you and reports a problem.

There are many Node.js modules available to assist with logging. One popular example of such a module is [Winston](https://github.com/flatiron/winston) which can be configured to catch uncaught exceptions and notify you immediately by email when one is caught. This information can then put you in a better position to handle and fix those errors.

Another commercial alternative is [Bugsnag](https://bugsnag.com) which specialises in allowing you to easily detect and diagnose crashes in your applications. Bugsnag has proven to be very effective for us at Holiday Extras providing us with useful stack-trace information if and when crashes occur, and more importantly we are notified of them immediately.

##6. Keep restarting the server when developing
If you’ve started developing with Node.js you’ll know that if you have application that runs constantly that every time you make a change to a file, you have to exit and restart the application. This was something I just got accustomed to doing, however I was quickly shown the error of my ways by one of my colleagues. Thankfully it turns out that many within the Node.js community have identified this unproductive and repetitive task. As a result there are various modules available that will monitor changes in your projects files and automatically restart your application- as if by magic!

There are two modules that I’ve personally used and recommend: [Supervisor](https://github.com/isaacs/node-supervisor) and [Nodemon](http://nodemon.io/).

- - -

I hope I’ve highlighted above some of the common mistakes I made when getting started with Node.js. I’m pleased to say that as with most languages the more you get accustomed to writing it the easier it becomes and the less mistakes you make. As a final point I’ve included below a few links to some resources that helped me when I started out with Node.js.

[Mastering Node.js (free eBook)](https://github.com/tj/masteringnode)

[Felix’s Node.js Guide](http://nodeguide.com/)

[Smashing Node.js](http://smashingnode.com/)