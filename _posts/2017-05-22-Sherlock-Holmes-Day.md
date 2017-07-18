---
layout: post
title: "Sherlock Holmes Day"
categories: testers
author: mattsaunby
tags: testers qa investigation sherlock holmes
comments: true
excerpt: "On the birthday of Sir Arthur Conan Doyle, we pry into the minds of our Software Testers and how they approach investigation tasks."
hero: "/sherlock.jpg"
---

Unofficially, 22nd May is Sherlock Holmes day and so we asked some of our Software Testers about investigations, something that Testers here at Holiday Extras do all the time.

The first thing we asked was whether any tools are ever used to help investigations. We received a broad spectrum of answers including Cross Browser Testing, Recordit, Google Analytics and Chrome Dev Tools as well as various Chrome Extensions. The most popular answer however, was the knowledge of fellow testers, as well as your own knowledge of previous issues.

We then asked which techniques were favoured by our Testers for investigations. Exploratory Testing was mentioned a couple of times but by far the most popular technique was to pull on previous experience of bugs or issues that they have come across before.

When asked what sort of mindset they would put themselves in, our Testers said they would put themselves in the customer's shoes, with fresh eyes and with a determination to find a bug or issue. Others pointed out that they are careful to timebox their investigation in order to not spend too much time on an investigation.

One of our testers had an interesting example of an issue they once investigated:
*“I remember an occasion that a load of bookings had what looked like a flight number entered as vehicle details, something like "TGM18240", it took us ages to actually figure out what was happening, we investigated every bit of our code that we thought might be responsible. We then noticed that all the affected bookings had something else in common, the registration had been entered as "TBC", which wasn't odd as many of our customers enter "TBC", or, To Be Confirmed, as they haven't yet decided which car they will take to the airport. As it turned out, for some reason in our database, the registration plate "TBC" was assigned to a MAN lorry (with MAN being the make of lorry), and what looked like a flight number turned out to be the particular model, which translated as it's weight (18T) and the number of wheels or axles etc. Definitely a very weird one to investigate, and it provided an amusing anecdote to share round the office afterwards too!”*

So whilst only one day is Sherlock Holmes day, it seems that our Testers use their extensive knowledge and skills to investigate issues every single day at Holiday Extras. Even better than this, our Testers all have their own individual techniques that they share with each other.
