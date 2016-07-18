---
layout: post
title: Drawing squares of colour with code
categories: canvas
author: joe_warren
tags: html5 canvas javascript
comments: true
---

The Canvas API has been available in Chrome for a long time now, version 4 in fact. It dawned on me one evening late last year that i'd never actually played around with it. Enter my super duper creative imagination.

This beautiful piece of art emerged.
![Colours]({{ site.baseurl }}/assets/img/colours.gif)


I started with a colour palette that I found on [Colourlovers](http;//www.colourlovers.com) and built that into an array.

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.4/gist-embed.min.js"></script>
<code data-gist-id="f4a9f80c1580b6c06280cbc4e0aea9ca" data-gist-line="13-16"></code>
<small>[View the full gist](https://gist.github.com/Joezo/f4a9f80c1580b6c06280cbc4e0aea9ca)</small>

Next I looped through the available space on the canvas and picked a random colour for each predefined tile size and drew it. There are a lot of magic numbers in here, they just came around from me changing them and seeing what difference they made until I settled on them. That's some of the fun of drawing things with code, the tiniest of changes can produce the most dramatic results.

The code isn't pretty, it's certainly not the most efficient way of doing it either. I had fun though and felt strangely proud of my colourful squares. It felt like the first time i'd successfully printed out `$_GET` in PHP, exciting, I was discovering a whole new realm of development.

The point i'm trying to make is that you should play around with a technology you havn't used before, you might end up with your own colourful squares.
