---
layout: post
title: "Selenium Conference: Day 2"
date: 2012-04-20 12:00:00
categories: Conferences
author: Alanna Mooney
tags: Conference SEConf Selenium
comments: true
redirect_from:
  - 2012/04/20/selenium-conference-day-2/
---

[Holiday Extras](http://www.holidayextras.co.uk) sent four of us to a [Selenium Conference](http://seleniumconf.org/) to learn more about automated testing. The business is keen for the Web Delivery Team to get involved in automated testing and Selenium is one of the ways we’re going to go about it. The conference ran for 3 days in London, the first day was workshops which we didn’t attend and two days of talks. If you haven’t read the [Day 1]({{ site.baseurl}}conferences/2012/07/20/selenium-conference-day-1/) post yet, go have a look.


### 8.45am
We all assemble in the hotel foyer and check-out, heading for Starbucks and then the conference.

### 9.15am – Savoy Place
We make it to the conference in time to hear [Simon Stewart](https://twitter.com/shs96c) discuss where Selenium is headed in the next 12 months. He tells us that the focus for them is to maintain and develop [Selenium IDE](http://docs.seleniumhq.org/docs/02_selenium_ide.jsp) as a tool, as well as challenging the latency and flaky test issues that have been reported to them. He also makes mention of the fact that the rise of mobile browsing is happening so fast, that they are going to have to spend some time trying to allow for this change in browsing patterns within Selenium.

### 9.45am – Selenium Builder
The [Selenium Builder](http://sebuilder.github.io/se-builder/) is a tool developed by [Adam Christian](https://twitter.com/admc) and [David Stark](https://twitter.com/zarkonnen_com). The tool is an alternative to Selenium IDE that is currently in Beta. It is based on the same code that Selenium IDE uses, so it has all the same functionality, but allows use of [Selenium 2](http://seleniumhq.wordpress.com/2011/07/08/selenium-2-0/) (we are currently using [Selenium 1](http://docs.seleniumhq.org/docs/05_selenium_rc.jsp)). They are looking for people to test it and feedback on it, so I’m sure that at some point we’ll all have a go at using this and see what happens. To check it out head to <http://www.sebuilder.com>

### 10.20am – Selenium in the enterprise
[Noah Sussman](https://twitter.com/noahsussman) talks about what he has learnt from working with Selenium at Etsy. He explains how Etsy moved from doing 7 deployments a year to doing over 10,000 a year in a 3 year period; they are now at a stage of continuous deployment, with several a day taking place. He states that if there is a choice between perfecting something and getting it to the customer, always get it out to the customer; failure is inevitable, every website has downtime and every piece of software has bugs, so it’s important that the customer sees progress. He discusses how it is more meaningful to show that you are able to move fast, than it is to show that you are capable of avoiding failure – recovery is vital, not perfection. He is also keen to get across the point that, often, the simplest thing that you can build in terms of automated testing will still be good enough to catch a large majority of the bugs that you might be looking for – there is no need to overcomplicate the testing process.
All in all, there’s a lot of advice here that I think is valuable for us to take on board in our deployment processes – our recovery is already good, so we need to work on focusing on keeping things simple when creating our test library.

### 11.20am – ThinkSys
We decide to give one of the open sessions a go. [ThinkSys](http://www.thinksys.com/) are here talking about their KRAFT framework. KRAFT stands for Krypton Regression Automation For Testing. The general idea is that they have developed a framework that doesn’t require any programming skills (something which our QA team of UX testers can appreciate), as it is all based in an Excel spreadsheet; their belief is that every tester should be able to create automated test scripts using the tools that they feel most comfortable with. The test management tool provided even maps all the results for you.  It seems to be fairly simple to use and it is possible to see the market for such a system, but as a company I don’t think that’s the direction we’re headed in – we are keen to get involved with the complexities of automated testing.

### 12.00pm – Pluggable test infrastructure
Groupon employees [Jeff Rogers](https://twitter.com/jrojers) and [Dima Kovalenko](https://twitter.com/dimacus) speak about creating high-level tests with common language. They showed their company’s test structure as an example; at the moment they have to test the website, the API and the mobile app – this means three separate tests. What they suggest doing is creating one test for all three, using the given-when-then process. For example

- Given that I’m viewing a featured deal for San Francisco
- When I choose to purchase the deal and enter my details
- Then I should see a successful purchase message

This is generic enough that it covers performance for all three platforms. They stressed that when writing these tests, they have to be behaviour driven, but not as detailed as “click” this, “press” here, and they also advised against conditionals. I think this is something worth us trying, but we would need more experience with Selenium in the current form we use it in before we try something like this.

### 1.35pm – PhantomJS
[Ivan de Marino](https://twitter.com/detronizator) talks about how using [PhantomJS](http://phantomjs.org/) can help speed up the automated testing process. He explains that PhantomJS is a headless webkit and that GhostDriver (a [Wire Protocol](http://en.wikipedia.org/wiki/Wire_protocol) implementation) has been built to work in tandem. He gives stats that show GhostDriver working faster than [ChromeDriver](https://code.google.com/p/selenium/wiki/ChromeDriver) for the same set of tests and is keen to stress that speed is key for quick code turnaround. He stated that the GhostDriver isn’t ready for production and probably won’t be for about a year, so there’s no need for us to even consider this as an option at the moment. 

### 2.15pm – The restless are getting native
[Dante Briones](https://twitter.com/dantebriones) gives a talk on using [NativeDriver](https://code.google.com/p/nativedriver/) to test iOS apps with Selenium. I won’t bore you with the details, as he informed us that development on NativeDriver has come to a halt. However, he did give some recommendations on how to make mobile Selenium testing successful:

- show the value of the tests as early as possible – demonstrate the protection offered by automated tests
- surprise and delight the customer (app developer) with how easy it is to use the tests and analyse the results
- know your limits – don’t aim for full coverage of the app through automated testing as it too expensive and will slow things down, focus on the important elements


### 3.30pm – More than automation
[Matt Wynne](https://twitter.com/mattwynne) gives a talk on mortgage-driven development – the process of protecting your job security through making your code as complex as possible so that only you can maintain it. He discusses “refuctoring” (see image on right for definition) and the idea that programming is a solitary activity so you should make yourself as unapproachable as possible. It’s all said in jest, of course, and it provides a much needed mental break from 2 days of code-heavy talks. He does give some very useable advice on writing tests:

- Strive for documentation style of writing, rather than code-driven for tests – makes tests easier to maintain and more user-friendly for those who are not as technically advanced
- Pair up with developers to write the code – will develop QA skills and provide consistency between the work being tested and the tests themselves


### 4.45pm
We leave the conference. We have had two information filled days that have taught us lots about Selenium; mostly that we have a long way to go and we have only scratched the surface of what Selenium can offer us. The next step now is to decide what the company would benefit from most and get moving!

