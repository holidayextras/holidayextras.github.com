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

Intro here

## Building a team

Lead by the UX/UI Guild but open to everyone, we assembled a crack team of designers, engineers and testers to work on the project over the span of several weeks.

## Testing

Made a point of using keyboard rather than relying on the mouse or touchpad.

Used VoiceOver to get an idea of problems affecting screenreader users. We're aware of the limitations of testing with a single screenreader but it did provide a useful benchmark.

Used some automated testing in the form of browser plugins.

Went through the site together and made a list of issues that we'd like to focus on. Prioritised issues affecting keyboard users.

## Better semantics

Making use of HTML5's new structural elements (`section`, `header`, `footer`, `nav`) where appropriate and complementing those with WAI-ARIA landmark roles (e.g. `role="banner"`, `role="contentinfo"`, `role="navigation"`) to ensure widest possible compatibility.

Used `aria-label` and `aria-labelled-by` attributes to describe landmarks.

Eusured heading elements are used appropriately. Added hidden headings for screen reader users to aid navigation.


## Easier keyboard navigation

Improved the tab order through elements in the product list so that it more closely follows the visual order.

Made sure all links have `href` attributes so that they receive keyboard focus.

Improved modal dialogs so that keyboard focus is trapped inside them and is correctly returned to the original element when closed.

Made sure keyboard focus is visible.

## Improved text alternatives

Added text alternatives to star ratings.

Made sure images in links had text alternatives that describe their purpose.

## Fewer distractions

Removed duplicated elements using `role="presentation"`, `aria-hidden` and `tabindex`.

Removed unnecessary text alternatives.

## Announcing changes

Using `aria-live` to announce the number of products being displayed when the product list is filtered.

## Next steps
