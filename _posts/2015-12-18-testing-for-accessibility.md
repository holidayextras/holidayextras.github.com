---
layout: post
title: An Introduction to Testing for Accessibility
categories: testing
author: matt_obee
tags: testing accessibility
comments: true
excerpt: "How can testers and other members of the team learn about accessibility? How can we design inclusive experiences and test for accessibility barriers?"
---

When I gave a talk on <cite>Checking & Exploring</cite> at [The London Web meetup in October](http://www.meetup.com/londonweb/events/214733702/), a number of people asked questions or spoke to me in the bar afterwards about accessibility (for older people and those with disabilities). I only had time to touch on it very briefly in my presentation, but that doesn't mean it isn't important. Quite the opposite, it deserves to be covered in detail in its own right. Some people asked me how testers should be trained in accessibility and others asked what sort of testing we need to perform in order to find accessibility issues.

## Accessibility is part of design

Firstly, an important disclaimer: Accessibility should be included as part of the design process; it's not just something that can be checked and bolted on at the end of the project. This means that responsibility for accessibility doesn't just lie with testers but with designers and developers too. Designers have to think about things like navigation methods, colour contrast and layout, while developers have to write code that exposes the right information to assistive technology (e.g. screen readers) in the right way. As [Michael Larsen](https://twitter.com/mkltesthead) said in his [presentation at Agile Testing Days 2015](http://www.agiletestingdays.com/session/making-a-web-for-everyone/), inclusive design is about making things accessible from the start with the minimum amount of retrospective change.

## Understand both the law and the spirit of the guidelines

In many countries, access to digital services is protected by legislation just like access to shops and restaurants. In the UK, the <cite>Equality Act (2010)</cite> says that a service provider must make "reasonable adjustments" so that disabled customers can have access to the same services as everyone else. In the physical world, that might mean installing a ramp to allow wheelchair access or providing a menu in braille as well as print. In the digital world, it could mean including subtitles on videos or making sure that a user can navigate with a keyboard instead of a mouse.

The main international standard for the accessibility of Web content is [<cite>WCAG</cite> 2.0](http://www.w3.org/TR/WCAG20/), also known as <cite>ISO/IEC 40500:2012</cite>, published by W3C. While aimed primarily at Web content, [<cite>WCAG</cite> can also be applied to native mobile applications](http://www.w3.org/TR/mobile-accessibility-mapping/). It's against these guidelines that most developers and service providers evaluate their products.

However, accessibility is much more than a box ticking exercise.

According to [AbilityNet](https://www.abilitynet.org.uk/advice-information/enation/travel-and-tourism-summer-july-2014) (2014) there are 12 million disabled people and 10 million people over 65 in the UK, with an estimated spending power of over £100 bn. If you ignore accessibility, you ignore a huge group of customers and a lucrative market.

Beyond the legal and commercial arguments, making digital products and services accessible to everyone is simply _the right thing to do_. Everyone deserves to be included.

## Recognise the diversity

When you think about accessibility, you probably imagine a blind person using a screen reader (a piece of software that speaks everything that appears on screen). That's understandable because visual impairment affects lots of people in one way or another and screen readers are one of the most ubiquitous forms of assistive technology, so it's easy for us to empathise. The big picture, however, is far more complex and diverse. Just a few examples include:

* Someone with colourblindness who has difficulty distinguishing between colours such as red and green;
* A deaf person who relies on captions or transcripts for audio content;
* Someone who has reduced dexterity and is unable to use a mouse;
* Someone with photosensitive epilepsy who experiences seizures when exposed to certain flashing patterns;
* A person with a learning disability like dyslexia who has trouble reading;

There are lots more examples in [An Alphabet of Accessibility Issues](https://the-pastry-box-project.net/anne-gibson/2014-july-31) and another great resource is the WAI’s [How People with Disablities Use the Web](http://www.w3.org/WAI/intro/people-use-web/Overview.html) which provides more information about the problems that people with disabilities might face.

If you have the opportunity, the best way to learn about accessibility is, of course, to spend time with the people in these groups and see for yourself the problems that they face.

## Use tools but don't rely exclusively on automation

There are a number of services and applications that aim to test websites for accessibility. Give them a URL and they'll produce a report that shows all of the passes, failures and warnings (according to best practices or formal standards such as WCAG).

The problem with these automated systems is that they can only check for the most rudimentary accessibility problems. Like any other automated checking tool, they don't understand context. For example, tools can find an `img` element in an HTML document and check whether or not it has a text alternative in an `alt` attribute, but they can't decide whether or not that text alternative is appropriate or well written.

One such tool is [Tenon](http://www.tenon.io/documentation/what-tenon-tests.php) and its developers make a point of acknowledging its limitations:

> Some accessibility best practices are either too subjective or too complex to be accurately tested with automated means. Doing so increases the risk of so-called "false positives", which can reduce the usefulness of a testing tool.

W3C offers a similar warning in its guide to [Selecting Web Accessibility Evaluation Tools](http://www.w3.org/WAI/eval/selectingtools.html):

> Web accessibility evaluation tools cannot determine the accessibility of Web sites, they can only assist in doing so.

That said, these tools can highlight areas of an application that are worthy of further exploration, which is particularly valuable when time and resources are limited. Automated tools also play an important role in drawing attention to potential problems as early as possible, when they are relatively quick (and cheap) to fix.

Holiday Extras developers have recently implemented [React-a11y](https://github.com/rackt/react-a11y), which is a plugin for the [React](https://facebook.github.io/react/) JavaScript library. React-a11y can generate warnings about things like form fields without labels, images without `alt` attributes, `a` elements without `href` attributes, keyboard accessibility issues and improper use of WAI-ARIA properties. Like any other form of code linting, these warnings allow us to fix problems as early as possible, without having to wait until code review or testing.

Tools are essential for testing some aspects of accessibility. For example, WCAG has a minimum acceptable contrast level between text content and the background ([SC 1.4.3](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)). The only way to check this reliably is to use a tool like [WebAIM's Color Contrast Checker](http://webaim.org/resources/contrastchecker/). Similarly, a utility like [Trace Center's Photosensitive Epilepsy Analysis Tool](http://trace.wisc.edu/peat/) must be used to check that flashing content is within acceptable limits for users with photosensitive epilepsy.

## Expert testing or user testing?

Whenever possible, aim to involve real users in accessibility testing. This is no different from testing usability more generally. While a tester or developer can check an application against guidelines and best practices, they will always be biased by their insider knowledge. Also, while they might be technical experts, testers and developers are not experts at using assistive technology in the same way that real users are.

There are, however, lots of things that a developer or expert tester can and should be checking for, even before users are involved. For example, the following quick and easy checks can be performed on any website, perhaps before a more in-depth audit takes place:

* Does each page have a unique and descriptive `title`? As well as appearing in search results, in bookmarks and when shared on social networks, the `title` is one of the first things announced by assistive technology when a page is loaded.
* Does every `img` element have an `alt` attribute? Is the text appropriate? Is is necessary or should the `alt` be empty so that it can be ignored by assistive technology?
* Are sections of the page separated by headings? As well as being visually obvious, are those headings identified as such using HTML heading elements at the correct level (`h1`, `h2`, `h3` etc.)? In addition to describing the structure of the page, keyboard users can easily jump between these headings.
* Can you navigate the page using the keyboard tab key? Is the keyboard focus clearly visible at all times? Check for keyboard traps where you can tab onto an element but not tab away from it (often happens when JavaScript is incorrectly catching all key presses).
* Does every form field have a label? These should be paired explicitly using `for` and `id` attributes. The quickest way to test this without looking at the code is by clicking on the label and checking that keyboard focus is moved to the field.
* Is there sufficient contrast between foreground and background? Check it with a tool like [WebAIM's Color Contrast Checker](http://webaim.org/resources/contrastchecker/).
* Is information provided through colour without any other visual clue? If you were to remove the colour, could you still understand the meaning of the content?

For developers, one particularly good primer on the principles of web accessibility is [Facebook's HIKE tutorial](http://accessibility.parseapp.com/), which demonstrates some of the most important techniques with practical exercises.

## Treat accessibility as a component of user experience

Because accessibility is necessarily more closely tied to code than is general usability, there's a tendency for it to be treated as a simple matter of standards conformance. I began this post by saying "accessibility is part of design", and I'm going to end with it too. Regardless of who is doing the testing, it needs to be done as early as possible and continuously throughout development. Follow the guidelines but don't lose sight of the problems that you are trying to solve for the people who will use your product. Use tools to identify problems as early as possible but involve expert human testers and real users wherever possible.

*[WCAG]:Web Content Accessibility Guidelines
*[W3C]:World Wide Web Consortium
*[WAI]:Web Accessibility Initiative
*[ARIA]:Accessible Rich Internet Applications
*[bn]:billion