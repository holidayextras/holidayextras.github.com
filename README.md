<div align="center"><img src="http://jekyllrb.com/img/octojekyll.png" width="40%" /></div>

The Tech Team @ Holiday Extras Blog
========================

**Deprecated. The tech blog is now hosted on [Medium](http://tech.holidayextras.co.uk/). For more information, come chat to us in #guild-tech-brand on Slack.**

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

### Blog Post Settings

In our blog posts, we utilise post variables known as [Front Matter](http://jekyllrb.com/docs/frontmatter/) in Jekyll.
These control the layout of the page, pulls in the gravatar of the author and other customised options.
Below is a list of supported variables, what they do and how you can use them to improve your blog post.

| Variable  | Description                                                                                                                                                                                                                                                                                                  | Required |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| layout    | This controls the layout of the blog post. Currently we support the following post layouts: <li>`post`: Standard layout for out blog posts</li><li> `competition`: Similar layout to post but contains all the legal competition terms at the end of the post.</li><li> `profile`: This is used for the speaker profile pages</li> | Yes      |
| title     | Title of your blog post                                                                                                                                                                                                                                                                                      | Yes      |
| author    | Author of the blog post. For this to pick up your twitter handle and gravatar, this will need to match your entry in `_data/members`. For example: `forname_surname`                                                                                                                                         | Yes      |
| tags      | One or multiple tags can be applied to the post. Although currently this only highlights topics the post covers, we are looking to create links between tags                                                                                                                                                 | No       |
| comments  | By default, comments are automatically enabled on all posts. Setting comments to `false` will override this setting and the comments section at the end of the post will not appear                                                                                                                          | No       |
| excerpt   | This should contain a brief excerpt of the blog post. This will be used in twitter links and on the blog post list on the index page of the blog site                                                                                                                                                        | Yes      |
| image     | By setting an image link, that image will appear in the twitter summary cards when the blog post is tweeted out. Images used need to match what twitter expects (see https://dev.twitter.com/cards/types/summary for details). If no image is set, the author gravatar image will be used instead.           | No       |
| image_alt | This is used for the alt text of the twitter image, used for accessibility purposes or if the image fails to load for the client. This needs to be a maximum of 420 characters. If this is not set, the post title and author will be used instead.                                                          | No       |
| hero      | Want a beatiful big picture at the top of your post, add an image to assets and add it here.                                                                                                                                                                   | No       |
| promoted  | [boolean] - If you have a hero image and you want you post promoted on the homepage, setting this to true will bring the hero image through.
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
