---
layout: post
title: Tab complete a target directory with Bash
categories: bash
author: jack_crawford
tags: bash terminal
comments: true
excerpt: "As a developer, I spend a lot of my time in [iTerm2](https://www.iterm2.com) and, as a developer, I hate repeating myself. This is why I love using bash aliases wherever possible to speed up my workflow."
---

As a developer, I spend a lot of my time in [iTerm2](https://www.iterm2.com) and, as a developer, I hate repeating myself. This is why I love using bash aliases wherever possible to speed up my workflow.

I'd estimate that I spend ~98-99% of my Terminal time in various subfolders of my `~/git` directory, where (you guessed it!) all of my git repositories live. This means that I regularly have to type `cd ~/path/to/git/<insert-repo-name-here>`. I can add a simple alias to my `~/.bash_profile` to save at least a second here.

```
# go git! cd straight to the git directory
gg() {
  cd ~/path/to/git; pwd;
}
```

While I'm here, I'm also going to add an alias so that I can quicky reload my `.bash_profile` when I change it.

```
# bash reload
alias br='. ~/.bash_profile'
```

When I reload my bash profile with `. ~/.bash_profile` (`br` once it's reloaded!), I can type `gg` to quickly change to this directory, cool!

```
jack.crawford in Documents$ gg
/path/to/git

jack.crawford in git$
```

I'll add an argument so that a directory name can be passed to `gg`, this can be accessed with `$1`.

```
# go git! cd straight to the git directory + repo name
gg() {
  cd ~/path/to/git/$1; pwd;
}
```

Reload with `br` and voila! It will change straight to the directory you pass in.

```
jack.crawford in Documents$ gg repo-name
/path/to/git/repo-name

jack.crawford in repo-name$
```

Even better still, I can use the time saving super power that is the [tab completion functionality in Bash](http://www.tldp.org/LDP/abs/html/tabexpansion.html) to automatically complete the argument for me.

```
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
  COMPREPLY=( $(compgen -f ~/git/$cur) )
}

# assign the _gg function to gg
complete -F _gg gg
```

Hit `br` one more time and I have a tab supercharged `gg` command that autocompletes the directory names for me.

```
jack.crawford in Documents$ gg rep
repo-name repo-name-2 repo-name-3 repo-name-4
```

Here's the final snippet for your `.bash_profile`.

```
# go git! cd straight to the git directory
gg() {
  cd ~/path/to/git/$1; pwd;
}

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
  COMPREPLY=( $(compgen -f ~/git/$cur) )
}

# assign the _gg function to gg
complete -F _gg gg
```

If you didn't already, you now know that bash aliases can be really useful for saving time, even if tiny! Let us know your own time saving aliases in the comments below.
