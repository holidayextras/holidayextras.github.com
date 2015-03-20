---
layout: post
title: 5 signs you're a good coder
categories: programming
author: kevin_hodges
tags: software engineer coding programmer
comments: true
---

##### 1. You don't solve problems until you understand the system/context.

If this sounds like a simple one then that's because it is. You can't consistently and reliably fix problems if you don't know what else you are affecting further up or down the stack. Take your time, understand all the local variables and touch points, pick through the flow of the system learning where data comes from and where it goes to. In a mature system, chances are your problem has already been solved elsewhere, if others have architected their code properly you could well find your solution already exists in tools code or common functionality.

##### 2. You [Keep it simple, stupid](http://en.wikipedia.org/wiki/KISS_principle).

Anybody can make a solution complicated but it takes a clever person to make a problem simple. Regardless of the size of the problem, design your solution away from your screen, you'll be amazed at what happens when you stop thinking in terms of code and actually consider the problem as a thing. Also, it's a simple fact, the less code you write the less chances there are for bugs to occur.  

##### 3. You spend a good percentage of your time designing your solution.

You can write all the crap code you like but if it's organised, decoupled and properly thought out, chances are it'll still be useful, maintainable and scalable (who knew!). Think about variable and function names, they're the contract you will live by for the lifetime of the system and often, coming up with a good name will help tell you when your architecture is wrong. Think small defined units of work and how they fit together.

##### 4. You dont test your own code.

We're talking unit tests here. It's fairly easy to figure out when you have finished solving a problem, but this does now mean you are in no position to rationalise about the solution. You now have preconceptions and blindspots and it's very difficult to put your assumptions aside, this leads to poor tests even if coverage is high.  Do yourself and favour and let someone else write the tests for you. Ofcourse, if you are lucky enough to be afforded TDD, this point is completely irrelevant.

##### 5. You've learnt to detect code smell and more importantly, you act on it.

There are a few simple simple rules to code smell: 
a) DRY.  If your code isn't DRY, first, go make a coffee, then go back and make your code DRY.
b) Take a step back or make your font smaller or something.  If it looks bad, chances are it is bad.
c) Long functions, heavy nesting, many parameters/variables, alarm bells should be ringing.
d) [Cyclomatic complexity](http://en.wikipedia.org/wiki/Cyclomatic_complexity), keep your code modular, focused and concise.
e) Most importantly, if it doesn't feel right but you're not sure why, get a second opinion.