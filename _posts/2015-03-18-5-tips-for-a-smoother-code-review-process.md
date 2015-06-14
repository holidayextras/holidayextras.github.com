---
comments: "true"
layout: post
published: true
title: "5 tips for a smoother code review process"
author: mike_carter
categories: ""
tags: code quality culture
---

Here at Holiday Extras we've grown our web team from just a few developers to almost 40, and we have fingers touching code across multiple repositories on a daily basis now. Scaling code has become hard, and unless we really fight for quality then mediocrity creeps in as a simple byproduct of our inability to read minds - individual development skill aside.

Code reviews have made a huge difference in our fight for better software. However, it's hard to do well, and is trickier to do with larger teams and larger changes without introducing a bottleneck that prevents frequent deploys to production. So, from lessons learned the hard way, here are our 5 tips for a smoother code review process.

___

## 1. Use and enforce pull request templates
Create a default PR (pull request) template that all PR authors must fill in before submitting their PRs helps to ensure code is reviewed properly and the author is properly explaining the change they're making to reviewers.

For us, these take the form of multiple headings explaining various aspects of the PR, for example _"What does this PR do?"_, _"What tests does this PR have?"_, _"How should this work be manually tested?"_, _"What are the relevant tickets?"_. Forcing the author to fill these in thoroughly helps to give reviewers the context for the change before they get to the code step.

For this to work, it's important to flat out reject PRs that don't properly utilise your template without good reason. Take a look at the [PR template we use](https://gist.github.com/michaelcarter/42e31149a7debc4390be) for inspiration.

___

## 2. Use author and reviewer task lists
If you're working with GitHub, the [task list](https://github.com/blog/1375%0A-task-lists-in-gfm-issues-pulls-comments) feature is absolutely fantastic for making sure the author and code reviewers have taken all the correct steps prior to merging work.

We put things like _"I've tested this on desktop IE9/10/11, Firefox, Chrome for any visual changes."_ and _"I've informed those who need to know of any unforeseen impact of this work"_ on the authors task list, and on the reviewers task list we have things like _"I’ve checked for appropriate test coverage."_ and _"I’ve checked for coding anti-patterns."_. You can roll these into your PR template to ensure they're never forgotten.

Use these task lists to give the proper accountability for the quality of work shipping. It's very difficult to excuse yourself for a breaking change by claiming you forgot to test your work if you've already ticked a box telling everyone you did. It also means reviewers don't need to ask so many questions about what's been done prior to review, it's all just there for them to see right away.

___

## 3. The code author needs to solicit reviewers individually
"Hey everyone, can someone take a look at my PR?". This may work in smaller teams, but as your team grows, and especially if your PR is a little larger or more technically involved, people just won't review it without being asked directly.

If you're a code author then solicit your reviewers directly 1 on 1, and ask them to commit to looking at your code before a certain time. Often it won't be convenient for them to review it right then and there, but if they commit to do it by a particular time it's much more likely to get done.

There are plenty of other techniques to successfully recruiting reviewers. For example, the _"I'll review yours if you review mine"_, or the _"I can help you on that thing as soon as I get another review on my PR"_ approaches work brilliantly.

___

## 4. Put your team's best practices down in writing
Ever find yourself bringing up the same points over and over in code review across different PRs? Put these down in a shared best practices document or repository of documents. This way, instead of rewriting the same comments over and over you can just link off to a markdown document that eloquently explains a particular antipattern and various potential improvements.

Over time you'll find that when in doubt, people check the documents as a reference point for antipatterns and coding standards prior to putting in PRs, and code quality will improve automatically.

We use a separate 'hx culture' repository for our best practice markdown docs. This way, people are free to challenge the best practices through PRs of their own into the documents themselves.

___

## 5. Group review large pull requests
While we try to keep PRs as small as possible, sometimes they do run to over a thousand changes. At this size, it's very difficult for individual code reviewers to get a high level view for how the change the author has submitted works. The code review step on PRs like these takes forever, and often things get missed due to lack of understanding.

An easy solution to this is for the author and reviewers to meet together in front of a TV or projector and run through the PR diff up on a big screen, lead by the author. This gives he or she the chance to explain their work to the reviewers, and the reviewers the chance to stop the author to ask questions or suggest improvements, validating their understanding every step of the way.

___

If you have any other tips or opinions on what we've written here we'd love to hear about them. Why not leave a comment below or get in touch on Twitter.
