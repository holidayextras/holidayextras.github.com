---
layout: post
title: QCon New York 2015 key takeaways - Part 2
categories: conference
author: kevin_hodges
tags: conference qcon new york 2015
comments: true
---

#### Introduction

This is the second part of my notes and key take aways from Qonn New York 2015, a three day conference with main features (for me) on microservices, containers and culture.


### Developing cultural intelligence
#### Daniel Seltzer

tl;dr: Good talk on something that is very hard to define, sorry not many notes, was listening intently.

Culture happens in real-time, at the boundaries between people and groups.  When shit hits the fan, the culture IS the process that happens between people.
#### Leaders set the culture.  You don't have to have control (i.e. be a CEO) but if you set the culture, people look to you as a leader.
Example, if you live the culture not just act it and others see that they will follow or immitate.
You can't force culture on to everybody.  Essentially he says, if your values conflict with a person, push them out, they are no good for your team or for you.
Sharing informtion and openness about what you are doing is key.


### Failure as a service
#### Kolton Andrus (Chaos Engineer on the Netflix platform)

tl;dr: Another Netflix guy, spoke well about the chaos monkey system they've built and how they've implemented it, sounds quite simple in principle...

Failure testing helps makes systems immune to failure which in turn prevents larger outages and increase uptime/response cycles
Insists "production verification" is essential, "we want a system that thrives on change"
Hormesis -> imbibing the poison helps us become immune
Stressed the importance of testing rollback systems in production, if you don't test them you can't guarantee they will work when you need them to.

FIT - Failure Injection Testing

#### in order to get people to do the right things, you have to make it easy for them to do the right things

They can inject latency at ANY point in their system to simulate slow downs and measure affects.

1. Why
They can see how their architecture performs with an issue at any point.

2. Who (scope)
Scope starts on single request, single customer and increase slowly
Can be limited to apps, regions etc to reduce risks

3. Where (injection points)
points that fail already or look like they might fail

4. Failure itself
Each service/module implements a snippet to inject deploy where required.

Demo of failure ui, turned it on, personalised stuff dropped off home page defaulting to a "fixed" list
There's a red "Halt all failure" button in the top right of the screen to stop everything, feels really, really risky.

