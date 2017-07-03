Getting Set Up With Github Desktop
========================

If at any stage you get stuck, drop a note in slack channel #guild-tech-brand and one of the tech brand champions will help you out.

### Github Desktop Initial Setup

1. Go to [Github Desktop](https://desktop.github.com/)

2. Download Github Desktop, then install it - the installation process will vary from browser to browser and your own personal settings, so follow the process you normally do.

3. You'll probably come across the following step like you do with most other applications you download. For this application, if required, agree to **open** it and **Move to Applications Folder** (this means your download folder is tidied up for you and the files for Github Desktop are moved to you _Applications_ folder).

4. Once that's installed, locate the programme and launch it. The first time you do, there is a tutorial should you wish to have a look around - but we’ll get to the features of the desktop app later.

5. Upon launch you should see this screen:
![welcome]({{ site.baseurl }}/assets/img/github_desktop/welcome.png)

   Hit **Continue** and login with your HX email address and github password:
   ![login]({{ site.baseurl }}/assets/img/github_desktop/login.png)

   You are likely to have 2 step authentication set up - once you've received it, put in your code! 

6. Confirm it’s you and don’t worry about the other steps here, just hit **continue** & **continue** again:
![continue]({{ site.baseurl }}/assets/img/github_desktop/continue.png)

7. Now you need to connect to HX! Click on the large **+** sign and select the **clone** tab:
![cloning]({{ site.baseurl }}/assets/img/github_desktop/cloning.png)

8. Type in holidayextras.github.com and clone that repository:
![hx_github]({{ site.baseurl }}/assets/img/github_desktop/hx_github.png)

9. You'll now be asked where on your local machine you want to save the files. If you already have a _git_ folder save it there, otherwise, click **New Folder** (bottom left):
![new_folder]({{ site.baseurl }}/assets/img/github_desktop/new_folder.png)

10. Call it _Git_:
![git_folder]({{ site.baseurl }}/assets/img/github_desktop/git_folder.png)

11. Click **Create**, then **Clone**:
![clone]({{ site.baseurl }}/assets/img/github_desktop/clone.png)

12. You've now cloned the files from _holidayextras.github.com_ and this should appear in your list of repos on the left-hand side on Github Desktop. You should be on *master* and see a list of recently merged pull requests. You're now ready to move on to the next step.

### Creating A Branch To Work From

1. Click on the Repo you want to create a branch from. For the blog this will be holidayextras.github.com. Click on the following icon and name the branch, using dashes to separate words - for example *my-next-blog*
![branch]({{ site.baseurl }}/assets/img/github_desktop/branch.png)

   Now your branch has been created, you can start to change existing files or create new ones.

### Adding Yourself To The List Of Users

The first time you blog, you'll need to add yourself to the list of users. To do this, you'll need to edit the *members* file. Before you do this, you'll need to set up a profile picture in Gravatar.

1. Go to [Gravatar](https://signup.wordpress.com/signup/?ref=oauth2&oauth2_redirect=98c69c872dcb16768f1105372220b8b1%40https%3A%2F%2Fpublic-api.wordpress.com%2Foauth2%2Fauthorize%2F%3Fclient_id%3D1854%26response_type%3Dcode%26blog_id%3D0%26state%3Df469ccc769c69e0d78b63b1d802da8be3c597377f9e4ed70474ba681aa4c07ae%26redirect_uri%3Dhttps%253A%252F%252Fen.gravatar.com%252Fconnect%252F%253Faction%253Drequest_access_token%26jetpack-code%26jetpack-user-id%3D0%26action%3Doauth2-login&wpcom_connect=1). Input your email address (your user name should pre-populate for you). Select a password.
Click **sign-up**

2. Go to your email (you may need to check your SPAM). Activate your account. Then, sign into Gravatar and click on **Add a new image** and upload a new image. Crop as required and rate it appropriately!!!! You should then return to this page with your image now showing:
![new_image_gravatar]({{ site.baseurl }}/assets/img/github_desktop/new_image_gravatar.png)

3. Right click on the top image of yourself and select **inspect**. As highlighted in the example, you should see a long alphanumeric sequence. Copy this unique number and paste it somewhere safe:
![inspect_element]({{ site.baseurl }}/assets/img/github_desktop/inspect_element.png)

   Next, you'll need to use a text editor to make changes to files and to write new blogs. There's loads out there, but a couple of popular ones are [sublime text](https://www.sublimetext.com/3) or [Atom](https://atom.io/).

4. Download your chosen text editor and navigate to **open**. Find your _Home Folder_ (this should be your name):
![open_file_text_editor]({{ site.baseurl }}/assets/img/github_desktop/open_file_text_editor.png)

5. Open **git**, navigating to data>members and open this file. Add yourself in the right place alphabetically, as per the following example - using your Gravatar unique alphanumeric code you made a note of earlier:
![members]({{ site.baseurl }}/assets/img/github_desktop/members.png)

   Save this. (The only reason you would need to touch this file again would be if any of your information changes). This should be added on Github Desktop to the list of files changed to be added to your Pull Request for review - if you go back to your Github Desktop, you should now see that you have new uncommitted changes to commit on your branch (it should automatically update):
![new_uncommited_changes]({{ site.baseurl }}/assets/img/github_desktop/new_uncommited_changes.png)

### Creating A New Blog Post

1. In your text editor, navigate to holidayextras.github.com>posts and create a **New File** (by going to the Toolbar for your text editor and selecting **New File**).

2. Create your new post using the following information first: **_layout_** (for a Blog post this will be **post**), **_title_** (Your Blog Post Title), **_categories_** (your blog post category - e.g. **agile**, **tech_debt**), **_author_** (your author name - as you listed it earlier on the members doc, e.g. _victoria_feaver_), **_tags_** (any useful tags, e.g. **agile**, **scrum**, **tech_debt**), **_comments_** (this needs to say **true**), **_excerpt_** (a one line summary to sell your blog, e.g. _This excellent blog looks at the excellent work I've done on excelling_) this is topped and tailed by 3 lines (---)

   It, therefore, looks something like this:
![new_blog_header.png]({{ site.baseurl }}/assets/img/github_desktop/new_blog_header.png)

3. Write your new blog post!

4. Make sure your blog is in Markdown. [What is Markdown?](https://en.wikipedia.org/wiki/Markdown). This really useful [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#blockquotes) will help make sure the right sections have:

`### Headers - as shown below`

### Headers

`**Bold Text** - as shown below`

**Bold Text**

`> Sections _called out_ out like this one! - as shown below`

> Sections _called out_ out like this one!

5. If you want to check what your finished blog will look like in markdown, you can use [dillinger.io](http://dillinger.io/). Delete all the text on the left-hand side, copy yours in your text editor, paste it in and then it’ll show you on the right-hand side what it will look like.

This is how it looks in my text editor:
![markdown_text_editor]({{ site.baseurl }}/assets/img/github_desktop/markdown_text_editor.png)

This is how it displays in dillinger.io
![dillinger]({{ site.baseurl }}/assets/img/github_desktop/dillinger.png)

### Uploading A Pull Request

1. Once you're ready for others to look at your work, make sure you are in the *Uncommitted Changes* section on Github Desktop, not the *History* tab.

2. Firstly, you need to commit your changes to your branch. To do this, complete both the

	**Summary** "XXX-blog"_
	&
	**Description** "Uploading first draft of XXX blog"_

Then click the **Commit to "branch name"** button
![commit.png]({{ site.baseurl }}/assets/img/github_desktop/commit.png)

3. Then, click the **Publish** button (found towards the top right-hand corner). This will push your branch, with your commits up to the holidayextras.github.com repo. (Once you've published you're PR for the first time to Github, the publish button will become a _Sync_ button - you'll need this if you push up further changes to the blog, following feedback, for example.)

4. Now, head over to [https://github.com/holidayextras/holidayextras.github.com](https://github.com/holidayextras/holidayextras.github.com). You may need to refresh the page. Click on **Compare and pull request**:
![compare_and_pr.png]({{ site.baseurl }}/assets/img/github_desktop/compare_and_pr.png)

   This will allow you to create a Pull Request.

5. Complete the blog title and the blog description and click **create PR**: 
![open_pr.png]({{ site.baseurl }}/assets/img/github_desktop/open_pr.png)

   Tick the **Author** tick boxes if you're happy you've checked for grammatical errors, spelling errors and all information (technical or otherwise) is correct to your knowledge.

   Copy the URL and share on slack and get some reviewers! See the [README](https://github.com/holidayextras/holidayextras.github.com) for more information on how to send a blog post for review and getting it published.

6. If you have feedback to address, make sure you are in the right branch on Github Desktop. Open the file again in your chosen text editor and make the changes. Click save and head back over to Github Desktop. You should see new uncommitted changes to push up. Repeat the process for committing to the branch and click **Sync**. Head back over to your PR in Github and refresh and you should see your _commit_ has been pushed up and your _files changed_ updated.

### Creating Another Post

The next time you want to create a new blog post, it's as simple as repeating the instructions above for:
> ### Creating A New Blog Post


