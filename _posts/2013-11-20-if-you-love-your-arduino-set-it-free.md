---
layout: post
title: If you love your Arduino, set it free
date: 2013-11-20 12:00:00
categories: Misc
author: paul_clarke
tags: Arduino DIY Electronics
comments: true
redirect_from:
  - 2013/11/20/free-arduino/
---

So you’ve got an Arduino, now what?

[Arduino](http://arduino.cc/) is a microcontroller on a board with lots of inputs and outputs, built for hacking on. You’ve got one, you’ve made an led blink on and off, so what do you do next? You can buy any number of regular components and solder them together in all sorts of robotronic combinations, but If you’re really more of a web monkey, the most satisfying thing you can do is get it online. Let’s annoy people on the Twitter!

You will need:
1. An Arduino
2. An ethernet shield

A “shield” is the Arduino name for a plug and play component that adds extra functionality. Generally they will fit to your device with no soldering required and pass through any unused pins so you can still stack extra devices on top. I bought an [official wifi shield](http://arduino.cc/en/Main/ArduinoEthernetShield) but there are lots of cheap ones out there. Plug it in, and upload a programme to your Arduino. [Here is one of mine](https://github.com/pauly/arduino/blob/master/sniff_tweeter/sniff_tweeter.ino) that makes use of an air quality meter connected to pin A0, but it would be easy to adapt to any other sensor, or just forget the sensor and just tweet. The particular beauty of this script is that it posts direct to Twitter, without needing another server as a proxy. This does mean the script is pushing the memory limits of the Arduino, but that’s to cover the authentication needed. You can write [a much lighter script](https://github.com/pauly/rf-butler) but then you need a proxy sitting on a box that you can use the necessary libraries on. So Arduino posts just one param to your php script, and that handles the actual post to twitter.

Hmm, I can only check the air quality within a short distance of my router, because the Arduino has to be plugged in there… Can we go further afield?

The new [Arduino Yun](https://github.com/pauly/arduino/blob/master/sniff_tweeter/sniff_tweeter.ino) has built in wifi, but it’s still £50, if you can find one. A [plug in wireless shield](http://store.arduino.cc/index.php?main_page=product_info&cPath=11_5&products_id=312) is expensive too. Can we do this a bit cheaper? I think so, in my case reusing something I had spare. I heartily recommend this [TP-Link nano router](http://www.amazon.co.uk/exec/obidos/ASIN/B00APZZ30W?tag=clarkeology-21). I had one already, set up in client mode, to connect my non-wifi TV to the network, and I know other people in the department are using them as a wireless hotspot and a range extender. It’s £25 quid and you’ll always find a use for it. This version doubles up as a USB charger, so not only can we plug the ethernet shield in, we can power the Arduino off it too. Now we are **free**, to do what we want to do, to roam… anywhere there is a power socket (in range of our wifi) we can [tweet](https://twitter.com/ourduino) to our heart’s content.

So what’s next?

1. Tweet when the toast is burning..?
2. Blog the air quality in the smallest room..?
3. Report when all the diy electronics have caught fire..?

Let me know about your project.