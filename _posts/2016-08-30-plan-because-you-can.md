---
layout: post
title: Plan Because You Can
categories: Delivery
author: damian_casey
tags: Planning Efficiently  
comments: true
excerpt: Sometimes we need to substantially rewrite our code to get it through code review, but why do we only know that it needs to be rewritten once we think we have finished? What would be a better approach to use from the start when writing our code?
---
## Introduction
There have been a number of times when I have experienced either my work, or a colleague's work that I am reviewing, needing to have quite a substantial rewrite, in order to get through code review. I'm sure we have all been there; you read through your task, outline how you are going to do it, and crack on and make your changes, maybe asking a few questions along the way. You then need to update existing test code or write new test code to cover your changes, before submitting a pull request (PR) and finding reviewers for it.

Then when you think it is almost done, you get that dreaded PR comment from another developer with a better solution which will require a substantial (and in some cases full) rewrite of your code. This is the exact scenario that I feel can be easily avoided by focusing a bit more time in the planning stage. Why can’t we have that better solution before we start our work, rather than once we think we’ve finished?

When jumping straight in to writing code we can leave ourselves open to needing to rewrite our implementations. This in turn would mean that all of our test coverage would need to be updated and that our reviewers will then need to re-review our PR. So there is potential for a lot of duplication of effort here. What if, before starting work, we got other developers to approve our 'Dev How'? Or even assist with the planning stage?

## Different Approaches
Unless I am very familiar with the changes that need to be made to complete my task, I will always at least ask for a second opinion to make sure that my approach is right before I actually start writing any code. For larger pieces of work, or for tasks that are on a system that I am not too familiar with, I will try to find someone who has good knowledge of the system to help me make a technical plan of how to write the code. More often than not this takes very little time and also speeds up how quickly I write the code as I have a clear focus of exactly what needs to be done from the start. Jumping straight in and writing code without a full understanding of what needs to be done is almost never the best approach, unless the task is very small or trivial and you already have previous experience in the area.

Another approach, which is used by another team as part of their sprints, is to have a day for “Backlog Review”. This is essentially a day where all of the tasks that could potentially be pulled into the next sprint are discussed by the developers and testers in the team, who may then in turn ask questions of the wider team. The aim of this is to add a “Dev How” and “Testing How” to each task so that estimation during sprint planning is much easier. This process then benefits the developer starting the task as the work that needs to be done is already clearly outlined on the task, often with mentions to specific files and a suggestion of how to write the code.

There is also the solution of setting your PR to "for review" at a very early stage. This solution can either involve no code, by writing comments of what you intend to do, or as functions with no logic to them. These functions will outline how your solution will be technically structured and will be accompanied by tests that call these functions. Once you put this in for an early PR review, you can ask another developer to review and approve it at a higher level. Then if any feedback changes the shape of of the solution or the architecture it is not too late as little code has been written. 

So there are a number of ways that we can avoid needing to rewrite our code. The best way to achieve this, in my opinion, is to put that time aside to plan how you are going to write your code, and getting another developer to validate your approach or assist with the planning before starting your work. This planning will result in the code being easier, and therefore quicker, to write and you can be pretty confident that not many changes will then arise when you submit your work for code review.
