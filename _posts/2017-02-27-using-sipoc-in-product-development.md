---
comments: 'true'
layout: post
title: Using SIPOC in product development
author: caroline_woodhams
tags: lean, product management, sipoc, process mapping, customer, empathy, customer problems, learning
categories: product management
excerpt: SIPOC is a Lean tool that can be useful during multiple stages of the product development lifecycle. Here I outline how I used it in the early days of developing a new product to develop empathy with our customers' problems.



---
## Using SIPOC in product development

###Intro

In January I changed roles, to become Product Owner of the newly formed Integrations team. Our mission is to solve problems around how we reliably secure supply from suppliers, such as hotels and car parks.

We identified that our internal Commercial team would become our ‘customers’, which involved getting up to speed on how they worked and understanding their pain points. To help structure this learning process I ran a workshop with the team to build a SIPOC model. 

Here I’ll tell you a bit more about what SIPOC is, why it’s a valuable tool and how you can use it effectively.

###What is a ‘SIPOC’?

SIPOC is a tool used in Lean and Six Sigma management for creating a model of a system. It identifies the main elements and how they relate to one another, and can be useful for building a shared understanding of what goes on.

‘SIPOC’ stands for:

![Diagram showing SIPOC](https://github.com/carolinewoodhams/cewoodhams-website/blob/master/_assets/Screen%20Shot%202017-02-27%20at%2016.36.52.png?raw=true)

###Why use a SIPOC?

SIPOC is useful at multiple stages of product development, but is especially powerful at the start where little is known (or assumptions may be made!) It’s particularly effective when you are developing a product that relates to a process (or [Kaizen](https://uk.kaizen.com/about-us/definition-of-kaizen.html)). 

It can work at multiple levels of abstraction: in the early stages of product development it can help you get a high level overview of the problem before going deeper as you learn more. Not only does it help with building up product or process knowledge, but also with building empathy with the main actors - customers, staff and suppliers.

In this use case, we were developing connectivity with third parties to automate a manual process of uploading hotel rates and availability - so it was key to understand how that worked for the Commercial team currently in order to:

Identify where the process started and finished (the end to end) - to be clear when scoping out the integration requirements and also mitigate any ‘loose ends’ in handing over from automated to manual processes (and vice versa);
Surface any additional information that may help or hinder us - in our example we learnt that an ‘Extranet’ existed that could help us with uploading files to our reservation system (saving us some development time!);
Identify the pain points to ensure that the solution was really aimed at solving these (and wouldn’t make things worse, or create problems elsewhere).

###Timing is everything

Timing is important in order to gain maximum value from this exercise: I set the SIPOC workshop up for the first week back in January, just as we were kicking off the product development process, and before any code was written.

The workshop lasted 90 minutes (which included more detailed process mapping lasting an hour). The SIPOC itself took about 20 minutes to complete - enough time to build a basic model of the manual process, to determine what was in / out of scope.

###Who needs to be there?

We invited the Commercial Product Executives to the workshop - they’re responsible for manually uploading the rates and availability every day. It was important to get to the ‘front line’ in order to elicit the level of detail and truth of how things actually were - instead of what they should have been like (according to management or a process manual). 

I also invited the engineers and scrum master in my team so they could hear our customers’ issues first hand. This gave them the opportunity to ask more questions to clarify their understanding, and to build their own empathy with the problem.

###How to get the most from SIPOC

Typically I would have used brown paper, post it notes and sharpies, but working in a paperless office I opted for a whiteboard and markers instead! After the session I took photos of the SIPOC for posterity, which helped to communicate the findings with stakeholders and reference back later. 

I started by drawing up a five column diagram, with S-I-P-O-C at the top as headings. I gave a brief explanation of what we were building - it’s not important that the audience understands the tool, so much as you set the expectation for what sort of information you are going to ask them to provide.

To build the SIPOC I began in the middle column, asking open ended questions such as ‘what processes do you use?’ I made an exhaustive list of all relating to loading rates and availability (the use cases where the Commercial team have to do this), and then asked them to prioritise their top 2-3 for further detail. 

From these high priority processes, we worked backwards - identifying the inputs and then the suppliers. Sometimes it was easier to jump straight to suppliers, and then ask what specifically they provide us with (the inputs). Inevitably, I got a mixture of suppliers and inputs in the answers - which I discretely placed in the right columns.

Turning to the second half of the model, I again asked what were the expected outputs of the process and who the customers were. It helped to frame it in terms of who we were supplying and what we were supplying them with. This can be a mixture of physical products (like the website, or a file) and information. 

###Conclusion:

The SIPOC was a really useful starting point - for building empathy with the customer’s problems and for understanding more about our systems architecture. It highlighted a few leads regarding current systems we were previously unaware of, that upon further investigation proved viable solutions, which ultimately led to a shorter development time for our first iteration of the product.

The feedback from the people involved was very positive: our customers felt like they had been understood and were positive about developing a solution. The Integrations team embraced the findings with enthusiasm and in subsequent discussions kept referring back to information gained during that session - instead of past assumptions.

All in - a worthwhile exercise!