Zuul proxy, check FIT to see if its a request they want to decorate (some kind of expression matching on the params/query/body/headers, this is before it hits the api.  Then when it hits each service the service checks it it needs to delay or fail.

#### You cant build anti-fragile systems but you can build an anti-fragile culture.  Getting people to think about this stuff is the most important thing.
 
Testing in production is sustainable and helps improve performance long term.


### Clojurescript demo
#### Jearvon Darrie

tl;dr: I'm afraid this was the only take away of any value.  A good one though right?

"Programming is not about typing, it's about thinking" - Rich Hickey

### Immutable infrastructure with Docker and containers
#### Jerome Petazzoni

tl;dr: A really good advert for using containers, something we need to start thinking about for everything in our business.

Rules...

1, never change what's on a server.  Blue/green deploys.  This help avoid "drift" through manual operations and long running infrastructure
2, always change all servers, not a subset of them
3, automation can fail, be prepared to put the old servers back exactly as they were

Problems...

1, Small changes are a lot of effort (one line css, need more automation)
2, Debugging becomes harder as logs are shipped out, tools need to be reinstalled, cant fiddle with server setup
3, Storing data (not sure why he didnt suggest cloud but use containers for all the things, they are cheap and flexible, can be fired up from scratch)

Solutions...

1, Automate all the things.  Operations that have to happen can but they don't take any use time
2, Have "golden images" for intemediary build stages where process takes a long time to execute
3, Tag logs with the physical server or build so once you've binned a dodgy instance you can revisit the problem
4, Containers.  Enforces immutabilty, can download later and rerun easily and it's cheap


### Architectural history of Google Docs
#### Micah Lemonik (Principal Software Engineer at Google)

tl;dr: Second best talk of the conference, explained really well how Google have solved an industry wide issue in a way that any company could implement.

Used to have a project called XL2web which converted Microsoft Excel spreadsheets and models into interactive Web applications, 
Google basically asked them if they could do it in a browser so they built prototype in IE6 SP1 with an Excel emulator where the logic was all done on the server side.
Google then acquired the company.
They then added some persistence in the form or a database behind the state server.

2007/08 was when Google started thinking about collaboration, they wanted to connect a second client to the same state.
Technically, every mutation to the doc was stored in a log with snapshots generated at regular intervals so you could play back and forward mutations at will and quickly, this is when they put in the autosave functionality and "revisions" came "for free".


However, when they got to character level collboration (people editing the same word at the same time) they had to stop and think about what would be practical.

Talked for a while about how they "solved" realtime collaboration.

- Mutations are applied at a revision number which dictates order, the order of mutations is critical to consistency across all clients
- Only one server can determine the order of messages
- All peers must apply transformations from their point of view

How would an "undo" function work?
If a user changes 6 to 7 and then another user changes it to 8, then the first user hits undo, how "should" it work?

7 = single undo stack for all collaborators
8 = log omission - "like a change never happened"
6 = revert to the state of the clients original mutations (winner)

Scaling... Google Docs does not run on 1 server but all mutations MUST go to the same server.  Therefore there is a physical limit to the number of connections and therefore collaborators to any Google Doc (the limit is 15) and the same for Hangouts.


### Atlassian Hybrid Cloud/On-Premesis Software Delivery
#### George Barnett - SAAS Platform Architect

tl;dr: Not sure why this exists, I just wanted to put my hand up and ask if Atlassian had heard of the cloud but he seemed pretty stoked with the solution they'd arrived at.  We're good with what we're doing at HX.

7 years ago Atlassian weren't SAAS.  All products were downloaded.  Upgrades were slow in coming and had slow extended release cycles.
A monolith however is easy to deploy but customers get used to "their verision" (like IE6) and refuse to update for whatever reason.


So they build a cloud native, continuous deploy product with feature delivery behind a flag.  Bugs fixed when ready, very short release cycles.
Native users could then download from cloud but this caused problems as it would take ages to ship as a 3rd party was doing the hosting.

Problems...
- time pressure on product teams as they're still tied into release cycles and have internal coupling/dependencies
- 3rd party hosting with high vm costs and poor visibility
- extended release cycle so customers are always behind
- individual configs add complexity for support teams

Solution...

- hide the scale from developers and reuse existing architecture
- create an easy to deploy hardware platform (containers)
- decouple dev from infrastructure
- enable repeatable configuration

Templates for services

hardware - pre built when it comes in to the datacentre, they boot it up, smoke test and read to go (4hrs to get a server, apparently this is good :/)
datacenters - "pre-baked" state is outside the machines, when it boots up it assumes a local configuration with time zone based management services
containers
- Everything that isn't on the platform goes into a container, use openVZ, very stable, lightweight, simulate a full VM
- Each service is in its own container
- Then there's shared services nginx, squid, postfix, auth all in their own containers

Use DNS in the same way we use t-bob to route traffic and give flexibility to what we server the client.


### Culture
#### Anon

tl;dr: best culture talk of the week, covered a lot of his use cases/problems and how you should look at them.  Essentially people need to think about themselves and stop worrying about others.

Reference to a book "It's your ship" by Abrashoff he stressed "make ownership bottom up".  The people at the top caring is not enough.
"It's all about people" you model the culture and hope to see it playing back to you.
His key point was "culture is event-driven and organic, not mandated"

So where is culture defined? 
- Real time, between people and groups
- Unexpected challenges
- Discovering what the rules/boundaries are
- Rituals that reinforce values
- Moments happen where people "step in", if there's an issue or a conversation and people take the lead in getting involved or directing

Leaders set the culture. People with titles. You dont have to be "titled" but be seen to lead when it's needed.
Culture can't be forced and if people are a detriment to that, you have to move them out or they will affect the culture.
"encouraged dissent" - devils advocate, ask people to challenge you
"giving credit" culture - Etsy system of web team "oscars" 5 per person
Planning is it wish-based or reality-based in your business? Don't avoid risk but actively engage and understand it to mitigate it.

Making culture choices

Would you choose positive culture over other rewards?
how do people handle criticism?
Read => Drucker "Managing oneself"
-> you have to know yourself, figure out the right culture for you and put yourself in the right places

Learning to influence culture

- Speak up when group culture conflicts with your own
- Take it and make it your own, thats when people will follow you
- When hiring, prioiritise cultural fit over hard skills
- Be clear.  Ambiguity sets a cultural value
- Embody the values you want to establish

### Ground up introduction to in-memory data
#### Viktor Gamov

tl;dr: I got nothing.

Talked about in-memory data in Java, no idea other than that.