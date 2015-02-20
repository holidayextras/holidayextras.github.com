---
layout: project
title: Flex-Less
tagline: A mixin created to enable you to use all basic functions of CSS flexbox for all supported browsers.
date: 2015-02-20 12:00:00
tags: less mixin css flexbox
comments: true
github: https://github.com/holidayextras/flex-less
---

<iframe src="http://ghbtns.com/github-btn.html?user=holidayextras&repo=flex-less&type=watch&count=true"
  allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" align="center"></iframe>


Flexbox is awesome! It's a powerful addition to CSS and you should be using it NOW!
The CSS Flexible Box Layout Module [CSS - Flexible](www.w3.org/TR/css3-flexbox/) has been a Candidate Recommendation since September 2012.

> "That’s cool! But I can’t use it because XYZ doesn’t support it."

Since when has that stopped us using box-shadows or border-radius?
Use flexbox now on small page components as progressive enhancement, and with Flex Less you wont have to worry about the countless vendor prefixes for flexbox.

Flex-Less is a mixin created to enable you to use all basic functions of CSS flexbox for all supported browsers.


## Flexbox support
Flexbox has had multiple types of syntax since it's introduction these are...

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

## Flex-less
If you want to learn more about FlexBox please visit [A Complete Guide to Flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/) a comprehensive and brilliant guide (as always) from CSS Tricks
(descriptions for each section below are from this very guide)

### Display
This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```css
@flex: flex, flex-inline
```
  
### Flex-direction
This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

```css
@type: row, column
@direction: normal, reverse
```

### Flexbox-wrap
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.

```css
@wrap: wrap, nowrap, wrap-reverse
```

### Flexbox Justify Content
This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

```css
@justify-content: start, end, center, space-between, space-around
```
  
### Flexbox Align Items
This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

```css
@align-items: center, baseline, stretch, start, end
```
  
### Flexbox Align Content
This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how ```justify-content``` aligns individual items within the main-axis.

```css
@align-items: start, end, center, space-between, space-around
```

## Flexbox Bugs
There is a superb repo on github which references all FlexBox browser bugs - 
https://github.com/philipwalton/flexbugs
