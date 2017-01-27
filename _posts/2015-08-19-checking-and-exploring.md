---
layout: post
title: Checking & Exploring in Software Testing
categories: Testing
author: matt_obee
tags: testing checking exploring
comments: true
excerpt: "Exploratory software testing has matured and grown to encompass a wide range of activities. Meanwhile, computers can be automated to perform highly efficient and reliable checks without human intervention. How can we combine these two approaches to achieve the best results?"
---

I began my software testing career in 2006, which seems like a long time ago but in the grand scheme of things probably isn't. Even so, the world of testing has changed dramatically in that time.

For a start, exploratory testing—which used to be frowned upon as a technique—has matured and grown to encompass a whole range of activities. In fact, exploratory testing doesn't really exist as a technique in its own right any more; all testing techniques can be performed in an exploratory way to some degree. You might say that exploratory testing is just testing done properly.

A clearer distinction has also emerged between the rudimentary 'checking' that is often delegated to computers and the intelligent 'testing' that requires a curious human mind. I prefer to call the latter 'exploring'.

## Checking

Checking is the essential process of comparing a software application aginst pre-defined requirements or standards. The aim of checking is to verify that the application is behaving as expected and that it meets a basic level of quality. For example, check that when a user clicks on button A, paragraph B appears and then given input X, page Y is displayed.

In <cite>[Testing and Checking Refined](http://www.satisfice.com/blog/archives/856)</cite>, James Bach and Michael Bolton give a definition of checking that really highlights the fact that it's a much more formal activity than exploring:

> Checking is the process of making evaluations by applying algorithmic decision rules to specific observations of a product.

Algorithmic decision rules? It's true that checking is boring and so it often makes sense to have computers do it instead of people. The temptation therefore is to automate everything and be done with it. If a little is good, more must be better, right? The thing is, checks on their own—whether performed by a computer or a person—can't reveal all of the bugs, let alone all of the risks and opportunities that exist in complex software.

Checking uses validation and verification to answer the question, "does this application do everything that it’s supposed to do?". To be reliable, checks have to be logical and repeatable, but that level of formality doesn't leave any room for curiosity, experimentation or empathy. Neither does it allow for the random variations in human behaviour (e.g. clicking buttons at slighly different speeds, providing slightly different inputs or taking slightly different routes) that so often lead to the discovery of bugs.

## Exploring

In contrast to checking, exploring is an inherently human activity that embraces both the strengths and weaknesses of people. Whereas checks rely on having requirements and success criteria defined in advance, exploration takes advantage of human curoisity and creativity to design tests and perform them at the same time, constantly evaluating the results of the previous test to inform the next.

Try as we might to test the same thing in the same way every time, human testers will never be as consistent or as predictable as computers—and that's a good thing! Those random quirks in our behaviour will test an application in ways that strict checks will not.

Beyond proactive bug hunting and serendipitous discoveries, exploring plays another vital role in identifying risks and opportunities. Expert testers can apply their past experience and deep domain knowledge to question everything that they see. They can recognise patterns, ignore false positives, learn from and react to events and apply common sense to evaluate everything in the right context. But more than that, they can empathise with customers and recognise the things that <em>really</em> matter.

## The best of both worlds

The bottom line is that every project must include a healthy mix of both checking and exploring in order to achieve the best possible coverage. A testing strategy that places too much emphasis on automated or manual checking at the expense of human exploration risks overlooking problems that our naturally unpredictable customers might find. Equally, embracing exploration but failing to perform basic checks might result in requirements being overlooked or key features not performing as expected.

This is summed up particularly well by Elisabeth Hendrickson in her book <cite>Explore It!</cite> (2013):

> Tested = Checked + Explored
> You’re not done testing until you’ve checked that the software meets expectations and you’ve explored whether there are additional risks. A comprehensive test strategy incorporates both approaches.
