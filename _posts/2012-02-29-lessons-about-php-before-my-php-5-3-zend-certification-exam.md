---
layout: post
title: Lessons about PHP before my PHP 5.3 Zend certification exam
date: 2012-02-29 12:00:00
categories: PHP
author: Dan Jenkins
tags: Coding-Standards Exam PHP Zend
comments: true
time: 4 mins
---

## Preparing for my PHP 5.3 exam
I’ve got my [Zend](http://www.zend.com) PHP 5.3 certification exam coming up soon. To get ready for the exam, I’ve been doing some preparation web classes through Zend. I’m three days away from completing this prep, ready for when I take the test at the end of March.

Throughout the prep I’ve seen some terrible examples of PHP coding; they’re there for a reason, to catch you out before you take the test! I have to say though, if one of my colleagues had written these examples in our codebase, I’d petition to get them the help they so rightly deserved…

## Let’s take a look at some examples
### What would you expect this to output?

```php
$x = (bool)" "*(int)(string)12E-1;
```
`$x` would be `1`! Yes, 1!

### Again, what would be output here?

```php
$p = "PHP";
$P = "php";
echo ($p < $P) + 2 * ($p > $P) + 3 * ($p == $P)
```

It would output `1`, all down to how it php deals with converting strings + numbers when doing these operations.

### Another one..

`$a` and `$b` are both Strings

```php
echo ($a == $b) * strcmp($a,$b)
```

One of the possible answers was `Not possible to determine without knowing the values of $a and $b`, I foolishly looked at this answer and thought that made sense... but it’s not, it’s actually `0`.

### Now an array based one,

```php
echo count(range(5.0, 3.0, 0.17));
```

Now I initially thought "well surely it’s 0", but it’s not is it, it’s really 12 as range can work backwards too!

### Last one

```php
$a = array(047, 057, 067, 047, 057, 067);
$b = array(47, 57, 67);
echo count(array_diff($a,$b));
```

At first glance you believe it’s either 6 or 3 don’t you, without thinking about it too much..
Well, it’s not either… It’s actually 4, and it’s all down to `047`, `057` and `067` being octal.

### [edit] Another amazing example...

```php
function say($message){
  return 'Hello ' . $message;
}

$execute = 'say';

echo $execute('somebody');
```
What would you expect from this? It actually gives you “Hello somebody”….

### That’s enough examples for now
There were many other questions that completely threw me, either because you just don’t see anyone writing PHP in such a way or because PHP allows things you just don’t expect. Most of them don’t make much sense outside of the context of the classes and so I haven’t included them. If you want to get a certification in PHP, I’d highly recommend this specific set of classes with the examination afterwards; I’ve learnt more than a few things.

One of the things I’ve struggled with is remembering all the quirks about PHP and how ordering of parameters sometimes gets reversed compared to the norm for no particular reason. I’ve never had to worry about octal numbers, binary functions, multi-byte functions or bitwise until now; but now that there’s a possibility that I’ll be asked these questions in a few weeks time I’m having to read up and make sure I know enough in order to get through it. It’ll make my knowledge stronger but as a web developer should I need to memorise [PHP.net](http://php.net)?

### Internet access during the exam?
This question was posed to the instructor, and he explained that Zend (at some point or another) had indeed thought about giving people access to the internet during these exams; as any developer nowadays would either be using PHP.net/google (who doesn’t?) or an IDE that gave them access to autocomplete/help/pre-population of parameters etc. He went on to explain that this examination is done in exam centres throughout the world, and they couldn’t guarantee that each of those exam centres would have a decent internet connection; and so certain people taking the test would be at an advantage compared to others.

I really disagree with this stance but I do at least understand where Zend are coming from. My view is that if someone can look at PHP.net (or any other information source), understand it and come away with the right answer (in a time limit, under exam conditions), then what’s wrong with that? Surely this goes to show the student is able to find the answer to their issue and then use that knowledge to answer the question. We all do it, we all look at PHP.net (or an equivalent) at least once a day while coding; don’t we? These tools don’t teach you how to code, but there as a reference. In the scary wide world, your boss wouldn’t stop you checking a resource for an answer to a question, so why do they still do it in the certification examination?

Have you taken the exam already? How was it for you? What do you think about using resources whilst in an exam like this one? Let me know your thoughts in the comments.

### [EDIT]

I Passed! I’m now a [Zend Certified Engineer](http://www.zend.com/en/yellow-pages/ZEND018999). The exam was tough but worth it in the end. You can find me in the Zend Yellow Pages.