---
comments: "true"
layout: post
published: true
title: "Building sites dynamically with Grunt"
author: luke_frake
categories: NodeJS
tags: grunt gruntjs javascript
---


I’m a Front End Developer at a company that sells theme park breaks and our latest project, was a huge rewrite of our back end systems. My role in the project was mainly updating our front end, including removing our old [Smarty](http://www.smarty.net/) templates, and updating them to use a mixture of [Handlebars](http://handlebarsjs.com) via [Assemble](http://assemble.io) and [Dust.js](http://linkedin.github.io/dustjs/).

As we serve up 6 sites that sell very similar products, we made the decision to use a single template group. We manage to share ~95% of the CSS between the 6 sites, with ~5% being brand specific styles. We call each of these sites a “blueprint”.

We didn’t have much of a build process at the time, we were using [Grunt](http://gruntjs.com/), but only to compile and minify our Sass. So the first thing I started with was trying to make our build process awesome.

Anybody who’s used Grunt before will tell you that when starting with your clean and beautiful Gruntfile, it can very quickly descend into madness. This is especially true, when you are using a single Gruntfile for 6 blueprints like us.

Very quickly you start getting repetitive commands like this.

``` javascript
var configObject = {
  sass: {
    options: {
      sourcemap: &#x27;none&#x27;
    },
    dist: {
      files: {
&#x27;dist/brandFoo/css/main.min.css&#x27; : &#x27;src/styles/brandFoo/default.scss&#x27;,
&#x27;dist/brandBar/css/main.min.css&#x27; : &#x27;src/styles/brandBar/default.scss&#x27;,
&#x27;dist/brandBaz/css/main.min.css&#x27; : &#x27;src/styles/brandBaz/default.scss&#x27;
      }
    }
  }
};
```

I was watching my beautiful code become more and more disgusting by the minute, with every brand or new task I added taking me about half an hour or more, and explaining the process to other people was becoming increasingly convoluted.

## *A Gruntfile is just Javascript*

I had forgotten the main point about Grunt, A Gruntfile is just Javascript! So obvious when somebody says it to you, but can very easily be forgotten.

So now it’s easy to think, that all you’re doing with Grunt is passing an object into a function, like so.

``` javascript
grunt.initConfig( {} );
```

This means we can dynamically build the object, so thats what I did. I’ve changed my Gruntfile now, so at the top I create a brand array, and I also create a few empty objects.

``` javascript
// Going to loop these later
var brands = [&#x27;brandFoo&#x27;, &#x27;brandBar&#x27;, &#x27;brandBaz&#x27;];
// Going to fill these later
var sass = {};
```

I then loop over the brands array, using Lo-Dash, to create my brand information.

``` javascript
_.forEach( brands, function( brand ) {
  // Do some brand stuff
} );
```

Inside the loop, I can start pushing what I would normally write directly into my initConfig object.

``` javascript
sass[&#x27;dist/&#x27; + brand + &#x27;/css/main.min.css&#x27;] = &#x27;src/styles/&#x27; + brand + &#x27;/default.scss&#x27;;
```

This means that when I come to create my configObject, I can just do something like this.

``` javascript
var configObject = {
  sass: {
    options: {
      sourcemap: &#x27;none&#x27;
    },
    dist: {
      files: sass
    }
  }
};
```

*Note that anything non brand specific goes into the configObject. e.g. you only want 1 lot of options.*

If you log your configObject out, it would look more like this.

``` javascript
var configObject = {
  sass: {
    options: {
      sourcemap: &#x27;none&#x27;
    },
    dist: {
      files: {
&#x27;dist/brandFoo/css/main.min.css&#x27; : &#x27;src/styles/brandFoo/default.scss&#x27;,
&#x27;dist/brandBar/css/main.min.css&#x27; : &#x27;src/styles/brandBar/default.scss&#x27;,
&#x27;dist/brandBaz/css/main.min.css&#x27; : &#x27;src/styles/brandBaz/default.scss&#x27;
      }
    }
  }
};
```

The eagle-eyed amongst you will notice that’s exactly what we had above. This means, that when I go to add a new brand, I only need to add it to the brands array, Grunt will do all the hard work for me.

When this technique is used over an entire Gruntfile running many tasks, it can take a lot of pain away. You can see an example of my Gruntfile [here](https://github.com/lukefrake/snippets/blob/master/Gruntfile.js).

I would love to hear your thoughts and opinions on this technique, so please comment away.
