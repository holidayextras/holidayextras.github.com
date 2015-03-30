<div align="center"><img src="http://jekyllrb.com/img/octojekyll.png" width="40%" /></div>

The Hungry Geek Blog - by Holiday Extras
========================

This is a new blog created using Jekyll and GitHub pages.
The Holiday Extras Blog should be simple to use for everyone, it requires no knowledge of anything technical in order to write a blog post.

### Requirements
* You must have a github account

### Creating a post
* Pull down the master branch of holidayextras.github.com `git pull master`
* Create a branch with a name of your choice `git checkout -b blogPost`
* Navigate to the `/_posts` folder
* Create a new markdown file and write your blog post
* Commmit you branch

### Send a blog post for review
Blog posts have to be reviewed in the same way code on our website does, ideally we would like 2 people to review the post. The template for the pull request can be found [here](https://github.com/holidayextras/hx-culture/blob/master/pr-template-blogpost.mkd)

1. From a technical aspect (if required)
2. From an editorial aspect (check for typos)

To get your work reviewed, please put in a Pull Request in the normal way

### Reviewing a blog post
Blog posts reviews will run the same as our day to day work (blog posts should be part of our work anyway).
You can review a PR, comment on the content or editorial parts of the blog post and publish when we have 2 x :+1:'s

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

```ruby
bundle install
```

(If you don't already have ```bundle``` installed, run ```gem install bundle``` first)

#### To Run
```
jekyll serve --config _config.yml,_config_dev.yml
```
The Holiday Extras blog should now be running on your machine at http://127.0.0.1:4000/

##### Running this on another IP address?
Need to view this on an alternative IP address?  Serving up this blog from a VM, say?
Pass in the alternate address:
```
jekyll serve --host 1.2.3.4
```

