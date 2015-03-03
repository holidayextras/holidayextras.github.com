---
layout: post
title: Customise your prompt with git information
date: 2012-07-20 12:00:00
categories: Misc
author: dan_jenkins
tags: Bash Command-line Git Prompt Shell Terminal
comments: true
redirect_from:
  - 2012/07/20/customise-your-prompt-with-git-information/
---

## What’s involved and why?
I’ve been using git more and more recently, all of our new projects at [Holiday Extras](http://www.holidayextras.co.uk) use [git](http://en.wikipedia.org/wiki/Git_(software)) over [SVN](http://en.wikipedia.org/wiki/Apache_Subversion) which has been our primary VCS in the past. All of the [NodeJS](http://nodejs.org/) modules that we’ve contributed back to the NodeJs community are all hosted on github for example. Our most recent module enables us to talk to [Sauce Labs’s REST API](https://docs.saucelabs.com/reference/rest-api/) directly from within any of our NodeJs apps, something we’re doing within our internal [WebDriver](http://docs.seleniumhq.org/projects/webdriver/) testing framework.


Instead of using one of the many git apps out there ([gitx](http://gitx.frim.nl/), [tower](http://www.git-tower.com/), [sourcetree](http://www.sourcetreeapp.com/), github for [mac](https://mac.github.com/) + [windows](https://windows.github.com/), [gitbox](http://www.gitboxapp.com/)), I decided that I’d get more from git if I just used it via it’s command line interface. Saying that, I’m nowhere near finished learning about everything git can do; it’s one of those tools that you’ll always be learning new ways of doing X task.

So I was using git directly using the command line, but git didn’t come with tab autocompletion, and my bash prompt just looked boring and completely unusable.  So I went and google’d for a solution, and luckily for me, others had already created a solution.

## What customisation did I make?
If I’m in a directory that’s under git version control, my prompt will tell me about the status of the repository and which branch I’m on. Git will now autocomplete when pressing tab too; it’ll even autocomplete an alias in my git config file! It’s a real time saver when you’re working with git every day.

Below is the prompt from my latest NodeJS module, '[saucelabs](https://github.com/holidayextras/node-saucelabs)''

<IMG>
![Bash Prompt]({{ site.baseurl }}assets/img/bash_prompt.png)

You can see I’m on branch master, and I have no changes waiting to be added to the repository. You can also see that the last command I ran returned with an exit status of OK, this is displayed with the green tick.

![Bash Prompt with changes]({{ site.baseurl }}assets/img/bash_prompt_with_changes.png)

Now, you can see that I added a file called test and my prompt turned red, and gave me a % sign. The % sign tells me I have a new file that the repository doesn’t know about yet; a hash tells me that a file that the repository tracks has changed.

I customised my bash session using the examples from <https://makandracards.com/makandra/1090-customize-your-bash-prompt>; I was able to take parts from different bash prompts to create one that was useful to me.

## How to go about doing it yourself
First off, you need to install the git autocomplete library if you haven’t already done so, it gets added to your bash autocomplete setup. If you’re on a mac, the easiest way to do this is to install git via homebrew with the command:

`brew install git`
This relies on you already having [homebrew](http://brew.sh/) installed on your mac. If you’ve got windows or linux, there will be similar tools out there that allow you to do this. To install homebrew follow the instructions at <https://github.com/mxcl/homebrew/wiki/Installation>.

This will install git for you, but it will also install the git completion library too. This is the method I’m going to be using as an example in this post. Here’s mine:

```
if [ -f `brew --prefix`/etc/bash_completion ]; then
. `brew --prefix`/etc/bash_completion

GIT_PS1_SHOWDIRTYSTATE=1 #... untagged(*) and staged(+) changes
GIT_PS1_SHOWSTASHSTATE=1 #... if something is stashed($)
GIT_PS1_SHOWUNTRACKEDFILES=1 #... untracked files(%)

export PS1='\[\e[01;30m\]\t `if [ $? = 0 ]; then echo "\[\e[32m\]✔"; else echo "\[\e[31m\]✘"; fi` \[\e[00;37m\]\u\[\e[01;37m\]:`[[ $(git status 2> /dev/null | tail -n1) != "nothing to commit (working directory clean)" ]] && echo "\[\e[31m\]" || echo "\[\e[32m\]"`$(__git_ps1 "(%s)\[\e[00m\]")\[\e[01;34m\]\w\[\e[00m\]\$ '
fi
```
This goes into your .bash_profile file within your home directory, on a mac you can use the command below to alter this file:

```
vi ~/.bash_profile
```

You can also alter your .bash_rc file, but all these files get read in in different priorities so it depends on your setup, usually the .bash_profile will be fine.

Let’s take a look at what the text above does, if we’ve got the library, then use it and move on and grab that file and export a new PS1 variable, if we don’t then don’t do anything. If we got that file then we set some variables that the git autocomplete library will pick up, which enables showing details about untracked files etc. Now we change the PS1 variable; PS1 is your prompt, it’s just a variable that you can export over and over again.

Obviously, the bonus of this library is the tab autocompletion which is alone a reason in itself to install the library.

## Sudo?
Do you use sudo su? If you do, you’re going to want to stop using it! When you sudo su, it doesn’t login to a new bash session; it reuses your current session. Something I’ve only just learnt is that when you sudo su, into root, you’re no longer in a bash session, you’re actually within a shell session. This means that if you’ve used some bash commands within your prompt (like I have), you’ll end up getting errors on every line in your root session.

So I hear you asking how to get around this? It’s simple really, use sudo -i instead! This will create a new session (so it’s no longer reading your PS1 export), and allows you to customise your root prompt too! Here’s mine:

```
export PS1='\[\e[01;30m\]\t \[\e[31m\]\u\[\e[37m\]:\[\e[33m\]\w\[\e[31m\]\$\[\033[00m\]'
```

You’d put this within the .profile file within root:

```
vi ~/.profile
```

You’ll notice the lack of .bash_profile, as stated earlier in the post, when you sudo into root, you’re actually using shell.

![Root Prompt]({{ site.baseurl }}assets/img/root_prompt.png)

You can see when in root, I get no git details and it looks very red; there’s a reason for that…you’re not meant to stay as root for long! Get in and get out asap.

And there you have it, git autocomplete and customisation of your command line prompt, whether you’re in root or not. Got your own customisation in your prompt? Let us know in the comments below!

Also, we’re recruiting! Take a look at our current position of Principal Software Engineer on <join.holidayextras.co.uk>