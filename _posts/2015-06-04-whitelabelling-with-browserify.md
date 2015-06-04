---
layout: post
title: Whitelabelling with Browserify
categories: programming
author: luke_hansell
tags: development whitelabel browserify
comments: true
excerpt: "Browserify is an awesome tool that wraps up your application into a single javascript bundle for use clientside. For this Browserify is awesome, but it isn't very flexible."
---

[*Browserify*](http://browserify.org/) is an awesome tool that wraps up your application into a single javascript bundle for use clientside.

For this Browserify is awesome, but it isn't very flexible.

By default with Browserify you have one dependency tree which creates one app.

For instance, consider the following example:

```
// foo.js
var bar = require('./bar');

console.log(bar());
```


```
// bar.js
module.exports = function(){
  return 'bar';
}
```

If we create these files then run
`browserify foo.js -o app.js`
running `node app.js` will give us `bar` in the console.

But what about if we want to make two versions of `app.js`? One which outputs "bar" and one which outputs "baz"?

To do this normally using we'd have to write two versions of `foo.js` and two versions of `bar.js` and bundle them separately. In this example this isn't too much of a problem. But consider instead that we have an e-commerce website and we want to be able to sell under different brand names. Our templates might be React components and we might require a header in these that we want to change depending on the brand that is requested. Suddenly the problem is not so trivial.

You could write an `if` statement which decides which brand you're on and loads the correct header, but that means sending every whitelabel and every iteration of your site to the client. This will massively bloat your bundled js for code your customers aren't even using.

Instead lets consider an alternative: redirecting the require statement.

*This might sound dangerous to begin with, but stay with me.*

Using [*Redirectify*](https://www.npmjs.com/package/redirectify), a Browserify transform, we can specify files which override those which are required in the normal dependency tree.

Lets see an example:

`foo.js` and `bar.js` remain the same, but we create a third file called `alt_bar.js`:

```
// alt_bar.js
module.exports = function(){
  return 'baz';
}
```

Now using Redirectify we can _redirect_ that require statement to pick up the alternative `bar.js`

`browserify -t [ redirectify --prefix 'alt_' ] foo.js -o app.js`

running `node app.js` will now give us `baz` in the console.

Now we can loop over all the brands we require, modifying the params to redirectify as we go, to build as many packages as necessary.

For instance, with:

- bar.js
- brand_a_bar.js
- brand_b_bar.js

we can build multiple prefixed `app.js` files such as `brand_a_app.js`, `brand_b_app.js` and `brand_c_app.js`. Since no override for "brand_c" exists Redirectify will default to plain old `bar.js`.

Then on page load you can decide which version of `app.js` to send to the client.

We're using this to whitelabel our sites without forcing the client to download every possible site and without having to write complex logic into each template with multiple dependency trees.