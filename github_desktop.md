Getting Set Up With Github Desktop
========================

### Github Desktop Initial Setup

1. Go to [Github Desktop](https://desktop.github.com/)

2. Download Github Desktop, then install it - the process will vary from browser to browser and your own personal settings. This is an example from Firefox, click on arrow and file as shown:
![downloading]({{ site.baseurl }}/assets/img/github_desktop/downloading.png)

3. You'll probably come across the following step like you do with any application you download. For this application, if required, agree to *open* it and *Move to Applications Folder* (this means your download folder is tidied up for you):
![open]({{ site.baseurl }}/assets/img/github_desktop/open.png)
![move]({{ site.baseurl }}/assets/img/github_desktop/move.png)

4. Once that's installed, locate the programme and launch it. The first time you do, there is a tutorial should you wish to have a look around - but we’ll get to the features of the desktop app later.

5. Upon launch you should see this screen:
![welcome]({{ site.baseurl }}/assets/img/github_desktop/welcome.png)

   Hit *Continue* and *Login* with your HX email address and github password:
   ![login]({{ site.baseurl }}/assets/img/github_desktop/login.png)

   You are likely to have 2 step authentication set up - once you've received it, put in your code! 

6. Confirm it’s you and don’t worry about the other steps here, just hit ‘continue’ & ‘continue’ again
![continue]({{ site.baseurl }}/assets/img/github_desktop/continue.png)

7. Now you need to connect to HX! Click on the plus and select the clone tab:
![cloning]({{ site.baseurl }}/assets/img/github_desktop/cloning.png)

8. Type in holidayextras.github.com and add that repository
![hx_github]({{ site.baseurl }}/assets/img/github_desktop/hx_github.png)

9. Click New Folder (bottom left):
![new_folder]({{ site.baseurl }}/assets/img/github_desktop/new_folder.png)

10. Call it Git:
![git_folder]({{ site.baseurl }}/assets/img/github_desktop/git_folder.png)

11. Click *Create*, then *Clone*:
![clone]({{ site.baseurl }}/assets/img/github_desktop/clone.png)

12. You now have the Blog files ready to use and your screen will look something like this:
![cloned]({{ site.baseurl }}/assets/img/github_desktop/cloned.png)

### Creating A Branch To Work From

1. Click on the Repo you want to create a branch from. For the blog this will be holidayextras.github.com. Click on the following icon and name the branch, using dashes to separate words - for example *my-next-blog*
![branch]({{ site.baseurl }}/assets/img/github_desktop/branch.png)

   Now your branch has been created, you can start to change existing files or create new ones.

### Adding Yourself To The List Of Users

The first time you blog, you'll need to add yourself to the list of users. To do this, you'll need to edit the *members* file. Before you do this, you'll need to set up a profile picture in Gravatar.

1. Go to [Gravatar](https://signup.wordpress.com/signup/?ref=oauth2&oauth2_redirect=98c69c872dcb16768f1105372220b8b1%40https%3A%2F%2Fpublic-api.wordpress.com%2Foauth2%2Fauthorize%2F%3Fclient_id%3D1854%26response_type%3Dcode%26blog_id%3D0%26state%3Df469ccc769c69e0d78b63b1d802da8be3c597377f9e4ed70474ba681aa4c07ae%26redirect_uri%3Dhttps%253A%252F%252Fen.gravatar.com%252Fconnect%252F%253Faction%253Drequest_access_token%26jetpack-code%26jetpack-user-id%3D0%26action%3Doauth2-login&wpcom_connect=1). Input your email address (your user name should pre-populate for you). Select a password.
Click ‘sign-up’:
![signup_gravatar]({{ site.baseurl }}/assets/img/github_desktop/signup_gravatar.png)

2. Go to your email (you may need to check your SPAM). Activate your account. Then, sign into Gravatar and you should see this page:
![logged_in_gravatar]({{ site.baseurl }}/assets/img/github_desktop/logged_in_gravatar.png)

3. Click on Add a new image, upload a new image. Crop as required. Rate it appropriately!!!! You should return to this page with you image now showing:
![new_image_gravatar]({{ site.baseurl }}/assets/img/github_desktop/new_image_gravatar.png)

4. Right click on the top image of yourself and select ‘inspect’. As highlighted in the example, you should see a long alphanumeric sequence. Copy this unique number and make a note of it:
![inspect_element]({{ site.baseurl }}/assets/img/github_desktop/inspect_element.png)

Next, you'll need to use a text editor to make changes to files and to write new blogs. There's loads out there, but a couple of popular ones are [sublime text](https://www.sublimetext.com/3) or [Atom](https://atom.io/).

5. Download your chosen text editor and navigate to *open*. Find your *Home Folder* (this should be your name):
![open_file_text_editor]({{ site.baseurl }}/assets/img/github_desktop/open_file_text_editor.png)

6. Open *git*, navigating to data>members and open this file. Add yourself in the right place alphabetically, as per the following example - using your Gravatar unique alphanumeric code you made a note of earlier:
![members]({{ site.baseurl }}/assets/img/github_desktop/members.png)

   Save this. (The only reason you would need to touch this file again would be if any of your information changes). This should be added on Github Desktop to the list of files to be added to your Pull Request for review.

   If you go back to your Github Desktop, you should now see that you have new uncommitted changes to commit on your branch (it should automatically update):
![new_uncommited_changes]({{ site.baseurl }}/assets/img/github_desktop/new_uncommited_changes.png)

### Creating A New Blog Post

1. In your text editor, navigate to holidayextras.github.com>posts and create a *New File* (by either right clicking on *posts* or going to the Toolbar and selecting *New File*)

2. Create your new post using the following information first:

	> **layout:** post
	> **title:** _Your Blog Post Title_
	> **categories:** _your blog post category - e.g. *agile*, *tech_debt*_
	> **author:** _your author name - as you listed it earlier on the members doc, e.g. victoria_feaver_
	> **tags:** _any user tags, e.g. *agile*, *scrum* *tech_debt*
	> **comments:** true
	> **excerpt:** _a 1 line summary to sell your blog, e.g. *This excellent blog looks at the excellent work I've done on excelling*_
	> ---

3. Write your new blog post!

4. Make sure your blog is in Markdown. [What is Markdown?](https://en.wikipedia.org/wiki/Markdown). This really useful [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#blockquotes) will help you to enable the right sections to have:

> ** Headers
> *Bold Text*
> Sections _called out_ out like this one!

5. If you want to check what your finished blog will look like with all the markdown, you can use [this site](http://dillinger.io/). Delete all the text on the left hand side, copy and paste yours in and then it’ll show you on the right hand side what it will look like

This is how it looks in my text editor:
![markdown_text_editor]({{ site.baseurl }}/assets/img/github_desktop/markdown_text_editor.png)

This is how it displays in Dillinger
![dillinger]({{ site.baseurl }}/assets/img/github_desktop/dillinger.png)

## Uploading A Pull Request

1. Make sure you are in the *Uncommitted Changes* section on Github Desktop, not the *History* tab.

2. Firstly, you need to commit your changes to your branch. To do this, complete the
> Summary _XXX-blog_
> Description _Uploading first draft of XXX blog_
   Then click the *Commit to _branch name_* button

3. Then, click the *Publish* button (found towards the top right-hand corner). This will push your branch, with your commits up to the holidayextras.github.com repo.

4. Now, head over to [https://github.com/holidayextras/holidayextras.github.com](https://github.com/holidayextras/holidayextras.github.com). You may need to refresh the page. Click on *Compare and pull request*
![compare_and_pr.png]({{ site.baseurl }}/assets/img/github_desktop/compare_and_pr.png)

5. Complete the title and the description and click create PR 
![open_pr.png]({{ site.baseurl }}/assets/img/github_desktop/open_pr.png)

   Tick the *Author* tick boxes

6. Copy the URL and share on slack and get some reviewers! See the [README](https://github.com/holidayextras/holidayextras.github.com) for more information.

## Creating Another Post

The next time you want to create a new blog post, it's as simple as repeating the instructions from 
> ## Creating A New Blog Post


