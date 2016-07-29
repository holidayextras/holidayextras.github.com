---
layout: post
title: Plan Because You Can
categories: Delivery
author: damian_casey
tags: Planning Efficiently  
comments: true
excerpt: Sometimes we need to substantially rewrite our code to get it through code review, but why do we only know that it needs to be rewritten once we think we have finished? Why can't we know that better approach before we start to write our code?
---
## Introduction
There have been a number of times when I have experienced either my work, or a colleagues work that I am reviewing, needing to have quite a substantial rewrite done to it, in order to get through code review. I'm sure we have all been there; you read through your task, outline how you are going to do it, and crack on and make your changes, maybe asking a few questions along the way. You then need to update existing test code or write new test code to cover your changes, before submitting a PR and finding reviewers for it.

Then when you think it is almost done, you get that dreaded PR comment from another developer with a better solution which will require a substantial (and in some cases full) rewrite of your code. Even though the new solution would leave your work in a better position once addressed, I still feel that this scenario can be easily avoided by focusing a bit more time in the planning stage. Why can’t we have that better solution before we start our work, rather than once we think we’ve finished?

When jumping straight in to writing code we can leave ourselves open to needing to rewrite our implementations. This in turn would mean that all of our test coverage would need to be updated and that our reviewers will then need to re-review the pull request. So there is potential for a lot of duplication of effort here. What if, before starting work, we got other developers to approve our 'Dev How'? Or even assist with the planning stage?

## Different Approaches
Unless I am very familiar with the changes that need to be made to complete my task, I will always at least ask for a second opinion to make sure that my approach is right before I actually start writing any code. For larger pieces of work, or for tasks that are on a system that I am not too familiar with, I will try to find someone who has good knowledge of the system to help me make a technical plan of how to write the code. More often than not this takes very little time and also speeds up how quickly I write the code as I have a clear focus of exactly what needs to be done from the start.

Another approach, which is one that the B2B Trading pod have adopted as part of their sprints, is to have a day for “Backlog Review”. This is essentially a day where all of the Jiras that could potentially be pulled into the next sprint are discussed by the developers and testers in the team, who may then in turn ask questions of the wider team. The aim of this is to add a “Dev How” and “Testing How” to each Jira so that estimation during sprint planning is much easier. This process then benefits the developer starting the task as the work that needs to be done is already clearly outlined on the Jira, often with mentions to specific files and a suggestion of how to write the code.

So there are a number of ways that we can avoid needing to rewrite our code. The best way to achieve this, in my opinion, is to put that time aside to plan how you are going to write your code, and getting another developer to validate your approach or assist with the planning before starting your work. This planning will result in the code being easier, and therefore quicker, to write and you can be pretty confident that not many changes will then arise when you submit your work for code review.
