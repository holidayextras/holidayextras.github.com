---
layout: post
title: Vim skills
date: 2012-02-22 12:00:00
categories: PHP
author: Paul Clarke
tags: PHP vim
comments: true
time: 1 min
---

While we’re fixing some warnings in some bad php, aren’t you bored of changing all those instances of

```php
if ( $foo ) {
```

with

```php
if ( isset( $foo ) and $foo ) {
```

Yeah, me too. If you’re using vim, put this in your ~/.exrc

```php
map ^E dWi( isset( ^[pa) and ^[pa) ^[
```

then hit ctrl-e when you’re at the beginning of a var and it’ll do the rest of the typing for you. I am not a vim ninja but I have a few of these set up. Can’t remember why I chose these special move key combos (mostly because they were unused) but here we go:

```php
set shiftwidth=2
set expandtab
set tabstop=2

map ^C 0i^M^[k0i /**^M * ^M * ^M * @author PC ^M * @date ^[:r !date^MkJA^M */^[kkkkA
map ^F 0i^M^[k0i /**^M * ^M * ^M * @author PC ^M * @date ^[:r !date^MkJA^M * @assert ( ) = true^M */^M function foo ( Array $param = array( )) {^M $this->debug( __METHOD__ );^M $this->debug( $param );^M return true;^M }^[kkkkkkkkkkA
map ml ^[A^M require_once 'debuggingClass.php'; error_log( debuggingClass::debug( __METHOD__ . ' (line ' . __LINE__ . ')' ));^M^[
map ^E dWi( isset( ^[pa) and ^[pa) ^[
```

So those top three lines set my tab stops to 2 spaces (like yours should be), then allow me to hit ctrl-c to add a comment block, ctrl-f to add a new method, hit ml to add some common debugging I do and the one we just added ctrl-e to replace use of a var with a check to see if that var is defined first.

`^M` is a carriage return, so to insert that type ctrl-v ctrl-m. `^[` is an escape so to insert that type ctrl-v esc