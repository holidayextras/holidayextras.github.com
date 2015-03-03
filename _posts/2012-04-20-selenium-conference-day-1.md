---
layout: post
title: "Selenium Conference: Day 1"
date: 2012-04-20 12:00:00
categories: Conferences
author: alanna_mooney
tags: Conference SEConf Selenium
comments: true
redirect_from:
  - 2012/04/20/selenium-conference-day-1/
---

[Holiday Extras](http://www.holidayextras.co.uk) sent four of us to a [Selenium Conference](http://seleniumconf.org/) to learn more about automated testing. The business is keen for the Web Delivery Team to get involved in automated testing and Selenium is one of the ways we’re going to go about it. The conference ran for 3 days in London, the first day was workshops which we didn’t attend and two days of talks.


### 6.53am – Folkestone
[Myself](https://twitter.com/alannamooney), [Liz Pope](https://twitter.com/lizzie_pope), [Chrissy Mattinson](https://twitter.com/christina_mats) and [Jodie Doubleday](https://twitter.com/jodiedoubleday) hop on a train from Folkestone Central and head to St Pancras. It’s earlier in the day than most of us see on a normal workday – the yawns are a clear display of this fact.

### 8.15am – St Pancras tube station
Jodie gets his bag caught in the door of the train, causing much amusement in the group – most of all Chrissy! We get dirty looks from people on the tube for being so loud – turns out you can take the Web team out of the building, but it doesn’t make them any quieter!

### 8.45am – Savoy Place
After much searching, we finally find Savoy Place and immediately start accruing freebies. In the space of 15 minutes, we manage to collect 8 t-shirts, 4 USB drives, 4 pens, 4 bottles of “SauceLabs hot sauce” and 4 tins of mints.

### 9.00am
We attend the opening speech by [Jason Huggins](https://twitter.com/hugs) and [Simon Stewart](https://twitter.com/shs96c). Jason Huggins is the co-founder of [SauceLabs](https://saucelabs.com/) , a tool that we are now moving to using across the company to test cross-browser; it also helps us with our automated testing processes. He is also the co-founder of [Selenium](http://docs.seleniumhq.org/), which he started to develop while working at Google. Simon Stewart currently works for Google and is involved in developing the Selenium framework.

### 9.20am – Testing the web anywhere
We attempt splitting into two groups and attending two talks at once – testing mobile devices and testing rapidly changing applications – but Track B is full, so we all end up in the mobile testing talk. The talk is given by [Andreas Tolf Tolfsen](https://twitter.com/tolfsen), who works for [Opera](http://www.opera.com/). The talk is quite generic and doesn’t really discuss Selenium much; the focus is on the [OperaDriver](http://www.opera.com/developer) they use for mobile testing. He provides interesting stats about the internet as a whole, in that only a quarter of the world’s population have internet access, but 50% have a mobile phone. He tells the audience how Opera stats show that the top 10 websites are fairly global – most people around the world are interested in Google, news sites (BBC, Yahoo, etc) and social networking (Facebook, Twitter, etc); what people really want is to be able to access the same sites wherever they are on whatever device they’re using. Most of the talk is about how it’s important to bring the internet to as many people as possible in as many different forms as possible. He gives a little anecdote about how his boss at Opera (who invented CSS a few years ago) predicts that the internet will be around for around 500 years; a prediction based on the fact that the printing press has been around for about that long, and is only just being superseded by the internet. He demonstrates the [Opera Mobile Emulator](http://www.opera.com/developer/mobile-emulator), which we think will be useful for testing how our websites look and act in terms of responsiveness, but is not much use in testing across devices, as we don’t have many Opera users.

### 10.00am – One step at a time
[Anand Ramdeo](https://twitter.com/testinggeek) is giving a talk on how to take a basic, fragile test structure and make it more robust. The talk proposes that in order to make a more robust test structure, we need to export it to [WebDriver](http://docs.seleniumhq.org/docs/03_webdriver.jsp) and modify the script that [Selenium IDE](http://docs.seleniumhq.org/docs/02_selenium_ide.jsp) has provided us with. The modifications need to focus on removing the dependency on elements and focus on pages. This is because changes to elements locators, registration fields, the registration process and data validations will all cause problems for a Selenium IDE test in its run. He also discusses that Selenium IDE tests are often very difficult to read, so if we were to come back to the test in a few months for some maintenance, we might be discouraged because the test would no longer make sense to us. Testing pages instead of elements will allow us to create a test that is easier to read and therefore maintain – “less friction means more development” – but it will require close work between devs and QAs to standardise page element names. The basic jist here is that we need to get our tests to a point where they don’t care how something is implemented on the page, as long as they can see it being implemented successfully.

### 11.40am – Using Selenium to improve a team’s development cycle
[Mike Davis](https://twitter.com/miked216) from Google introduces a talk about how Selenium can help to improve the overall development cycle of a team. The talk is clean, concise, and (on the whole) easy to understand, as well as being very useful. He talks about the strategy that Google aim for and how they go about achieving it, saying that Google aim for tests that can be run at every stage of the development process so that they catch bugs before code is submitted. He gives advice on what constitutes a good test, saying that it must incorporate all of the following:

- fast
- stable
- easy to read
- easy to write
- easy to debug
- easy to run
- be able to run from a single command (no installs, sign-ups, etc)
- self-contained (avoid external dependencies or have them opened and run within the test)

Mike also said that its important for an organised process, that the number of tests created is limited and that the tests are kept as small as possible. In short, it was a talk filled with tips for a successful automated testing strategy; what’s important is that we, as a QA and Dev team together, find a way to apply them to what we are doing at Holiday Extras.

### 12.20pm – Self-generating test artifacts
[Marcus Merrell](https://twitter.com/mmerrell) gives a case-study talk on remodelling the developer cycle according to automated testing. He discusses how it is a hassle when developers don’t communicate changes properly (not something which we have a problem with for the most part) and how we always seem to be reacting to changes that happen rather than proactively testing the quality of our sites. He estimates that around 40% of time at his company is spent fixing bugs in code that has already been deployed – I’m sure we can all sympathise. He displayed a wish list for a built-in mechanism that communicates changes, tighter integration with the developers and a system that allows for proactive testing. It is unlikely that we would be able to implement something similar to what is demonstrated at Holiday Extras (our current workflow and structure as a company doesn’t really lend itself to what Merrell talks about), but some of what is said is relevant; it is important to uses the pages as self-testing tools (creating basic tests to run to ensure that testing capabilities are always there) and he states that “tests are there to solve business problems, not to navigate pages”. He also makes the point that it will be most beneficial if we communicate between QA and Dev more often about the changes themselves, rather than what they could break or will break, it will be easier for us to maintain and update our test suites so that they don’t break. This will lead to testing showing “true bugs” rather than just a break because of a change that we know is going to happen and will save time in testing.

### 2.00pm – Robots
This talk is given by Jason Huggins, co-founder of SauceLabs. He has quite possibly, the funniest Twitter username I’ve seen: [@hugs](https://twitter.com/hugs) (I wonder if his wife has @kisses?). He starts out very passionately, telling us of the love of robots that he’s harboured all his life – telling us about his toy robots and all the fun he’s had discovering new toys over the years. About 10 minutes in, he becomes very aware that he hasn’t yet mentioned Selenium and attempts to bring the talk back in-line with the rest of the conference. What follows is pretty cool – he shows us how he has taught a robot to play Angry Birds on an iPad using Selenium. There isn’t a lot of explanation as to how he actually went about doing this, but the whole room was in awe of this robot on the table (with many people taking pictures and recording the sequence on their phones). It’s interesting to see that Selenium isn’t just limited to what can be done on a browser – there is potential to have it control robots as well apparently!

### 2.40pm – Building quality with foundations of mud
[Kristian Rosenvold](https://twitter.com/krosenvold) talks about how the only way to test effectively is to develop the application/site in such a way that it can be tested. Basically – the only way for automated testing to be useful is if the developers start coding with Selenium in mind.

### 3.30pm – Web testing performance with WebDriver
Michael Klepikov opens with the stats that every second that is added to page load time results in 7% drop in conversion rate; mobile users are even more impatient, with 46% saying they would abandon a page if it wasn’t fully functional within 10 seconds. He then shares a URL that gives stats on page load times: <www.webpagetest.org>. The information provided in this test should then be used to improve Selenium tests designed to catch performance regressions in the page.

### 4.00pm – Closing keynote: how to test the inside of your head
[Liz Keogh](https://twitter.com/lunivore) gives a theory-driven talk on how the brain works and how we can improve our testing through being more aware of our thought processes. She discusses how we build beliefs in our brains and filter data according to those beliefs; if we are more aware of the beliefs we have surrounding our code, it is easier to break through what we think things should be like and move towards what they actually are and what they could be. A brilliant example she gave was the following sequence:

1    2         4   5

If you ask either a developer or a QA to tell you what they think is missing in the middle, they will tell you there’s a 3 missing, but a QA will point out that while it is most likely to be a 3, it could be something else. For those interested, what was actually missing was a colon.

She also speaks about three different types of question that she believes should be at the forefront of all decisions made around code:

- Context questioning: is there a context in which this event will create a different outcome?
- Outcome questioning: is this the only outcome that matters?
- Assumption questioning: is there a different context which might have produced this outcome?

She closes the talk by telling us all that it is incredibly important that we focus on the positives and strengths. She says it is more effective in a work environment if we focus on each of our strengths and play to those, letting other people pick up the work that we are weaker in. This is an interesting theory to apply to a working environment, but it’s worth taking away from it the importance of focusing on what is going right with the work, rather than getting swamped by what might be going wrong.

### 5.00pm
First day is done, we head to the hotel. I manage to stack it in spectacular slow motion fashion and am left with cuts and bruises, and a limp for the rest of the night.

### 5.30pm – Bedford Hotel
We check-in and freshen up (we have been up and about for 12 hours at this point after all!).

### 6.00pm – The Glasshouse Stores
There is a welcome party/networking night for all attending the conference, the free food and alcohol provided is a very kind donation from conference sponsors Facebook.

### 1.00am
We finally make it to bed, after stopping off at McDonalds for a midnight snack!

So that’s day 1 all wrapped up. Take a look at what happened on [Day 2]({{ site.baseurl}}conferences/2012/07/20/selenium-conference-day-2/)