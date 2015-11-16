---
layout: post
title: An Introduction to Testing for Accessibility
categories: Testing
author: matt_obee
tags: testing accessibility
comments: true
excerpt: "How to test for accessibility"
---

When I gave a talk on <cite>Checking & Exploring</cite> at [The London Web meetup in October](http://www.meetup.com/londonweb/events/214733702/), a number of people asked questions or spoke to me in the bar afterwards about accessibility (for older people and those with disabilities). I only had time to touch on it very briefly in my presentation, but that doesn't mean it isn't important. Quite the opposite, it deserves to be covered in detail in its own right. Some people asked me how testers should be trained in accessibility and others asked what sort of testing we need to perform in order to find accessibility issues.

## Accessibility is part of design

Firstly, an important disclaimer: Accessibility should be addressed as part of the design process; it's not just something that can be checked and bolted on at the end of the project. This means that responsibility for accessibility doesn't just lie with testers but with designers and developers too. Designers have to think about things like navigation methods, colour contrast and layout, while developers have to write code that exposes the right information to assistive technology (e.g. screen readers) in the right way. As [Michael Larsen](https://twitter.com/mkltesthead) said in his [presentation at Agile Testing Days 2015](http://www.agiletestingdays.com/session/making-a-web-for-everyone/), inclusive design is about making things accessible from the start with the minimum amount of retrospective change.

## Understand both the law and the spirit of the guidelines

In many countries, access to digital services is protected by legislation just like access to shops and restaurants. In the UK, the <cite>Equality Act (2010)</cite> says that a service provider must make "reasonable adjustments" so that disabled users can have access to the same services as everyone else. In the physical world, that might mean installing a ramp to allow wheelchair access or providing a menu in braille as well as print. In the digital world, it could mean including subtitles on videos or making sure that a user can navigate with a keyboard instad of a mouse.

The main international standard for the accessibility of Web content is [<cite><abbr title="Web Content Accessibility Guidelines">WCAG</abbr></cite> 2.0](http://www.w3.org/TR/WCAG20/), also known as <cite>ISO/IEC 40500:2012</cite>, published by <abbr title="World Wide Web Consortium">W3C</abbr>. While aimed primarily at Web content, [<cite><abbr title="Web Content Accessibility Guidelines">WCAG</abbr></cite> can also be applied to native mobile applications](http://www.w3.org/TR/mobile-accessibility-mapping/). It's against these guidelines that most developers and service providers evaluate their products.

Accessibility is however much more than a box ticking exercise.

According to [AbilityNet](https://www.abilitynet.org.uk/advice-information/enation/travel-and-tourism-summer-july-2014) (2014) there are 12 million disabled people and 10 million people over 65 in the UK, with an estimated spending power of over £100<abbr title="billion">bn</abbr>. If you ignore accessibility, you ignore a huge group of customers and a lucrative market.

Beyond the legal and commercial arguments, making digital products and services accessibile to everyone is simply _the right thing to do_.

## Recognise the diversity

When you think about accessibility, you probably imagine a blind person using a screen reader (a piece of software that speaks everything that appears on screen). That's understandable because visual impairment affects lots of people in one way or another and screen readers are one of the most ubiquitous form of assistive technology. The big picture however is far more complex and diverse. Just a few examples include:

* impaired vision
* colourblindness
* blindness
* deafness
* deafblindness
* epilepsy
* dyslexia

There are lots more examples in [An Alphabet of Accessibility Issues](https://the-pastry-box-project.net/anne-gibson/2014-july-31) and another great resource is the <abbr title="Web Accessibility Initiative">WAI</abbr>’s [How People with Disablities Use the Web](http://www.w3.org/WAI/intro/people-use-web/Overview.html) which provides more information about the problems that these people experience.

If you have the opportunity, the best way to learn about accessibility is of course to spend time with the people in these groups and see for yourself the problems that they face.

## Use tools but don't rely exclusively on automation

There are a number of services and applications that aim to test websites for accessibility. Give them a URL and they'll produce a report that shows all of the passes, failures and warnings (according to best practices or formal standards such as <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>).

The problem with these automated systems is that they can only check for the most rudimentary accessibility problems. Like any other automated checking tool, they don't understand context. For example, tools can find an `img` element in an HTML document and check whether or not it has a text alternative in an `alt` attribute, but they can't decide whether or not that text alternative is appropriate or well written.

One such tool is [Tennon](http://www.tenon.io/documentation/what-tenon-tests.php) and its developers make a point of acknowledging its limitations:

> Some accessibility best practices are either too subjective or too complex to be accurately tested with automated means. Doing so increases the risk of so-called "false positives", which can reduce the usefulness of a testing tool.

<abbr title="World Wide Web Consortium">W3C</abbr> offers a similar warning in its guide to [Selecting Web Accessibility Evaluation Tools](http://www.w3.org/WAI/eval/selectingtools.html):

> Web accessibility evaluation tools cannot determine the accessibility of Web sites, they can only assist in doing so.

That said, these tools can highlight areas of an application that are worthy of further exploration, which is particularly valuable when time and resources are limited. Automated tools also play an important role in drawing attention to potential problems as early as possible, when they are relatively quick (and cheap) to fix.

Holiday Extras developers have recently implemented [React-a11y](https://github.com/rackt/react-a11y), which is a plugin for the [React](https://facebook.github.io/react/) JavaScript library. React-a11y can generate warnings about things like form fields without labels, images without `alt` attributes, `a` elements without `href` attributes, keyboard accessibility issues and improper use of <abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr> properties. Like any other form of code linting, these warnings allow us to fix problems as early as possible, without having to wait until code review or testing.

Tools are essential for testing some aspects of accessibility. For example, <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> has a minimum acceptable contrast level between text content and the background ([SC 1.4.3](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)). The only way to check this reliably is to use a tool like [WebAIM's Color Contrast Checker](http://webaim.org/resources/contrastchecker/). Similarly, a utility like [Trace Center's Photosensitive Epilepsy Analysis Tool](http://trace.wisc.edu/peat/) must be used to check that flashing content is within acceptable limits for users with photosensitive epilepsy.

## Expert testing or user testing?

Whenever possible, aim to involve real users in accessibility testing. This is no different from testing usability more generally. While a tester or developer can check an application against guidelines and best practices, they will always be biased by their insider knowledge. Also, while they might be technical experts, testers and developers are not experts at using assistive technology in the same way that real users are.

There are however lots of things that a developer or expert tester can and should be checking for, even before users are involved.

## Treat accessibility as a component of user experience

Because accessibility is necessarily more closely tied to code than is general usability, there's a tendency for it to be treated as a simple matter of standards conformance. I began this post by saying "accessibility is part of design", and I'm going to end with it too.