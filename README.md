## HW1: JavaScript Fundamentals

### DUE DATE: Wed, Jan 21 at 11:59 PM

There are 5 directories inside of the **lib/** folder.  Each of these directories contains an exercise.  The README.md file inside of each explains exactly what is expected of you, the test file (the one that ends with .spec.js) is set up to verify that the file is working (or not working) as expected, and the file itself contains a function in the form:

```js
var functionToImplement = function ([param,], param,[..., param]]]) {
  // Your code goes here
};
```

You should not change anything except what is inside that function.

There are several steps to completing this homework:

1. Make sure you are signed up for Github.  You will need to complete this homework in a github repo entitled w3101hws.
2. Create a private repo entitled w3101hws. Add a README.md file to this repo and include a little info about yourself.
3. Make Morris and I a collaborator on this repo:
  * On the repo page on github, click on Settings on the right hand side
  * Click on Collaborators
  * Add morrishopkins and levbrie as collaborators (you may have to create a team first under Create new team)
3. git clone this repo hw1 repo (for future homeworks, once we are collaborators, we can push new homework assignments directly into the repo)
4. move hw1 into the top level directory of your w3101hws repo (so your directory structure should be **w3101hws/hw1**).
5. remove the .git/ directory inside of the hw1 repo.  The .git/ directory is where the git repository lives.  Since you are going to be completing all homeworks inside of your w3101hws repo, you don't want my hw1 repo inside of it.  You want to start each homework fresh and add your own commits. If you're already comfortable with git and commiting, please read over the commit conventions I'd like you to follow and try to start using them in your own commits (if you read through [the commits for the js-course](https://github.com/ColumbiaJS/js-course/commits/master) and the [hw1](https://github.com/ColumbiaJS/hw1/commits/master) repos you'll get a good idea of how I use these conventions).  If you're new to git, don't worry about that for now, just focus on making commits and completing the homework.  Either way, I've included info about git and github in [the wiki's Github Workflow page](https://github.com/ColumbiaJS/js-course/wiki/Github-Workflow).  Please please open an issue on the js-course repo if you have questions about this, and come to office hours if you need extra help.  I know this is a ton of steps.  Getting set up with these tools is an extremely important part of becoming a productive programmer, and [they are worth their weight in gold][#1]).  [But they are also extremely annoying to get set up, and there are a ton of them][#2].
6. `$ npm install -g gulp` - This will install gulp globally (note that you must have npm installed already for this to work).
7. `$ npm install` - run this command from inside the hw1 directory.  This will install all of the packages necessary for running the automated test suite (so that you can check your work as you go). Install hw1's package dependencies (you must be inside of the hw1/ directory).
8. `$ gulp` - this will run the all of the tests for this homework assignment.  As I said, I don't want you to worry about the internals of testing right now.  I just want you to start to feel comfortable with it and to use it as a tool to make sure that you're getting everything right in the assignment.  If you want to run only one set of tests, change the set `describe` to `describe.only` on the test file that you want to run.
9. Once you have completed the assignment, commit your changes.  Make sure to commit by 11:59 PM on Wednesday, January 28.

<a name="1"></a>They're actually worth far far more than their weight in gold - gold mines are pretty much worthless next to Google mines.

<a name="2"></a>It's not that we don't recognize this.  It's that we haven't yet found a better way.  In fact, compared to the way we used to install tools, and compared to how many tools used to be available, we've come a really long way.  But technology evolves extremely rapidly, so there's always a lot of the latest and greatest to learn about.  When you get started with an ecosystem like Node.js, you've got to spend a lot of time learning these tools and figuring out the workflow involved.  Once you've spent some time learning these tools, it's time to decide how much time you actually want to spend working with tools (there are some engineers who do nothing but tooling) and how much time you want to spend productively coding what you want to code.  While you're in school, unfortunately you've really got to do both.
