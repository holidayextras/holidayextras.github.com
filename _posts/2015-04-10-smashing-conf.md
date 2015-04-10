---
layout: post
title: My smashing experience
date: 2015-04-10 08:20:00
categories: conference
author: jack_crawford
tags: conference smashing ux
comments: true
---

Last month (17th–18th of March 2015) I attended Smashing Conference Oxford. It was my first time at this conference and I enjoyed it a great deal, met some really interesting people and left feeling inspired to apply a bunch of the things I'd learnt back to the real world.

Below are my notes, key points and interpretations of each of the talks I attended.

## A good writer is a good thinker - Christopher Murphy [@fehler](http://twitter.com/fehler)

* Writing is a great way to learn, it rewires your brain
* Writing helps you develop, challenge and test new ideas
* Expand your library as much as you can
* Don't just read within your own industry, expand your field and you will be surprised what you can learn
* The more you consume, the richer your outcomes

<blockquote class="twitter-tweet" lang="en"><p>&quot;Writing things down, getting your ideas on the table, clarifies your thoughts&quot; - <a href="https://twitter.com/fehler">@fehler</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/577773117558431746">March 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Designing for people - Meagan Fisher [@owltastic](http://twitter.com/owltastic)
_Having exposure to real users is a must when building products, this talk went into the what, why & how of user testing_

