---
layout: post
title: Hotel Spreadsheet Reader - a Case Study
categories: Programming
author: caroline_woodhams
tags: problem solving, microservice, Google, big data, data, hotel, rates
comments: true
excerpt: A case study examining how we used a suite of Google products to solve the problem of automating hotel rates imports.
---

## The problem:
Our Commercial team are sent hundreds of spreadsheets a day from the hotels we partner with, requesting rates updates. This manual process takes on average two hours end to end, and involves several people from the Commercial team to compile data, check, load into the system and check again. At every stage there is opportunity for errors to occur.

We sought to automate this process, with the benefits of:

- Reducing the time it takes to load new rates into the system (and therefore present the best price to our customers);
- Reduce the pricing errors through removing handoffs, thus limiting the potential for human error;
- Release the Commercial team’s time so they can re-focus on value-add activities for the business.

## The solution:
Using a suite of Google technologies we were able to implement a full end to end solution. The steps taken were as follows:

1) The email sent by the hotel to Commercial’s inbox was automatically forwarded to another single-purpose inbox for our systems to process from. We set this up using filters and auto-forwarding rules, based on sender.

2) The spreadsheet attachments were automatically downloaded from the email and posted to a Google Big Query folder, using functionality available in Google’s Email API.

3) Using Google Cloud Functions, this spreadsheet was parsed to check for the rate changes. This was indicated through the cell being a different colour.

4) Once the changes were identified, a pricing event was created using this information that was sent to a Google pub/sub queue.

5) The first pub/sub topic sends the pricing data to our Price Transformer, a microservice that converts the data to a standard format we use internally. At this stage we match the supplier’s product code with our own internal product codes - so we know we’re updating the right one downstream!

6)  The formatted pricing event is then sent onto another pub/sub topic, from which it can be subscribed to by multiple services. Currently, there are three subscriptions at this stage: a historical data store (so we can query past data), an operational data store (which can be accessed by internal services such as Search API) and our Extranet price processor microservice.

7) The Extranet price processor microservice listens for new pricing events, and when one is found that it is interested in, it sends this message onto the Extranet.

8) From this message, Extranet creates a pricing file, which can then be automatically imported into our reservation system (where prices are currently held and queried by internal APIs). Once in the reservation system - and subject to web caching - the price will appear on our site when a customer makes a search.

This entire process now that it is automated takes around 20 minutes - reducing the time it takes end to end by about 80%.

## Learnings:
In shipping this product we came across a few blockers and ‘gotchas’, that we quickly learnt from and rectified. Some of our key learnings were:

**File formats**
In live demo we noticed how brittle we’d originally set the spreadsheet reader up for: we ran through the automated rates import process once, and then our sponsor asked us to change another rate so he could see it in action again. In adding another rate it changed the file type from .xls to .xlsx - which because we had narrowly defined the file types supported meant that it wouldn’t process through our Google Function.

**Fuzzy colours**
Another area of brittleness was defining the colour used to indicate a rates change in a particular cell. We originally coded to look for specific hex colours, but learnt that we needed to widen this to include other shades - or ‘fuzziness’ - which accounts for colour changes both as a result of using different spreadsheet programs and human choice.

**Feedback loop**
It was important that our Commercial team be kept informed at key stages in the process, such as when the file is received (“do not process this”) and when it has been uploaded (“now let the hotel know it’s done”).

For the first communication, we applied a Google Inbox label to the effect of ‘do not process this’. To close the loop, we set up an alert in SumoLogic that fired an email to Commercial’s inbox that stated which file had been processed - and also if it had failed for any reason.

**Launch process**
For our first hotel, it’s fair to say we were a little complacent around the complexity to move rates uploads to an automated process. Because of the risk (prices not appearing on our site) it required close collaboration with Commercial to ensure that the switch was made seamlessly, and we had to ensure we had a roll back plan if anything went wrong.  

On the agreed day we launched out of hours, with a colleague from Commercial on site to help us with testing. We developed a checklist as a guide covering both the technical and operational steps we needed to take for future launches.

**Logging, Alerting and Reporting**
Here is where SumoLogic has been an extremely valuable tool. We were able to log each part of the process so we could see how each step was performing. This is key when moving to microservices and pub/sub queues - if something goes down you want to narrow which part of the process is affected quickly, not waste minutes tracing it through.

From SumoLogic we could also set up alerts when things failed, and report on the system performance at both micro- and macro-level.

We didn’t have all the reports set up from Day 1 of launch. Instead, we had logging for all the key services as we built them (including on staging), which meant we could easily set up dashboards as we identified what we needed to measure.
