---
layout: project
title: Flex-Less
tagline: A mixin created to enable to to use all basic functions of CSS flexbox for all supported flexbox browsers.
date: 2015-02-20 12:00:00
tags: less mixin css flexbox
comments: true
github: https://github.com/holidayextras/flex-less
---

<iframe src="http://ghbtns.com/github-btn.html?user=holidayextras&repo=flex-less&type=watch&count=true"
  allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" align="center"></iframe>


Flexbox is awesome! It's a powerful addition to CSS and you should be using it NOW!
The CSS Flexible Box Layout Module (www.w3.org/TR/css3-flexbox/) has been a Candidate Recommendation since September 2012.

> "That’s cool! But I can’t use it because XYZ doesn’t support it."

Since when has that stopped us using box-shadows or border-radius?
Use flexbox now on small page components as progressive enhancement, and with Flex Less you wont have to worry about the countless vendor prefixes for flexbox.

Flex Less is a mixin created to enable to to use all basic functions of CSS flexbox for all supported flexbox browsers.


## Flexbox support
Flexbox has had multiple types on syntax since it's introduction these are...

### 2009 syntax 
`display:box`  
*(with -webkit- prefix)*  
Android  
Safari v.3+  
Blackberry v.7+  

### 2011 syntax 
`display:flexbox`  
*(with -ms- prefix)*  
IE v.10  

### Current syntax 
`display:flex`
Chrome  
Firefox  
Opera  
IE v.11  
Android v.4.4  
Safari v.6+  
Blackberry v.10+  

## Flexbox
```css
@flex: flex, flex-inline
```
  
## Flexbox Direction
```css
@type: row, column
@direction: normal, reverse
```

## Flexbox Wrap
```css
@wrap: wrap, nowrap, wrap-reverse
```
  
## Flexbox Justify Content
```css
@justify-content: start, end, center, space-between, space-around
```

*FIXME - Creates duplicate CSS*
  
## Flexbox Align Items
```css
@align-items: center, baseline, stretch, start, end
```
  
## Flexbox Align Content
```css
@align-items: start, end, center, space-between, space-around
```

*FIXME - Creates duplicate CSS*