* People building products need exposure to users to understand the feelings & needs of users
* Try and set a goal to meet, two hours every six weeks should be enough
* More user exposure = more innovation
* Common CEO explanation for startup failure: "People just don't get it, they don't see my vision"
* Make friends with reality
* Get proven wrong at lowest cost, identify problems for your users as early as possible
* Let go of our own assumptions
* Be easy to reach on social media, email, etc
* The technical team should be going through user support tickets
* Helpful user testing tools: [Silverback](http://silverbackapp.com), [Full Story](http://fullstory.com) & [Inspectlet](http://inspectlet.com)

<blockquote class="twitter-tweet" lang="en"><p>&quot;Make friends with reality&quot;. What is it that your users actually want? Let go of your own assumptions. Great talk <a href="https://twitter.com/owltastic">@owltastic</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/577783682414583808">March 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Don't give them what they want, give them what they need - Richard Rutter [@clagnut](http://twitter.com/clagnut)
_A case study on designing the [The Royal Borough of Kensington and Chelsea](http://www.rbkc.gov.uk/) website_

* Identify what the client actually _needs_, not what they _want_. This is essential but is usually hard!
* Don't forget the call centre! They are a valuable user research resource that shouldn't be ignored
* All pages should have one primary goal split things that do two things into two pages
* Split up mental models e.g. don't ask for application number and street name in the same input field
* Always test your tests
* If all else fails, "blame it on the new CMS"

<blockquote class="twitter-tweet" lang="en"><p>A brilliant list of design principles by the guys <a href="https://twitter.com/clearleft">@clearleft</a> for the <a href="https://twitter.com/RBKC">@RBKC</a> website <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a> - <a href="http://t.co/2NZYj6m1Qk">pic.twitter.com/2NZYj6m1Qk</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/577806227180224513">March 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Responsive images are here - Yoav Weiss [@yoavweiss](http://twitter.com/yoavweiss)

* [@respimg](http://twitter.com/respimg) Responsive image group
* Load images depending on screen size, directly from HTML elements with `srcset` attribute
* The following syntax

```html
<img srcset="large.jpg  1024w,
      medium.jpg 640w,
      small.jpg  320w"
   sizes="(min-width: 36em) 33.3vw,
      100vw"
   src="small.jpg"
   alt="A rad wolf" />
```

* Here's a [great article](http://www.smashingmagazine.com/2014/05/14/responsive-images-done-right-guide-picture-srcset/) to explain this in further detail

<blockquote class="twitter-tweet" lang="en"><p>&quot;The web is ours! If you have found a problem with the web, join a community and try and fix it together&quot; - <a href="https://twitter.com/yoavweiss">@yoavweiss</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/577819263664300032">March 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Rethinking publishing - Peter Bil'ak [@peterbilak](http://twitter.com/peterbilak)
_An innovative solution to increasingly ineffective traditional publication methods, [social distribution](https://worksthatwork.com/distribution/)_

* Readers are a commodity sold to the advertisers
* Typography is the _only_ connection between different mediums (e.g. print & web)
* Flexible pricing model: how much is the user willing to pay?
* Online publishers should make unsubscribing easy
* Anything made by a human has been designed
* Removing something is also an act of design
* Build your maintenance into your product
* [Social distribution](https://worksthatwork.com/distribution/)

<blockquote class="twitter-tweet" lang="en"><p>&quot;Anything that&#39;s been made by a human has been designed. Removing something is an act of design.&quot; <a href="https://twitter.com/WorksThatWork">@WorksThatWork</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/577852878523613184">March 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Visualisation that takes us beyond the numbers - Natalie Yadrentseva [@natalieyadren](http://twitter.com/natalieyadren)
_An in-depth look into the power of data visualisation_

* Timelines - abstract from the personal feelings of time
* Use colour hue to show the differences in data
* Use colour intensity to represent magnitude
* [colorbrewer2.org](http://colorbrewer2.org)

<blockquote class="twitter-tweet" lang="en"><p>In data visualisation, color intensity drives to investigate. Color hue drives to alarm (red) <a href="https://twitter.com/natalieyadren">@natalieyadren</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/577867329620566016">March 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Building beyond the browser - Tom Gianattasio [@attasi](http://twitter.com/attasi)
_How the guys at [macaw](http://macaw.co/) used [node-webit](http://nwjs.io/) to build their desktop hybrid app_

* Gives you control over the window (draggable, shape, transparency)
* Chromium arguments can be passed in e.g. `--disable-web-security`
* Macaw uses React-like Virtual DOM diffs
* Macaw also uses Virtual CSS Object Model
  - CSSOM benchmarks: 15ms vs 220ms livereload
* Hybrid. Better. Faster. Stronger

---

## Is Blink the new IE6? - Bruce Lawson [@brucel](http://twitter.com/brucel)
_A plea to the community & browser developers to stop Blink becoming a monopoly, like IE6 was. A monopoly is bad for the web_

* We made them require IE6 - "Best viewed in IE6"
* iPhone almost influenced a Webkit monopoly
* Nobody reads specs, even fewer obey specs
* CSS prefixes e.g. `-webkit-cool-property` influence people to only support these _cool_ browsers
* No more prefixing in Blink, stop building a monopoly
* IE starting to alias `-webkit` prefixes
* Blink is being built by individuals, not companies
* Is native killing the web? We hope not
  - [Service workers](http://jakearchibald.com/2014/using-serviceworker-today/) can bridge the gap with offline
  - [Web manifest](http://html5doctor.com/web-manifest-specification/) (add to homescreen once user has engaged)
* We need to be the web, but better

<blockquote class="twitter-tweet" lang="en"><p>The lights went off during <a href="https://twitter.com/brucel">@brucel</a> talk. I saw a cat and the words &#39;service workers&#39;. now I have a sudden urge to use <a href="https://twitter.com/opera">@opera</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/577893011306225664">March 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Welcome to Planet Fintlewoodlewix - Chris Heilmann [@codepo8](http://twitter.com/codepo8)
_Christian was the mystery speaker with an influential talk on fixing the present before we try to innovate the future_

* Feeling like a fraud (overcompensate, aggression, lethargy)
* We don't control our users
* Less privileged people have a right to get online, support them too. Forget about us, _they_ deserve to be connected
* Backwards compatibility shouldn't be a nuisance
* Learn the languages, then use the frameworks for a deeper understanding
* Try to suck at things, it's the best way to learn
* Build minimum loveable products rather than mimimum viable products, nobody wants a shoddy experience
* Fix the broken things before we build the new shiny broken things

<blockquote class="twitter-tweet" lang="en"><p>We should all build a &quot;Minimal Loveable Product&quot; not just a &quot;Minimal Viable Product&quot;. - <a href="https://twitter.com/codepo8">@codepo8</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/578129931361771520">March 18, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Enhancing responsiveness with flexbox - Zoe Gillenwater [@zomigi](http://twitter.com/zomigi)
_Using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) today in the real world as progressive enhancement with fallbacks_

I attended [@zomigi](http://twitter.com/zomigi)'s [Leveling Up With Flexbox](http://smashingconf.com/oxford-2015/workshops/zoe-mickley-gillenwater) workshop on the first day of the conference. The session was highly interactive and hands on and taught me a lot about the power of flexbox. The main thing I learnt is that it's most useful as a tool for enhancing layouts for components on the page, rather than a replacement for all layout techniques. Floated grids still have a place, [for now](https://css-tricks.com/snippets/css/complete-guide-grid/)!

* Change the order of components with CSS without affecting their order in the DOM with flexbox's `order` property
* Responsive web design is not binary, it's a continuum

---

## Debugging HTTP - Lorna Mitchell [@lornajane](http://twitter.com/lornajane)
_A fun spin on the wonderful world of HTTP and how to debug it_

* 6 stages of debugging (denial, frustration, disbelief, testing, gotcha, relief)
* Seeing the problem is harder than fixing it
* Devtools copy as cURL
* [ngrok](https://ngrok.com/) localhost tunnel for exposing local servers to the public
* [Charles proxy](http://www.charlesproxy.com/) - debugging through proxies

---

## Making a silky smooth web - Paul Lewis [@aerotwist](http://twitter.com/aerotwist)
_Lots of techniques for building and debugging performance in front-end web applications_

* The rendering process in a browser:
  - **Layout:** set the geometry and position for each element
  - **Painting:** put the pixels for each element into layers
  - **Composite:** draw the layers on the screen
* [csstriggers.com](http://csstriggers.com)
* `requestAnimationFrame` > `setTimeout` as it doesn't block rendering
* [Devtools timeline JS profiler](https://developer.chrome.com/devtools/docs/timeline)
* Use [faster CSS selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS) & limit selection scope
* Reduce paint complexity, look at the tools
* Animate the composites
  - `transform` & `opacity` are the silkiest to animate, as long as the element is on it's own layer
  - Promote to a layer using `translateZ(0)` or `will-change` CSS properties
  - Don't promote _all the things_, layers use memory
* [RAIL](https://speakerdeck.com/paullewis/making-a-silky-smooth-web?slide=122)
  - Response (100ms after touch to respond)
  - Animation (10ms if we can)
  - Idle (50ms at a time)
  - Load (1000ms aim)

<blockquote class="twitter-tweet" lang="en"><p>&quot;Tools, not rules&quot;. Trust your tools when benchmarking performance, rules could change tomorrow - <a href="https://twitter.com/aerotwist">@aerotwist</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/578172092333596672">March 18, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Crafting for #worlddomination - Polle De Maagt [@polledemaagt](http://twitter.com/polledemaagt)
_Social media is a powerful marketing, customer support and payment taking tool_

* Add an automated "expected response time" as the twitter header
* Payments through social media
* €80000/week taken via social media payments at [KLM](https://www.klm.com/)
* [Awesome dog advert](https://www.youtube.com/watch?v=NK-T_t166TY)

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a> – “Crafting for <a href="https://twitter.com/hashtag/worlddomination?src=hash">#worlddomination</a>” by <a href="https://twitter.com/Polledemaagt">@polledemaagt</a>. <a href="http://t.co/eoCqGuAP4b">pic.twitter.com/eoCqGuAP4b</a></p>&mdash; Elisabeth Irgens (@elisabethirg) <a href="https://twitter.com/elisabethirg/status/578214540317483008">March 18, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## User research for designers & engineers - Rachel Ilan Simpson [@rilan](http://twitter.com/rilan)
_User research is _really_ scary but absolutely essential_

* Talking to users is _scary_, it could invalidate our products & ideas
* Why talk?
  - Identify new opportunities
  - Build the right thing
  - Fail early, fail often
* Card sorting - what do the users think is the most important feature?
* Codesign sessions - let your users design with you
* Prototyping tools: [Pop app](https://popapp.in/), [Keynotopia](http://keynotopia.com/)
* [The scrollwheel Guy Collins animation](https://www.youtube.com/watch?v=fa9DLxDtPtc)
* Make sure you debrief with the team after user testing!

<blockquote class="twitter-tweet" lang="en"><p>&quot;User research is going to change what you make and how you make it&quot; <a href="https://twitter.com/rilan">@rilan</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/578221201912414208">March 18, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## UX of offline-first - Jake Archibald [@jaffathecake](http://twitter.com/jaffathecake)
_Performance on the web matters more than ever, make sure your sites are (or seem) as fast as possible_

* Let users play level one as soon as level one is ready
* Use markup for markup with _actual_ content, don't leave all of the rendering to JavaScript
* Unblock your scripts
* Lie about performance e.g. make the UI seem as though a request has finished, even if it's still queued in the background
* Don't make fonts required on first render
* Frameworks that are focused on Front-End performance: [React]([React]), [Ember fastboot](https://github.com/tildeio/ember-cli-fastboot)
* [Critical CSS](https://github.com/addyosmani/critical): Extract and inline the most important CSS and defer the rest
* Distract the user with an actual experience
* Load scripts separately if functionality is different? [HTTP2](https://http2.github.io/) speed benefits should reduce round-trip disadvantage
* Render time punished by assets loading quickly, loading assets after `requestAnimationFrame` prevents this block.
* The time people hate wasting the most is right now
* Treat the network as an enhancement
* [Service workers](http://jakearchibald.com/2014/using-serviceworker-today/)
* Users don't trust offline web, _yet_

<blockquote class="twitter-tweet" lang="en"><p>&quot;Lie-fi is like being offline, but it trolls you pretending to be online&quot; - <a href="https://twitter.com/jaffathecake">@jaffathecake</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Hungry Geek (@TheHungryGeek) <a href="https://twitter.com/TheHungryGeek/status/578241212152471552">March 18, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
