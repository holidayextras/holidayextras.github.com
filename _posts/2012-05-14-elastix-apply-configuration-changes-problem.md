---
layout: post
title: "Elastix 'apply configuration changes' problem"
date: 2012-05-14 12:00:00
categories: Asterisk Elastix PHP VoIP
author: Dan Jenkins
tags: Asterisk Elastix PHP VoIP
comments: true
time: 8 mins
---

## The background…
I’ve been meaning to write a post about how we’ve moved our phone system to a [Elastix](http://elastix.org/index.php/en/) / [Asterisk](http://www.asterisk.org/) for a while now; but we’re still working through some issues so I’ve been putting it off. However, we came across a bug in our production system that I felt needed an answer to be published so it can hopefully help other people with the same problem. I’ll try not to go into too much detail about the transition; it really deserves a few posts once we’ve worked our way through our remaining issues.

## So what’s the issue with Elastix?
During development and testing we’ve never had issues with making changes and applying them to the phone system using Elastix’s GUI; but as soon as we put the server into a production scenario, our changes never seemed to get applied. We’d go through the process, make some changes, submit them to the Elastix PBX database, ready to be applied when ready. We’d then click on the “Apply configuration changes here” pink bar at the top of Elastix and wait for the browser to finally refresh without the pink bar.

Once that happened, you’d expect to have seen Asterisk (The PBX under Elastix) to be reloading in its CLI console; it didn’t! On came the routine of applying changes and having to go into the CLI and running “module reload” manually for changes to take effect. This isn’t a great solution, and it shouldn’t have even been needed; Elastix should have dealt with it; and if the reload wasn’t working, what else wasn’t?!

## What changed between development/testing to production?
This has been one of our biggest issues throughout our migration over to VoIP, however much you try to replicate and generate fake calls to push your kit to the limit, nothing ever comes close to what happens when you connect over 300 extensions, around 50 agents and over 70 concurrent calls. We hit major issues when we first tried to move the entire company over to our new phone system back in December 2011; in the end we had to pull it and take a step back.

## Back to the matter in hand…
You came here to read about how to fix that annoying issue with Elastix not applying your changes, didn’t you? When you apply changes, it actually runs another [PHP](http://php.net/) script which outputs all that data to the configuration files and then reloads Asterisk; this file is /var/lib/asterisk/bin/retrieve_conf. So my first thought was to up the memory limit and timeout for PHP, so I went and changed the timeout to 4 minutes and the memory to 1GB in /etc/php.ini. These are tied very closely to the size of our dialplan and the specification of server we’ve got so this would change in most cases. However, after trying these changes, the issue still occurred.

So next, I took a look at Apache’s error log in /var/log/httpd/ssl_error_log and noticed a lot of Asterisk Manager Events in the error log; they looked a little like this:

```
*date + client information* Got event.. fullybooted, referer: *referrer information*
*date + client information* No event handler for event 'fullybooted', referer: *referrer information*
```

So, once it’s finished writing out the configuration files, Elastix opens up a socket connection to the AMI and tries to issue “module reload” or “reload” depending on your version of Asterisk. But after seeing the errors in the apache logs, I came to the conclusion that on a busy system, this socket connection was getting sent so many events that it couldn’t send the reload command, or the php tries to but times out and quits.

## The solution
In  /etc/asterisk you’ll find a file named manager.conf with an entry of admin; this is the user that connects to the AMI via the Elastix GUI. You’ll see this user is allowed to write and read every event that Asterisk emits; we want to limit these events to the ones that Elastix needs to operate. I tried searching through the codebase to find out which events Elastix listens for but this didn’t quite go how I planned so I’ve just had to take an educated guess about which ones Elastix definitely won’t care about. This is definitely something [Palosanto](http://www.palosanto.com/index.php/en/) / [FreePBX](http://www.freepbx.org/) can improve in their codebases.

## How do I go about implementing these changes?
Add the code below directly under the admin entry, it tells the AMI not to send any of these events when something logs in with the associated user

```
eventfilter=!Event: PeerStatus
eventfilter=!Event: VarSet
eventfilter=!Event: Newexten
eventfilter=!Event: Dial
eventfilter=!Event: NewCallerid
eventfilter=!Event: RTCPSent
eventfilter=!Event: RTCPReceived
eventfilter=!Event: DTMF
eventfilter=!Event: MusicOnHold
eventfilter=!Event: NewAccountCode
eventfilter=!Event: QueueEntry
eventfilter=!Event: Rename
eventfilter=!Event: MonitorStop
eventfilter=!Event: MonitorStart
eventfilter=!Event: AgentRingNoAnswer
eventfilter=!Event: MessageWaiting
eventfilter=!Event: QueueMemberRemoved
eventfilter=!Event: QueueMemberAdded
eventfilter=!Event: StatusComplete
eventfilter=!Event: Status
eventfilter=!Event: QueueParams
eventfilter=!Event: QueueMember
eventfilter=!Event: QueueStatusComplete
eventfilter=!Event: Agents
eventfilter=!Event: AgentsComplete
eventfilter=!Event: ParkedCall
eventfilter=!Event: ParkedCallGiveUp
eventfilter=!Event: UnParkedCall
eventfilter=!Event: ParkedCallTimeOut
eventfilter=!Event: QueueMemberPaused
eventfilter=!Event: Hangup
eventfilter=!Event: Unlink
eventfilter=!Event: Join
eventfilter=!Event: AgentConnect
eventfilter=!Event: Bridge
eventfilter=!Event: AgentLogin
eventfilter=!Event: AgentLogoff
eventfilter=!Event: NewChannel
```

I’ve tried to pick up the events that were being sent a lot; namely `RTCPSent` and `RTCPReceived`. These two are the most common out of them all. I’m going to try and find out from Palosanto which events Elastix needs to know about, and then try and get the codebase changed so that everyone can benefit from this.

Let us now in the comments if this has helped you, I hope it helps others get around this issue that should really be a non-issue…