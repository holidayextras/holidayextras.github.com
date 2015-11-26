---
layout: post
title: Config Driven Development
categories: Development
author: connor_meredith
tags: config driven development metaprogramming
comments: true
excerpt: "The situation is always the same; you jump into your nice clean code to litter it with business logic that is likely to change in the future, running the risk of introducing new bugs and possibly breaking existing functionality. Surely there's a better solution?"
---

The situation is always the same; you jump into your nice clean code to litter it with business logic that is likely to change in the future, running the risk of introducing new bugs and possibly breaking existing functionality (although you should be writing tests to prevent this from happening). My point is that there is a simpler approach to modifying aspects of your system that are malleable, Config Driven Development - also known as Metaprogramming.

This is the process of building highly adaptable systems and applications that use metadata written into configuration files to modify its features and behaviour. You can use this paradigm to any extent you want, from changing the colour of the buttons on your UI to deciding what database technology you want your application to use. The key is to build your applications for the general case and add the details and business logic into configuration files.

Here I aim to explain the benefits of config driven development and how it helps you keep your projects simple and maintainable.

## 1. Flexibility
When catering for different users it is essential to be flexible with your design. Flexibility gives you the ability to adapt to changes quickly and efficiently by providing you with simple solutions for varying requirements. Being able to change the email provider for your users should be as easy as updating a configuration file with the new credentials and redeploying your app, not refactoring your code. The solution here is to create applications with flexibility in mind.

A new business requirement should be met with a *configuration first* approach; implement the requirement generically and then enable the feature through the application's configuration files. If one client wants a new feature, build it for everyone and the others get it for free. This approach can allow you to try out different features, switch environments and personalise the user's experience without running the risk of creating new bugs or breaking existing features. You can be flexible in your approach to delivery by focusing on what needs to be done and not how it will be done, decouple your design from your code.

Business logic is more likely to change on a day to day basis, new requirements are always being added and we're constantly trying to add new features, adding the ability to modify these in your configuration allows you to react quickly to a constantly changing world.

## 2. Reduction of code duplication
This post is not necessarily a lesson in reducing code duplication but I feel that it still needs to be mentioned. Duplicating code is bad. It becomes unmaintainable, code is updated in one place but not the other and it creates bugs. For example, here at Holiday Extras we are unifying our UI components by placing them into a shared repository. We have built the [UI Toolkit](https://github.com/holidayextras/ui-toolkit) to be config driven, creating generic React components that we can customise for each application.

This example allows us to adhere to the DRY (Don't Repeat Yourself) principle and although it's a slightly different approach to configuration files the idea is still the same. It enables us to consolidate the user experience across our platforms with a configuration driven perspective, reusing components and not duplicating code. We drop a component into a template and give it a configuration, the result is replicable, reusable and pragmatic.

*If you're not familiar with [React](https://facebook.github.io/react/), I recommend you take a look at their documentation to gain a better insight into the ideology behind it.*

## 3. Uses resources efficiently
By building applications for a general use case you are able to focus resources on making your system easily expandable and simple to change. Adding a new feature should be a painless process that ensures you are using your developer and testing resources efficiently. Reduce your technical debt by focusing on building smarter solutions that offer the ability to expand without wasting time combing through tightly coupled code. By thinking about future configurations you are forced to decouple your design and move requirements out of the code completely.

You will be able to create and test new features in isolation without affecting current users, unit and system tests will be cleaner and more reliable due to the reduced complexity. Future work becomes simpler and more elegant, allowing you to focus your resources where they are needed. Developers should be focusing on making good, reusable code and building new functionality. They shouldn't be fighting against technical debt and business logic to achieve this. A clean and pragmatic approach to dealing with future, unknown requirements can save precious time in the long term and makes efficient use of your resources.

## Summary

Andrew Hunt and David Thomas' summary of Metaprogramming in The Pragmatic Programmer captures the need for this paradigm perfectly:

> ## Don't Write Dodo-Code

> Without metadata, your code is not as adaptable or flexible as it could be. Is this a bad thing? Well, out here in the real world, species that don't adapt die.

> The dodo didn't adapt to the presence of humans and their livestock on the island of Mauritius, and quickly became extinct. It was the first documented extinction of a species at the hand of man.

> Don't let your project (or your career) go the way of the dodo.
