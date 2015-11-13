---
layout: post
title: An Introduction to Testing for Accessibility
categories: Testing
author: matt_obee
tags: testing accessibility
comments: true
excerpt: "How to test for accessibility"
---

When I gave a talk on Checking & Exploring at [The London Web meetup in October](http://www.meetup.com/londonweb/events/214733702/), a number of people asked questions or spoke to me in the bar afterwards about accessibility (for older people and those with disabilities). I only had time to touch on it very briefly in my presentation, but that doesn't mean it isn't important. Quite the opposite, it deserves to be covered in detail in its own right. Some people asked me how testers should be trained in accessibility and others asked what sort of testing we need to perform in order to find accessibility issues.

## Accessibility is part of design

Firstly, an important disclaimer: Accessibility should be addressed as part of the design process; it's not just something that can be checked and bolted on at the end of the project. This means that responsibility for accessibility doesn't just lie with testers but with designers and developers too. Designers have to think about things like navigation methods, colour contrast and layout, while developers have to write code that exposes the right information to assistive technology (e.g. screen readers) in the right way. As [Michael Larsen](https://twitter.com/mkltesthead) said in his [presentation at Agile Testing Days 2015](http://www.agiletestingdays.com/session/making-a-web-for-everyone/), inclusive design is about making things accessible from the start with the minimum amount of retrospective change.

## Learn from your users

Without doubt the best way to learn about accessibility is to spend time with the people who use your product and see for yourself the problems that they face.

When you think about accessibility, you probably imagine a blind person using a screen reader (a piece of software that speaks everything that appears on screen). That's understandable because visual impairment affects lots of people in one way or another and screen readers are one of the most ubiquitous form of assistive technology. The big picture however is far more complicated and diverse. Just a few examples include:

* impaired vision
* colourblindness
* blindness
* deafness
* deafblindness
* epilepsy
* dyslexia

There are lots more examples in [An Alphabet of Accessibility Issues](https://the-pastry-box-project.net/anne-gibson/2014-july-31) and another great resource is the WAI’s [How People with Disablities Use the Web](http://www.w3.org/WAI/intro/people-use-web/Overview.html) which provides more information about the problems that these people experience.

## Learn from the community

Just a few who spring to mind are [Henny Swan](https://twitter.com/iheni), [Steve Faulkner](https://twitter.com/stevefaulkner), [Jared Smith](https://twitter.com/jared_w_smith), [Bruce Lawson](https://twitter.com/brucel) and [Marco Zehe](https://twitter.com/MarcoInEnglish).

## Understand both the law and the spirit of the guidelines

In many countries, access to websites is protected by legislation just like access to shops and restaurants. In the UK, the Equality Act says that a service provider must make "reasonable adjustments" so that disabled users can have access to the same services as everyone else. In the physical world, that might mean installing a ramp to allow wheelchair access or providing a menu in braille as well as print. In the digital world, it could mean including subtitles on videos or making sure that a user can navigate with a keyboard instad of a mouse.

That's the law, but accessibility is much more than a box ticking exercise.

According to [AbilityNet](https://www.abilitynet.org.uk/advice-information/enation/travel-and-tourism-summer-july-2014) (2014) there are 12 million disabled people and 10 million people over 65 in the UK, with an estimated spending power of over £100bn. If you ignore accessibility, you ignore a huge segment of customers and a lucrative market.

Beyond the legal and commercial arguments, making digital products and services accessibile to everyone is simply _the right thing to do_.

## Use tools but don't rely exclusively on automation

There are a number of services and applications that aim to test websites for accessibility. Give them a URL and they'll produce a report that shows all of the passes, failures and warnings (according to best practices or formal standards such as [WCAG](http://www.w3.org/TR/WCAG20/)).

The problem with these automated systems is that they can only check for the most rudimentary accessibility problems. Like any other automated checking tool, they don't understand context. For example, tools can find an `img` (image) element in an HTML document and check whether or not it has a text alternative in an `alt` attribute, but they can't decide whether or not that text alternative is appropriate or well written.

One such tool is [Tennon](http://www.tenon.io/documentation/what-tenon-tests.php) and its developers make a point of acknowledging its limitations:

> Some accessibility best practices are either too subjective or too complex to be accurately tested with automated means. Doing so increases the risk of so-called "false positives", which can reduce the usefulness of a testing tool.

W3C offers a similar warning in its guide to [Selecting Web Accessibility Evaluation Tools](http://www.w3.org/WAI/eval/selectingtools.html):

> Web accessibility evaluation tools cannot determine the accessibility of Web sites, they can only assist in doing so.

That said, automated tools play an important role in drawing attention to potential problems as early as possible, when they are relatively quick (and cheap) to fix.

Holiday Extras developers have recently implemented [React-a11y](https://github.com/rackt/react-a11y), which is a plugin for the [React](https://facebook.github.io/react/) JavaScript library. React-a11y can generate warnings about things like form fields without labels, images without `alt` attributes, `a` elements without `href` attributes, keyboard accessibility issues and improper use of WAI-ARIA properties. These warnings allow us to fix problems as early as possible, without having to wait until code review or testing.


## Treat accessibility as a component of user experience

