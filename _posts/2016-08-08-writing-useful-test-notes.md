---
layout: post
title: Writing Useful Test Notes &amp; Reports
categories: testing
author: matt_obee
tags: testing
comments: true
excerpt: "Recording and sharing the results of testing sessions."
---

## There is no one right way
Let me say straight away: there are lots of different ways to write testing notes and no one method will be best in all situations. Everything from the complexity of the product and the time you have available to the client that you're working for and the amount of regulation that they are subject to will determine what works best.

Each of the testers at Holiday Extras, despite working closely together, has a slightly different way of making notes - and that's fine! The important thing is that we learn from each other and that we're not afraid to adapt our methods whenever necessary. That said, there are some simple rules of thumb that can make notes more useful.

## Notes versus Reports
Firstly, let's clarify the difference between the notes that we make for ourselves during our testing sessions and the reports of those testing sessions that we share with other people. Our private notes are a place to record our observations, ideas and questions during the testing session: they're rough, incomplete and probably difficult for other people to follow. The reports that we share with other people are based on these notes but reformatted and rewritten with the aim of _communicating_ those results.

## Write for your audience
Like any other piece of writing, it's important to have a clear picture of who you're writing for. What do they need to know? How much detail do they expect? What is their level of technical knowledge? What are they worried about? The role of a tester is ultimately to provide information to people who make decisions, so it’s crucial that we include the right information in the right format for the right people.

In my experience, Product Owners appreciate comprehensive reports so that they can understand _how_ the piece of work was tested, what was observed, what risks or opportunities might remain and if there are any issues that block deployment. On the other hand, Scrum Masters might prefer a quick summary of the results so that they know at a glance whether or not the sprint is still on track. The easiest way to satisfy both of these audiences is to include a short summary so that readers don't have to wade through the details if they're only interested in the big picture.

## How was this tested?
For a number of reasons, one of the most important questions that testers have to be able to answer is "how was this tested?". Firstly, as mentioned above, some members of our team use this information to support their decisions. Secondly, if another tester has to take over or revisit the work at a later date, they need to understand how to repeat the tests. There's also a chance that a defect might sneak past us into production, in which case we'll need to look back and try to understand how we missed it. A bit like a maths exam, you earn extra marks for showing your workings.

## What has and has not been tested?
When I’m testing, I make rough notes of what I’ve explored so far and ideas for what I might look at next. In some cases I might decide not to test a particular feature or scenario, or something might prevent me from doing so. It’s important that I share this information with the rest of the team so that we can make an informed decision about whether or not to put the new work in front of customers. It might be that we settle for 80% coverage of common use cases in order to reap the benefits of early feedback.

## Balance thoroughness, speed and clarity
My aim as a tester is to strike the right balance between being thorough, meeting deadlines and sharing information in a way that's clear and usable. Writing highly detailed notes is time consuming, let alone presenting them in a way that's valuable without being overwhelming.

## Include evidence when it’s useful
Bearing in mind the infamous "how was this tested?" question, it's tempting to try and collect evidence for each step of every test. However, we also need to be pragmatic. Will anyone actually look at it? It’s generally worth including evidence in the form of screenshots or screencasts when testing something unfamiliar or when observing something unusual, but for routine tests they are probably a waste of time.

## Describe what you expected to see as well as what you actually saw
It's important to describe expectations as well as observations. When reporting a problem we need to describe not only _what_ is wrong but also _why_ we think it's wrong. Equally, recording a test as successful without explaining what the success criteria was makes it impossible for a reader to understand our assumptions. This sort of gap analysis allows the team to make an informed decision.

## Ask for feedback
Testers ultimately provide a service to the rest of the team and so we need to be open to feedback. It's also true that testers aren't solely responsible for testing; quality is a shared responsibility and so the testing process must be open and honest to scrutiny and contributions from across the team.
