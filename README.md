<div align="center"><img src="http://jekyllrb.com/img/octojekyll.png" width="40%" /></div>

The Tech Team @ Holiday Extras Blog
========================

This is a new blog created using Jekyll and GitHub pages.
The Holiday Extras Blog should be simple to use for everyone, it only requires a small amount of technical knowledge.
The first part of this README breaks down the steps required in order to write and post a blog using git and your terminal. The second part explains how to use Prose.io to help you write and post your blog.

### Requirements
* You must have a github account
* You will need an SSH key in order to upload to github from your Mac (a dev can help set this up and is a one time setup thing)

### Creating a post
(If you're not comfortable using your terminal, go down to the *Using GitHub Desktop* section)
* You first need to clone the blog repo to your machine. Open up the terminal and enter `git clone git@github.com:holidayextras/holidayextras.github.com.git`
* Once the process has completed, navigate to that folder `cd holidayextras.github.com`
* Pull down the master branch of holidayextras.github.com `git checkout master` and `git pull`
* Create a branch with a name of your choice `git checkout -b blogPost`
* Navigate to the `/_posts` folder in the Finder on your mac
* Create a new markdown file in this folder and write your blog post, see other files in that folder for examples of how the file should be structured.
* When you are ready to post your blog, first ensure that the post date is correct (it may have been a few days or weeks since you first created the post)
* Head back to your terminal and add your changes `git add -p` - you'll need to accept the changes by hitting 'y' assuming the changes you see are what you expect.
* Then commit your work `git commit -m "your commit message here"`
* Push your blog to github using the branch name you created earlier `git push blogPost`
* Go [here](https://github.com/holidayextras/holidayextras.github.com/branches) and you should see a branch with your name on it and an option to create pull request, click that and save it, adding a brief description of your post if you want to.

### Send a blog post for review
You can now send people the link for your pull request and ask for a review. Your post should be reviewed with the following in mind:
1. From a technical aspect (if required)
2. From an editorial aspect (check for typos)
Let's not be too critical when reviewing someone's blog post though. Highlight any glaring grammatical errors, but don't worry too much about restructuring sentences. As long as it flows well and reads well, we should be happy with it.

### Reviewing a blog post
Blog posts reviews will run the same as our day to day work (blog posts should be part of our work anyway).
You can review a PR, comment on the content or editorial parts of the blog post and publish once it has a :+1:

### Posting your blog post
Now that your blog has been reviewed and you have actioned any comments, you can click the green merge button at the bottom of your pull request. Once you've done this your blog should be live within a few minutes. Don't forget to make sure that the date on your post is up to date when you actually merge!

**TO DO** Create new check box list for blog post reviewing.

### Using GitHub Desktop

If you're not confident using your terminal, you can use GitHub Desktop. The set up process will take a little while, but once you're up and running it's relavitvely straight forward to add new Blogs. Here's the [step-by-step](https://github.com/holidayextras/holidayextras.github.com/blob/master/github_desktop.md) process for getting set up.

### Still not confident?

If you're not confident using either your terminal or Github Desktop, drop a note in slack channel #guild-tech-brand and one of the team with the tech brand stretch will help you out.

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
