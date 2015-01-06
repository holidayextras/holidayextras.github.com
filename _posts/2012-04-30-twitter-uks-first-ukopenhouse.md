---
layout: post
title: "Twitter UK’s first #ukopenhouse"
date: 2012-02-29 12:00:00
categories: Conferences
author: Dan Jenkins
tags: Meetup Twitter TwitterUK, UKOpenhouse
comments: true
time: 6 mins
---

## It’s taken me a while to write this…
Some of the tech team at [Holiday Extras](http://www.holidayextras.co.uk) went to London last Tuesday for [@twitteruk](http://www.twitter.com/twitteruk)‘s first ever [#ukopenhouse](https://twitter.com/search?f=realtime&q=%23ukopenhouse). I’ve been meaning to write this post every single day since then, but I’ve been rather distracted with one of the biggest deployments I’ve ever been a part of; Holiday Extras has finally moved it’s phone system to VoIP but that is worth a post (or 2) to itself.


## TwitterUK’s first London meetup
9 of us took the journey up to London from our base in Newingreen, Hythe last Tuesday hoping for a great night, and we weren’t disappointed. The lineup promised 3 talks; one about Twitter Bootstrap, another about Tweetdeck and where that was headed, and finally another about using Javascript’s new (or not so new now) Pushstate feature and how Twitter were looking to move to using this instead of the Hashbang technique.

Before I go on though, for anyone who’s been to one of these meetups before, we all know how important the food, drink and freebies are. Twitter put on a good spread, the food was great, everyone got two free drinks and there were badges and stickers to pick up. You’ll know if you’ve read my previous post about [defacing company property]({{site.baseurl }}/misc/2012/02/22/the-brilliance-of-defacing-company-property-and-why-everyone-should-do-it-with-stickers/), how much the tech guys at Holiday Extras love stickers, and as a result I don’t think there’s any space left on [@marcgreenstock](https://twitter.com/marcgreenstock)‘s laptop anymore.

## First up, the first ever Twitter UK Engineering meetup
It was great to see an English guy talking about Tweetdeck, Twitter and everything they do. @iaindodsworth said they’re looking for more Software Engineers so if you’re interested take a look over at their International Jobs site.

## Next up, Pushstate or bust
For me, this was the most interesting talk of the night, probably because of the kinds of things I’m interested in. You can find [Dan Wrong‘s slides](http://speakerdeck.com/u/danwrong/p/pushstate-or-bust). He talked about page refreshes, Hashbangs, Pushstate, and everything in-between; what the positives and negatives are, and how to go about putting something together so that everyone on the web is happy. This includes not breaking the back button in your browser, google indexing your content, bookmarking content, the goodness of HTTP such as redirects, and making sure it works in every browser in some form or another.

Dan tried to explain what he meant by his "[Pushstate or bust](https://twitter.com/danwrong/statuses/171681426297729025)" tweet a few months ago; he didn’t mean use Pushstate and nothing else, he meant if you’ve got access to pushstate then by all means use it along with some client side templating like [Mustache](http://mustache.github.io/) / [Handlebars](http://handlebarsjs.com/) / [Hogan](http://twitter.github.io/hogan.js/) to give content without page refreshes. If the browser doesn’t support Pushstate then you just default back to page refreshes; this way everyone on the web is happy.

It makes absolute sense to me; what do you think? Are there any pitfalls to this method? I mean, I can’t see them myself; [Github](https://github.com/) are actually already doing this. They already use pushstate if available and if not then you just load up a new page on every interaction. Yes, anyone with an older browser (or recent one in IE’s case) still ends up loading a new page, but there’s only so much hand holding you can do for older browsers; if we as web developers didn’t continue to innovate then why would anyone ever update their browser?

I loved this talk and it was by far the most interesting of the night. It even showed that Twitter are moving away from using their own API (which is why they became as popular as they are today, their API allowed apps to be made for iOS etc in the early days – it had all the features as Twitter were using it themselves); @danwrong said that they’re likely to move away from it purely because of how they would implement Pushstate on twitter, with data being passed to templates on the server, being the exact same data passed to the templates on the client; you can see this in his slides, where if the request is an xhr request, the request gets handled differently. It makes perfect sense to do this for the client, that way you end up using the same data and templates both server and client side.

This is even more interesting to us at Holiday Extras as this is exactly what we’re moving away from, historically Holiday Extras had an API and a website, both developed separately with different features; but we’re investing over £0.5 million in updating our web infrastructure so everything runs from one data source, our new NodeJS api. This means our partners get the same products/features as we do and at the same time as we do.

## Then, Tweetdeck (or blackbird as they call it)
Along came the talk from [Tweetdeck](https://about.twitter.com/products/tweetdeck), [@tomwoolway](https://twitter.com/tomwoolway) and [@jmwhittaker](https://twitter.com/jmwhittaker) both stepped up to the stage to talk us through Tweetdeck’s stack. Tweetdeck is now entirely HTML5, CSS3 and Javascript based and they’re really aiming for a single codebase to rule them all. They talked about how they use some of the most up-to-date web technologies; LocalStorage, HTML5, SASS and Mustache. In order to get this working as an app on all the different platforms, they talk a little about the webkit wrappers they use; and how maybe in the future they’ll use Embedded Chromium. This is something we may start looking at at Holiday Extras; our in house Contact Centre currently use Safari and a custom built web app, going down the same route as Tweetdeck may give us even more control than we currently have, it’s something I’ll be looking at in the future.

Then they start talking about their deployment/test/build process; how they use PhantomJS and QUnit for automated testing, Jenkins for CI and how they create nightly builds which people around Twitter then use to catch bugs before full releases. Again, this is something else we’re very much interested in doing at Holiday Extras. Why should our internal users have to wait for one of our 2 deployments every day?

## And then finally Twitter bootstrap
Up stepped [@fat](https://twitter.com/fat) and [@mdo](https://twitter.com/mdo) to talk about Twitter bootstrap. To be honest with you I had some pre-conceived ideas about Twitter Bootstrap, but it turned out to be an enlightening talk.

They talk about a load of stats regarding Twitter Bootstrap 2.0 on git, and then onto some more stats regarding Twitter Bootstrap 2.0.3. Then they go on to talk about tooling, how they use Less and tools around it that allow for rule rewriting; their last hack week at Twitter was based around tooling and what they could create to make their jobs easier.

To be honest, the talk goes on about what they want to do with Twitter Bootstrap, how they want to make mobile integration better, and how they want to make their docs much better than they are now. But the most interesting part for me was something that @mdo said when asked a question about how they want Twitter Bootstrap to be interpreted further down the line. @mdo said that (and I’m paraphrasing here) “It would be odd if the web was full of websites that look like Twitter, Twitter Bootstrap was designed as exactly that, a bootstrapping tool. A tool for prototyping or to get you started but then changing and customising it to match your own brand/ideas”; this was great to hear to be honest with you. Earlier on they showed some sites that use bootstrap, two of which you could tell used bootstrap and another, kippt.com, which at first sight doesn’t look at all like bootstrap.

All in all, the talk about bootstrap was interesting, especially as Holiday Extras look into how we can use it to help us within our development process, but it’s not something I’m as interested in as much as I am Pushstate.

## And finally…
It was a great night with a great meal afterwards with the guys at Holiday Extras; looking forward to the next one, whenever that may be.