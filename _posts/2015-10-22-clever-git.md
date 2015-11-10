---
layout: post
title: Clever Git
categories: Git, Version Control
author: duncan_fenning
tags: testing
comments: true
---

At **Holiday Extras** we use [git](https://git-scm.com/) to version control our projects. With an ever growing Web Team, more and more developers, software engineers and architects are contributing to an ever increasing number of projects. This means we need to carefully manage how and when code is deployed from development to production environments. In order for this process to be as efficient and simple as possible, we encourage certain [git best practices](https://github.com/holidayextras/culture/blob/master/git-best-practices.md).

A lot of people know how to use git, or at least they think they do. To use git, there are a few basic commands that get the job done. This doesn't mean however that the job is being done in the best way possible. I will walk through some less know features of git that will make your everyday workflow cleaner and more efficient. It will also help other people identify how and when changes were made to projects. Win-win all round then!

# Rebasing

An everyday workflow looks something like this:

```
git checkout featureBranch
-- some work goes on here --
git add changes
git commit changes
git push changes
```

This would then go to peer review before being merged to master. However, when multiple people are all contributing to the same project, the workflow just isn't that simple. With multiple developers branching off master and multiple merges to master being done every day, branches can easily have forked history. This means a branch has been merged with master since you created your featureBranch, leaving your featureBranch with an out of date master branch.

The obvious way that most people use to get around this problem is with a `git merge`. This updates your featureBranch with the latest master branch. However, every time you merge master, you will add a new commit to your branch history. Doing this once may not seem like it could be a problem but when you are working on a branch for a prolonged period of time, this can occur multiple times, leaving your commit history in a mess! This in turn makes it difficult for other developers to understand the history of your branch.

Instead of doing a `git merge master` into your branch, you can instead do `git rebase master`. This has the same affect as 'merging master' but instead of adding a new commit to your featureBranch, it re-writes the project history by re-writing your commits. This leaves you with a cleaner project history.

** The only caveat of rebasing a branch is that you should only do so on a private branch. If you rebase a public branch, all other collaborators will still be working on the original master branch, therefor Git will think your master branch's history has diverged.**

To improve your commit history even more, you can clean the commits on your featureBranch by using the interactive rebase command: `git rebase -i master`. This gives you many options for every commit you have made on your featureBranch. It lets you squash commits together and reword your commit messages. This can be used to group specific changes into individual commits and squash small commits into other commits, keeping your branch history concise.

![](https://cldup.com/YoZRxwNJra-3000x3000.png)

Check out Git's article on rewriting your branch history [here](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) for even more tips.
Also [Atlassian](https://www.atlassian.com/git/tutorials/merging-vs-rebasing/workflow-walkthrough) have an in depth tutorial about when to merge and when to rebase.

# Interactive staging

If asked to stage a file, most people will do: `git add path/to/file`. This stages all the changes made to that one file.

Other people might do: `git add -p path/to/file`. Even better, you can see hunks of changes which you want to stage for each file, rather than blindly staging a whole file's changes.

However not as many people know of interactive staging: `git add -i`. This opens up more options for your changes. It lets you hand pick what changes you want to stage, see the diff for each file or revert certain file changes, all in once centralised place.

Git also have a great article on how to make the most of [interactive staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging).

Using interactive staging of files, along with rebasing master will leave you and your projects in a happy place.