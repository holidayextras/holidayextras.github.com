---
layout: post
title: Highlights from Inclusive Design 24 (2017)
categories: accessibility
author: matt_obee
tags: accessibility
comments: true
excerpt: "With 24 one-hour webinars from a range of speakers, ID24 is always packed with insights and ideas for beginners and experts alike. The theme this year was about going beyond the basics and beyond compliance, and featured presentations from people at Facebook, Microsoft and the BBC."
---

[Inclusive Design 24](http://www.inclusivedesign24.org/) is a free online accessibility conference, organised annually by The Paciello Group. With 24 one-hour webinars from a range of speakers, ID24 is always packed with insights and ideas for beginners and experts alike. The theme this year was about going beyond the basics and beyond compliance, and featured presentations from people at Facebook, Microsoft and the BBC. I've finally found the time to write up my notes, so what did I learn from this year's speakers?

## Accessibility is dead
Well, sort of. [Johan Huijkman](https://www.youtube.com/watch?v=7Ut5NvshO6w), Accessibility Engineer at Q42 in Amsterdam, highlighted the difference between technical conformance and user experience. He argued that thinking about accessibility in isolation isn't enough because accessibility isn't just about designing for people with disabilities but rather designing for specific needs and contexts. We should therefore focus on usability for everyone and not accessibility for a few, which is the central point of inclusive design. This is an important lesson for businesses that still treat accessibility as an issue of legal compliance rather than a central component of user experience. In other words, businesses should be _proactive_ in embracing accessibility and inclusive design and not _retroactive_ by trying to fix problems later.

## How Facebook scales its accessibility improvements
It's always fascinating to learn how accessibility is handled in larger teams, and teams don't come much large than this one. Facebook has thousands of engineers, an incredible 42,000 React components, and a codebase that doubles in size every 18 months. Facebook has a central accessibility team but can't keep increasing the size of it to keep pace with the wider team. Instead, they aim to [scale the _effect_ of their efforts](https://www.youtube.com/watch?v=vmA4TS3IbVQ) by inspiring, educating and empowering every engineer to take responsibility for accessibility. A wide range of tools and resources are made available and new engineers must fix an accessibility issue from the backlog as part of the onboarding process, so expectations are set from day 1. As the team at Holiday Extras continues to grow, I hope we'll learn from Facebook's example and distribute responsibility and expertise throughout the team.

## ARIA doesn't always mean "accessible"
WAI-ARIA (Accessible Rich Internet Applications) is a W3C standard that allows the semantics of HTML elements to be overridden or extended in order to improve accessibility in complex applications, particularly single page applications where content updates asynchronously. Unfortunately, some developers think that they can fix any accessibility problem by sprinkling in some ARIA markup. Developer Eric Eggert demonstrated some of the [pitfalls of ARIA](https://www.youtube.com/watch?v=4bH57rWPnYo) and highlighted the importance of starting with a solid foundation of semantic HTML.

## Government going beyond compliance
[Jason Kiss from New Zealand](https://www.youtube.com/watch?v=xFbX4QgPFvs) and [Andrew Arch from Australia](https://www.youtube.com/watch?v=A2emdjBHkyY) both talked about efforts to move beyond technical conformance and compliance in their respective government teams.

New Zealand government guidelines were originally based on WCAG 1.0, before being updated to reflect WCAG 2.0. Government agencies were asked to self assess themselves in 2011 and 2014, but the results were difficult to interpret. Both rounds of audits required a considerable investment of time and money. Moving forward, instead of treating accessibility as a compliance issue, the aim was to raise accessibility awareness, knowledge and skill across agency teams. They moved away from complex formal audits to free tools and a limited range of manual checks that required minimal technical knowledge. The tests were grouped by topic instead of WCAG success criteria and they also avoided absolute pass/fail tests, with a greater emphasis on how those issues might affect the user.

Australia has a Digital Service Standard based on work done by the UK's [Government Digital Service](https://www.gov.uk/service-manual/service-standard), requiring a user-centered approach to design with priority given to user needs and not government needs. Australia builds multidisciplinary teams with responsibility for different aspects of accessibility shared across the roles. Everyone is encouraged to get involved in user research and usability testing. In terms of conformance, agencies have to demonstrate that they have met the government standard and tested their service against WCAG, but there is a particular emphasis on user research and testing.

## How to make friction fun
Bryce Johnson from Microsoft's Xbox team spoke about inclusive game design and how to [strike a balance between reducing friction and being challenged](https://www.youtube.com/watch?v=Zw7aou8ldwA). He appealed to developers to consider extending the variables of their game's difficulty to be more flexible so that players can enable the assistive features that they need and still compete fairly with others. For example, instead of 'easy' and 'hard' modes, allow steering and breaking assistance to be switched on and off individually. I think the same principle could be applied to software more generally; allow users to customise aspects of their experience wherever possible.
