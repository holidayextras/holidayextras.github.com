---
layout: post
title: Tab completing bash functions for a speedy workflow
categories: bash
author: jack_crawford
tags: bash terminal shell
comments: true
excerpt: "As a developer, I spend a lot of my time on the command line. As a developer, I also hate repeating myself. This is why I love using bash aliases and functions wherever possible to speed up my workflow."
---

As a developer, I spend a lot of my time on the command line. As a developer, I also hate repeating myself. This is why I love using bash aliases and functions wherever possible to speed up my workflow.

I'd estimate that I spend ~98-99% of my Terminal time in various subfolders of my `git` directory, where (you guessed it!) all of my git repositories live. This means that I regularly have to type `cd ~/path/to/git/repo-name`. I can add a simple function to my `~/.bash_profile` to save a little time here.

```bash
# go git! cd straight to the git directory
# pwd to print the directory we've changed to, giving some visual feedback
gg() {
  cd ~/path/to/git; pwd;
}
```

Changes to the `~/.bash_profile` usually only take effect when you log in again. We can however source the file with `source ~/.bash_profile` which, like any command, we can add an alias for to save some keystrokes in the future.

```bash
# bash reload
alias br='source ~/.bash_profile'
```

When I reload my bash profile with `source ~/.bash_profile` (`br` once it's reloaded!), I can type `gg` to quickly change to this directory.

```bash
jack.crawford in Documents$ gg
/path/to/git

jack.crawford in git$
```

I can adapt the function to accept an argument and append that to the path. The first argument passed to any function can be accessed with `$1`.

```bash
# go git! cd straight to the git directory + repo name
gg() {
  cd ~/path/to/git/$1; pwd;
}
```

Reload with `br` and _voilà_, it changes directory to `repo-name` inside the `git` directory.

```bash
jack.crawford in Documents$ gg repo-name
/path/to/git/repo-name

jack.crawford in repo-name$
```

Even better still, I can use [tab completion functionality](http://www.tldp.org/LDP/abs/html/tabexpansion.html), the time saving superpower to automatically complete the argument for me when I hit tab.

```bash
# Parameter completion for go git!
_gg() {
  # Set a pointer to current completion word, cur is used as convention
  # COMP_WORDS is the array of arguments
  # COMP_CWORD is the index that we will use to get our argument from COMP_WORDS
  local cur
  cur=${COMP_WORDS[COMP_CWORD]}

  # Reset the COMPREPLY variable
  # This is where we hold the completion output results
  COMPREPLY=()

  # Set the completion result as the output of compgen
  # compgen generates possible completion matches for.
  # -f means restrict this compgen command to filenames
  # pass each of these through basename
  COMPREPLY=( $(compgen -f ~/path/to/git/$cur | xargs basename) )
}

# assign the _gg function to gg
complete -F _gg gg
```

Reload with `br` one more time and I have a supercharged `gg` command that autocompletes the directory names for me.

```bash
jack.crawford in Documents$ gg rep
repo-name repo-name-2 repo-name-3 repo-name-4
```

Here's the final snippet for your `.bash_profile`.

```bash
# go git! cd straight to the git directory
gg() {
  cd ~/path/to/git/$1; pwd;
}

# Parameter completion for go git!
_gg() {
  # Set a pointer to current completion word, cur is used as convention
  # COMP_WORDS is the array of arguments
  # COMP_CWORD is the index that we will use to get our argument from COMP_WORDS
  local cur
  cur=${COMP_WORDS[COMP_CWORD]}

  # Reset the COMPREPLY variable
  # This is where we hold the completion output results
  COMPREPLY=()

  # Set the completion result as the output of compgen
  # compgen generates possible completion matches for the argument
  # -f means restrict this compgen command to filenames
  # pipe each of these paths through basename
  COMPREPLY=( $(compgen -f ~/path/to/git/$cur | xargs basename) )
}

# assign the _gg function to gg
complete -F _gg gg
```

If you didn't already, you now know that bash aliases can be really useful for streamlining your workflow. Please share any of your own interesting bash aliases and functions in the comments!
