---
layout: post
title: Improving Accessibility
categories: Accessibility
author: matt_obee
tags: accessibility
comments: true
excerpt:
---

## Introduction

<mark>TODO:</mark> Intro here

<mark>Might be best for Jack to write this bit.</mark>

## Building a team

<mark>TODO:</mark> Lead by the UX/UI Guild but open to everyone, we assembled a crack team of designers, engineers and testers to work on the project over the span of several weeks.

<mark>Might be best for Jack to write this bit.</mark>

## Testing for accessibility

We know that keyboard accessibility is important for all sorts of people. As well as blind people who frequently use a keyboard as their primary method of navigating web content, people with motor disabilities or reduced dexterity and those without use of their hands also rely on keyboards or specialist devices that emulate keyboard functionality. We made a point of testing everything with a keyboard, without relying on a mouse or touchpad.

We're all Mac users at Holiday Extras which meant that we all had a modern screen reader installed and ready to go. We used VoiceOver—both individually and as a group—to explore the website and to attempt to complete the booking process. We're aware of the limitations of [testing with a single screen reader](http://webaim.org/blog/three-things-voiceover/) but it did at least reveal some of the biggest issues and allow us to experiment with different solutions. Moving forward, we're keen to test with a wider range of screen readers and other assistive technologies, including those that run on Windows.

As well as our manual exploratory testing, we used several automated tools to identify rudimentary problems in markup and to point us in the direction of areas that might need further thought or investigation. One of the most useful tools we found was the [tota11y](https://khan.github.io/tota11y/) bookmarklet which annotates parts of the page to highlight accessibility features or to point out problems. A similar tool is [WebAIM's WAVE extension for Chrome](http://wave.webaim.org/extension/) which can evaluate a page in the browser without sending it to an external server.

## Better semantics

Just like search engine optimisation, the first step towards improving accessibility is to ensure appropriate use of HTML's semantic elements. For a start, we made sure paragraphs were in `p` elements, headings used the right level `h1`-`h6` elements and lists were structured as either `ul` (unordered) or `ol` (ordered) lists, depending on their purpose.

We made use of HTML5's new sectioning elements such as `main`, `section`, `header`, `footer` and `nav`. To maximise compatibility across browser and assistive technology combinations, we complemented those with the equivalent WAI-ARIA landmark roles. That meant adding `role="main"` to the `main` element, `role="banner"` to the global `header` element, `role="contentinfo"` to the global `footer` element and `role="navigation"` to each of the `nav` elements. One day soon that duplication won't be necessary but for now it's a simple way to ensure the most robust solution.

<mark>TODO:</mark> Used `aria-label` and `aria-labelled-by` attributes to describe landmarks.

<mark>TODO:</mark> Headings are one of the most important features of any HTML document.

In a few cases we added extra headings that are hidden from sighted users but accessible to those using screen readers or braille displays. We hope these will make navigation easier for customers who can't see the page. For example, we added a heading to the top of the products list `section`:

```
<h2 class="sr-only" id="availability-header">Available products</h2>
```

Things like this are hidden with CSS using a `.sr-only` class:

```
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```


## Easier keyboard navigation

<mark>TODO:</mark> Improved the tab order through elements in the product list so that it more closely follows the visual order.

<mark>TODO:</mark> Made sure all links have `href` attributes so that they receive keyboard focus.

<mark>TODO:</mark> Improved modal dialogs so that keyboard focus is trapped inside them and is correctly returned to the original element when closed.

<mark>TODO:</mark> Made sure keyboard focus is visible.

## Improved text alternatives

<mark>TODO:</mark> Added text alternatives to star ratings.

<mark>TODO:</mark> Made sure images in links had text alternatives that describe their purpose.

## Fewer distractions

<mark>TODO:</mark> Removed duplicated elements using `role="presentation"`, `aria-hidden` and `tabindex`.

<mark>TODO:</mark> Removed unnecessary text alternatives.

## Announcing changes

<mark>TODO:</mark> Using `aria-live` to announce the number of products being displayed when the product list is filtered.

## Next steps

<mark>TODO:</mark> We're pleased with our progress so far but we know there's still lots more to do.

<mark>Jack?</mark>
