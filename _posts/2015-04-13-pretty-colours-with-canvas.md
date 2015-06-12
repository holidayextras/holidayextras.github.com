---
layout: post
title: Drawing squares with code
categories: canvas
author: joe_warren
tags: html5 canvas javascript
comments: true
---

The Canvas API has been available in Chrome for a long time now, version 4 in fact. It dawned on me one evening late last year that i'd never actually played around with it. Enter my super duper creative imagination.

This beautiful piece of art emerged.
![Colours]({{ site.baseurl }}/assets/img/colours.gif)


I started with a colour palette that I found on [Colourlovers](http;//www.colourlovers.com) and built that into an array.

```javascript
var colours = [
  '#7FDBFF','#0074D9','#001F3F','#39CCCC','#2ECC40','#3D9970',
  '#01FF70','#FFDC00','#FF851B','#FF4136','#F012BE','#B10DC9','#85144B',
];
```

Next I looped through the available space on the canvas and picked a random colour for each predefined tile size and drew it. There are a lot of magic numbers in here, they just came around from me changing them and seeing what difference they made until I settled on them. That's some of the fun of drawing things with code, the tiniest of changes can produce the silliest of results.

```javascript
var drawMosaic = function(canvas, canvasContext){
  var tilesTop = 0;
  var tilesLeft = 0;
  var tileSize = 40;
  var tileCountLeft = 35;
  var tileCountTop = 55;
  canvasContext.beginPath();
  for(var x=0; x<2000; x++){
    canvasContext.fillStyle = colours[Math.floor(Math.random() * colours.length)];
    canvasContext.fillRect(tilesTop * tileSize,tilesLeft*tileSize,tileSize,tileSize);
    if(tilesTop < tileCountTop){
      tilesTop++;
    } else {
      tilesTop = 0;
      tilesLeft++;
    }
    if(tilesLeft == tileCountLeft){
      break;
    }
  }
}
```
<sup>_Full script is below_</sup>


_Some inspiring words_
The code isn't pretty, it's certainly not the most efficient way of doing it either. I had fun though and felt strangely proud of my colourful squares. It felt like the first time i'd successfully printed out `$_GET` in PHP, exciting, I was discovering a whole new realm of development. The point i'm trying to get to is that you should play around with a technology you havn't used before, you might end up with your own colourful squares.



```javascript
var canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canvasContext = canvas.getcanvasContext('2d');

var colours = [
  '#7FDBFF','#0074D9','#001F3F','#39CCCC','#2ECC40','#3D9970',
  '#01FF70','#FFDC00','#FF851B','#FF4136','#F012BE','#B10DC9','#85144B',
];

var drawMosaic = function(canvas, canvasContext){
  var tilesTop = 0;
  var tilesLeft = 0;
  var tileSize = 40;
  var tileCountLeft = 35;
  var tileCountTop = 55;
  canvasContext.beginPath();
  for(var x=0; x<2000; x++){
    canvasContext.fillStyle = colours[Math.floor(Math.random() * colours.length)];
    canvasContext.fillRect(tilesTop * tileSize,tilesLeft*tileSize,tileSize,tileSize);
    if(tilesTop < tileCountTop){
      tilesTop++;
    } else {
      tilesTop = 0;
      tilesLeft++;
    }
    if(tilesLeft == tileCountLeft){
      break;
    }
  }
}

var animate = function(canvas, canvasContext){
  requestAnimationFrame(function(){
    animate(canvas, canvasContext);
  });
  // some code to slow down fps
}
drawMosaic(canvas, canvasContext);

setTimeout(function(){
  animate(canvas, canvasContext);
},1000);
```
