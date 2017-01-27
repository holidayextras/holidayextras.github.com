---
layout: post
title: A Tester's Nightwatch
categories: Testing
author: jack_morison
tags: nightwatch testing automation
comments: true
excerpt: Nightwatchjs is the preferred choice of automated testing framework in the business and it made sense for me to take an interest and look into what the pros and cons Nightwatch has from a tester's perspective.
---

![Night-watch]({{ site.url }}{{ site.baseurl }}/assets/img/NWPIC.jpg)

[Nightwatchjs](http://nightwatchjs.org/) is the preferred choice of automated testing framework in the business and it made sense for me to take an interest and look into what the pros and cons Nightwatch has from a tester's perspective.

Here's what I've come up with...

## Pros

### Great documentation!
Nightwatch has excellent documentation from installation to an API reference. I've found this to be of great use when I've needed to check anything from syntax to what arguments a command uses. <br/>
Found here: [Nightwatch guide](http://nightwatchjs.org/guide) - [Nightwatch Api](http://nightwatchjs.org/api)

### Clean syntax
Nightwatch has clear syntax meaning it’s easier for people to understand a written test (or another person’s). This is simple but powerful as tests are neatly laid out and make for a clean test. <br/> Example:

``` javascript
'check for search button': function(client){
  client.expect.element('.submit').to.be.present.before(10000);
},
```

### Cloud service support
Nightwatch works with testing providers such as SauceLabs & BrowserStack which is great for flexibility.

### Continuous Integration Support
As we do with our Selenium tests currently, we can integrate our Nightwatch tests into our build process with Team City or other systems in the future. This gives us the ability to proceed in confidence building on a solid foundation.

### Built-in command-line test runner
A Built-in command-line test runner enables us to run tests either singularly, by group or altogether.

### Equivalent to Helpers
One of the best features Nightwatch has in my opinion is their version of Helpers. <br/>
As Selenium uses Helpers to speed up certain aspects of page testing, Nightwatch has an equivalent called “PageObjects” or “Objects” in some cases. <br/>
A page object allows you to manipulate page elements without digging around in the HTML making them quick and easy to use in your test. <br/>
Page Objects are a popular pattern in writing tests as you simply create an object (file) with properties that describe the page at a particular part of your test. In other words wrap pages or page fragments into objects. <br/>
Page objects are a great example of encapsulation which allows you to hide details of the UI structure, widgetry and sensitive data from the main test itself.


### Custom commands extension
Nightwatch allows you to extend Nightwatch commands to suit your own application needs. You simply create a separate folder and define your commands in that folder, each command inside its own file. <br/> You then specify the path to that folder inside the nightwatch.json file, as the “custom_commands_path” property.

### Assertions!
Assertions show a clear step by step path in your terminal that is being checked in your test. As long as these are described well enough it will be easy to find where issues in your test lay. <br/>
This assertion library greatly improves the flexibility as well as readability of the assertions. Using the 'expect' interface provides a much more flexible and fluid language for defining assertions, significantly improved over the existing 'assert' interface we currently use in Selenium. <br/> Example:![Terminal assertion](/assets/img/assertion.jpg)

### Take screenshots
Selenium can generate screenshots when a test is complete, when command errors occur and for failing or erroring tests.
This can also be disabled should you decide this is not wanted.

## Cons
I have not found any qualms using Nightwatch as a Tester. There has been nothing that jumps out to me as an issue when it comes to using Nightwatch as our preferred choice within our business for automated tests. <br/>
Having looked into any other views from forums online, any drawbacks in using Nightwatch appear to come from a Developer’s point of view which does not affect the way I use Nightwatch and appear irrelevant to me as a tester.

### Summary
To summarise, Nightwatch is an awesome tool for end-to-end testing and easy on the eye for those that are looking to get to grips with its syntax and structure. <br/> It’s simple to get started and extremely well documented, check it out!
