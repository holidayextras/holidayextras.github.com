---
layout: post
title: Are you Ready to get this Done?
categories: agile
author: nick_ls
tags: agile
comments: true
excerpt: A personal case study looking at how Definition of Done and Ready have evolved with my Scrum teams.
---

## How **Done** started in our Web Team

Scrum has been part of HX Web Team culture for a few years now. It started with one team and proved so successful that we rolled it out with the formation of Pods (our small, cross-functional, Agile teams). Following this wider rollout, we sent our new Scrum Masters off for training. What followed was a flood of ideas and improvements to refine our Scrum processes.

One of the areas we worked hard to introduce was **Definition of Done** (DoD). I worked as a Software Tester in a development team in one of our Pods when DoD was first discussed. We were trying to implement and understand a lot of new processes. DoD was one of those and we started to work towards agreeing what the status of **done** actually was.

Soon after, I became a Scrum Master myself. I went on the same training and came back to tackle the DoD conundrum. 

## Defining **Done**

So let’s look at what the [Scrum Alliance](https://www.scrumalliance.org/why-scrum/scrum-guide) say about the DoD:
>When a Product Backlog item or an Increment is described as “Done”, everyone must understand what “Done” means. Although this varies significantly per Scrum Team, members must have a shared understanding of what it means for work to be complete, to ensure transparency. This is the definition of “Done” for the Scrum Team and is used to assess when work is complete on the product Increment.

The Scrum Alliance goes on to indicate that the DoD
>guides the Development Team in knowing how many Product Backlog items it can select during a Sprint Planning 

and
>The purpose of each Sprint is to deliver Increments of potentially releasable functionality that adhere to the Scrum Team’s current definition of “Done.”

With my new found understanding of **done** I worked with my Pod to develop our own DoD. We tried to tackle Stakeholders, Acceptance Criteria, automated & manual testing, releasing to live, coding standards, full completion of requirements, a whole host of people we may need to communicate with, data / insights, Tech Debt, next steps and monitoring both the work live and also that data is being collected.

It was quite a beast! So, we customised the tool we use for managing our work to create a checklist that could be used for each ticket to make sure we were **done**:
- Stakeholder has signed off: Prototype (before code review requested) and Live version
- Code has been through PR process and is live
- Testing has been done on appropriate environments, Browsers & Devices
- Appropriate tracking in place & split test live where applicable
- Release has been added to deployment calendar, where applicable
- Jira fully updated and documentation created, if applicable
- Communications to ALL parties completed

## One **Done** to rule them all

Scrum Alliance says:
>If the definition of "done" for an increment is part of the conventions, standards or guidelines of the development organization, all Scrum Teams must follow it as a minimum.

and continues 

>If there are multiple Scrum Teams working on the system or product release, the development teams on all of the Scrum Teams must mutually define the definition of “Done.”

As a group of Scrum Masters we collaborate really well. We tried to pull all DoD from around the Pods into one Web Team-wide checklist:
- All areas are covered in the pr-template.
- This section is completed on the Jira ticket if applicable.
- Work manually tested (cross browser, cross device, speed, user testing, etc).
- Acceptance criteria met (should be provided on jira).
- Stakeholder happy before deployment.
- Work communicated to relevant parties.
- Data tracking has been checked in report.

There were similarities and common areas we could use across Pods, but also a need to have individual processes for each Pod where it was sensible to do so. As a result we quickly found that not everyone could follow a common DoD.

The crucial thing we probably didn’t fully pick from the Scrum Alliance guidance was “Although this varies significantly per Scrum Team”. What we found was this is completely true. A good shared understanding is OK, but **done** can vary significantly from Pod to Pod. 

The Scrum Alliance says:

>If "done" for an increment is not a convention of the development organization, the Development Team of the Scrum Team must define a definition of “done” appropriate for the product

Absolutely. As a result, DoD became a Pod specific thing. The wider Web DoD got left behind.

## **Done** got confusing

We, therefore, concentrated on our own **done**. But this got complicated:

1. Who was responsible for making sure these ‘boxes were ticked’? 
2. Who was managing this process? and
3. How were we holding each other to account that tickets are actually **done**?

**Done** was incredible hard to manage. Sure **done** can be complex, but we’d made it complicated.

Despite being complicated, tickets were coming into sprints where we were clear on what **done** meant - we just didn't follow **done** through. We also found, despite defining **done**, tickets were not ready for sprints. As time went on, we were finding done wasn’t nearly as important as ready. 

## Arise, the Definition of **Ready**

I place a huge emphasis on backlog reviews for sprints. They are vital for smooth Sprint Planning sessions. We started to question how we knew that tickets were ready. After a few retrospectives (off the back of some marathon Sprint Planning sessions), we started to use 5 headings which we agreed would be our **Definition of Ready** (DoR):

1. Requirements
2. Objective / Reason / Goal
3. Automated Testing
4. Manual / exploratory testing
5. Insight

In more detail that meant:

_Requirements - The What:_ These are the Product Owner’s requirements in the main and can be written as a user story (or not, depending on the type of ticket). It will include (but not always):
- Background information (anything that’s useful for engineers)
- Specific Requirements - including Desktop requirements versus Devices
- Business Benefits/ Requirements
- If it’s broken, how is it broken and the expectation of what a fix looks like
- Acceptance Criteria.

_Objective - The  Why:_ What metrics are we driving, what’s the value (if any), who will benefit (customers - internal or external, partners etc.) and what those benefits are.

_Automated Testing:_ Understanding the level of automated testing required.

_Testing:_ How to ensure the acceptance criteria is met and therefore the level of testing that could be undertaken against what is acceptable.
Is a testing plan required.

_Insight:_ Have all insight requirements been considered - such as inline tracking.

Over time other Pods had developed their own version of **ready**, or following knowledge sharing, set about creating their own. As DoR developed across Pods, we tried to create a common DoR, but again, this didn’t prove successful.

## The wider impact of DoR

As Pods got used to using DoR, they began to start asking really good questions. They started to push back on stakeholders more, asking for clarity around what was required and crucially _why_ we were being asked to pull them into our backlogs.

This led to more information around business or customer impact, with good data to back it up. It started to help prioritise backlogs. That education extended further in that stakeholders raising Jiras started to automatically include this information.

Defining **ready** was providing so much more clarity than defining **done**. We were finding that meetings ran more smoothly, the development team united in backlog reviews to make sure there was a good shared understanding of what was required, pushing back on stakeholders and Pod Leads for clarification before we got to Sprint Planning. Crucially, they knew what we were trying to do and also _why_.

## So is that the end of **Done**?

We’ve found that defining **ready**, is (sort of) defining **done**. There are elements of **ready** that you can pull out of our complicated DoDs. But, we don’t get everything we need from **ready**. We do get the ‘what’, ‘why’ and ‘how’ and to that end we can understand some acceptance criteria. 

Defining **ready** and **done** are all part of the process, however, process needs to be manageable. There can’t be too much process involved to capture the information - people won’t be engaged if the process is a burden or unmanageable. It also won’t help a Scrum Master foster self-organising teams, if the process is too complicated and needs policing.

## Adapt and inspect

Why is it so important? The Scrum Alliance says:
>As Scrum Teams mature, it is expected that their definitions of “Done” will expand to include more stringent criteria for higher quality. Any one product or system should have a definition of “Done” that is a standard for any work done on it.

We’re committed to learning at Holiday Extras and we will get this right. It should be very clear what constitutes as **done** and we need to evolve our DoR process to make sure we’re also clearly understanding **done**. We still have work to do. I’ve started to revisit **ready** and **done** with my current Pod and plan to write about the results soon. 