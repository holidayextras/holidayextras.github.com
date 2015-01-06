---
layout: post
title: Taming your Technical Debt
date: 2014-03-09 12:00:00
categories: Misc
author: Mike Carter
tags: Tech Debt
comments: true
time: 5 mins
redirect_from: 
  - /2014/03/09/taming-technical-debt/
---

Technical debt comes in many forms. It’s what’s left when you take a shortcut to make a deadline, what’s created when the application you build gradually stops suiting its original requirements, the result of creating a solution to a problem you perhaps don’t fully understand, or when a feature gets built upon again and again in an unchecked way.

Technical debt is loathed by developers, misunderstood by non developers and costs organisations significant amounts of money without being all that obvious. Working on the Holiday Extras mobile app we’re constantly having to cope with developing for ever changing requirements, and paying off technical debt has become a real hot topic for us. Here are 5 tips for taming the beast:

## 1. Anticipate it from the beginning
Almost any software of consequence will develop technical debt, and this is inevitable. It’s important to both understand and accept there will always be parts of your software that aren’t a perfect use of a design pattern, that don’t quite fit its requirements, or that aren’t easily understandable. However, this doesn’t mean that a few hours of research before starting a new feature  or piece of work won’t go a long way to mitigating issues further down the line.

On the Holiday Extras mobile app we try not to assume we know the best way of doing something, but instead take the time to do some of the following before committing to code:

* Find out where the problem has been solved before, and how it was solved.
* Compare possible development patterns to use, consider pros and cons of each.
* Talk over a solution with another developer before starting – get feedback!
* Do proper pair programming when appropriate. No, this doesn’t mean one person stares at a screen while the other does all the thinking.
* Look to other services or widely used libraries, perhaps they can solve the problem for you? Perhaps they implement a nice solution you could mimic?

A few hours of research, planning or some careful pair programming may incur a greater up-front time cost, but can save you many more hours in refactors you won’t have to make in a few months time.

## 2. Early and often
At Holiday Extras, and probably any organisation,  it’s occasionally required that we move things along a bit more quickly to meet a deadline. However, we make sure we keep track of any technical debt created and put aside real time for it in our sprints. This means estimates and discussion of each piece of technical debt in sprint planning, and allows us to ensure we deal with it early and often in every sprint.

Without these weekly refactors, we’d see technical debt grow exponentially as features are hammered out because our new features would inherit technical debt from what’s already there. This would leave us with huge refactors that required a feature freeze rather than paying off our debt bit by bit each week.

Keep in mind that technical debt will force itself to be paid one way or another, but it’s much more efficient to deal with a small amount every sprint than having to stop everything for a few months while you rewrite your application. It’s great for product owners too. Nobody likes to hear their entire sprint is going to be taken up by major refactors – smaller manageable chunks are a much easier sell.

## 3. Keep your stakeholders informed
As a developer, it’s common that those with the most influence over your work don’t fully understand your work. This is especially true when it comes to dealing with technical debt. Use the real world debt analogy to get the message across to everyone who needs to know. Concepts like interest or the cost of borrowing are understood by anyone with a bank account – they can really aid understanding and get you the time allocated you need to care for your software.

At Holiday Extras we keep all discussion of technical debt out in the open in standups and sprint planning, explaining the knock-on effects of ignoring it to everyone involved in the decision making process so we’re all on the same page.

You may have to reiterate analogies and consequences constantly to get the concept to stick and be internalised. Do not be afraid to do this, it’s vitally important to get the time to make your refactors. Keep in mind that unless you’re the one dealing with it, it’s all to easy to forget working off technical debt in favour of more money now – regardless of the consequences a few months down the line.

## 4. Limit its influence
Sometimes you’ll have to take shortcuts during development and allow some technical debt to creep in consciously. This may be because of time constraints, or could be because your perfect solution is blocked by something you can’t control. No matter the cause, build to minimise the impact of your less than ideal code wherever possible. For example, on our mobile app we have the following code:

```javacript
parse: (response, options) ->
  # Normalize airport code location
  if location = response.trip?.out_departure_iata
    response.product.location = location

  # Normalize check-in for hotels
  if response.stay_date and !response.check_in
    response.check_in = response.stay_date

  # Normalize type parameter
  response.type = @_inferBookingTypeFromResponse(response)
  if response.product?.type
    response.product.type = undefined

  # Normalize the reference
  if response.product?.code and !response.ref
    response.ref = response.product.code

  # Normalize the view_at block
  if !response.view_at and response.amend_at
    response.view_at = @_buildViewAt(response)

  response
```

This exists solely to resolve inconsistencies in our own API responses. It’s ugly, we infer a lot of information that should be explicit, it calls off to other more complex methods in the same file, and we keep having to tweak it as we find responses it doesn’t quite parse correctly, which costs us money from lost time maintaining it and money from customers exposed to any incorrect behaviour.

However, it’s also a small bit of code called before any models are created from the data in the responses, meaning we can build the rest of our app as if it had our ideal API responses. When we move to our new version of the API currently in the works, we’ll be able to just remove lines from this single parse method and things should just work.

## 5. Know when it doesn’t matter

Sometimes you’ll encounter areas of your application that are seemingly in desperate need of a refactor. It might have hard to understand or bloated code-wise, be using a poorly chosen development pattern or just completely not fit the requirements of the application. In each scenario, do a little cost/benefit analysis in your head. Consider some of the following:

* Any bugs arising from the code in question.
* The time involved in completing the refactor.
* The consequences of not refactoring in 6 months on the rest of your codebase.
* How long the code in question is likely to be used.

Sometimes bad code does the job just fine, and even has the benefit of being tested by thousands of users in production already. If there are few benefits to refactoring other than satisfying your own desire for perfection, it’s not always a terrible idea just to ensure it works as expected with some automated tests (if they don’t already exist) and move on to something more worthy of your time.

---

These aren’t the only tips out there for dealing with technical debt, there’s a lot of writing on the subject. However, these are a few that We’ve found most helpful to remind ourselves of while fighting the everlasting battle for a cleaner codebase.
