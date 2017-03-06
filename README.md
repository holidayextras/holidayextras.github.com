<div align="center"><img src="http://jekyllrb.com/img/octojekyll.png" width="40%" /></div>

The Hungry Geek Blog - by Holiday Extras
========================

This is a new blog created using Jekyll and GitHub pages.
The Holiday Extras Blog should be simple to use for everyone, it requires no knowledge of anything technical in order to write a blog post.
The first part of this README breaks down the steps required in order to write and post a blog using git and your terminal. The second part explains how to use Prose.io to help you write and post your blog.

### Requirements
* You must have a github account
* You will need an SSH key in order to upload to github from your Mac (a dev can help set this up and is a one time setup thing)

### Creating a post
* You first need to clone the blog repo to your machine. Open up the terminal and enter `git clone git@github.com:holidayextras/holidayextras.github.com.git`
* Once the process has completed, navigate to that folder `cd holidayextras.github.com`
* Pull down the master branch of holidayextras.github.com `git checkout master` and `git pull`
* Create a branch with a name of your choice `git checkout -b blogPost`
* Navigate to the `/_posts` folder in the Finder on your mac
* Create a new markdown file in this folder and write your blog post, see other files in that folder for examples of how the file should be structured.
* When you are ready to post your blog, first ensure that the post date is correct (it may have been a few days or weeks since you first created the post)
* Head back to your terminal and commit your work `git commit -m "your commit message here"`
* Push your blog to github using the branch name you created earlier `git push blogPost`
* Go [here](https://github.com/holidayextras/holidayextras.github.com/branches) and you should see a branch with your name on it and an option to create pull request, click that and save it, adding a brief description of your post if you want to.

### Send a blog post for review
You can now send people the link for your pull request and ask for a review. Your post should be reviewed with the following in mind:
1. From a technical aspect (if required)
2. From an editorial aspect (check for typos)

### Reviewing a blog post
Blog posts reviews will run the same as our day to day work (blog posts should be part of our work anyway).
You can review a PR, comment on the content or editorial parts of the blog post and publish once it has a :+1:

### Posting your blog post
Now that your blog has been reviewed and you have actioned any comments, you can click the green merge button at the bottom of your pull request. Once you've done this your blog should be live within a few minutes. Don't forget to make sure that the date on your post is up to date when you actually merge!

**TO DO** Create new check box list for blog post reviewing.

### Prose.io
Prose.io is a online WYSIWYG editor for creating, editing and comitting blog posts.
In Holiday Extras we are not using it to simplify markdown, we are using it to allow non technical users to publish blog posts on GitHub without the need to learn how to Pull, Commit and PR a branch.

**CONTROVERSY**
To get prose.io to work you need to give it permission to access your github account (in order to publish posts, which is what we need it for). Out of the box this gives prose.io permission to all repos you have access to, meaning it has access to all public __and private__ repos.
However, we can restrict github access on repos, so those who need to use prose.io wont have access to business critical repos

prose.io should be used ONLY if you are not technically capable of using github command line.
If this is the case, we may restrict your github access to ONLY the HX Blog repo for protection.

### Creating a post with prose.io

* Authorize Prose on github - <https://github.com/login/oauth/authorize?client_id=c602a8bd54b1e774f864&scope=repo>
* Visit <http://prose.io/#holidayextras/holidayextras.github.com> (you should be logged in automatically)
* Click on folder `_posts`
* Now you should see a list of all exisitng blog posts on Hungry Geek
* Click on 'view drafts'
* Click 'new file'
* Write your blog post using [markdown](http://daringfireball.net/projects/markdown/syntax)
* On the right hand side you can preview you post
* Click on 'meta data' on the right hand side and ensure you fill out all details
* Click 'save'
* Write a short decription of your post in the "Describe your Changes" section
* Click 'commit'
This will save the blog post in the drafts section of the website ready for reviewing.

#### Send a blog post for review
* Pester someone to look at your blog post in slack
* Once you have found a victim - Let them know you have created a blog post in drafts and the name of the file

#### Reviewing a blog post in prose.io
* In the drafts section of prose.io
* Read and review the blog post, send any changes back to the author directly (on slack or other medium)
* Once you are happy and it has been reviewed by two different people you can click 'draft to post'
* Write a short decription of your post in the "Describe your Changes" section
* The post will now be live

2. Github

Just like any normal dev work, you can review a PR, comment on the content or editorial parts of the blog post and publish when we have 2 x :+1:'s

--

## Technical
### Jekyll
Jekyll is a static site generator - No more databases, comment moderation, or pesky updates to install — just your content.
It uses HTML files for structure and Markdown files for content.

#### To Install

```
npm i             # Installs all node modules and ruby gems
```

#### To Run

```
npm start         # this will compile, start jekyll and watch for changes
```

The Holiday Extras blog should now be running on your machine at http://localhost:4000/

##### Running this on another IP address?
Need to view this on an alternative IP address? Serving up this blog from a VM, say? Update `_config_dev.yml`
