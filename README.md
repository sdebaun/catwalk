# CATWALK

*"Walk your cat from the comfort of your own couch!"*

A sample project for my portfolio.

#### The Request

I was recently asked to build a sample project as part of an interview.  I thought it would be worth publishing.

> Could you scaffold & build an Angular app like Heroku’s Scheduler (I’m sure you know what this is, but you should still read below).
> 
> Heroku’s Scheduler is a small web app that lets you add jobs.  It shows you your current jobs which includes the name of the job, the amount of dynos, the frequency (hourly, daily, etc.), last time the job ran, and the next date the job is due to run.
> 
> Below that, each job has an edit & remove button.  When you click edit, all of the fields become inputs to change the values.
> 
> At the very bottom of all of your jobs is an “Add new job” button, when you click it the button disappears and a new incomplete form is appended.  When you fill in the inputs and hit save, the form is appended and appears just how every other one does, when you click cancel the form disappears and the button reappears.
> 
> Recreate this app using AngularJS.  You don’t need to plugin a backend (just send HTTP requests to static .json files), but it’s a plus if you use localStorage to store the data so that it doesn’t completely disappear on page reload.  We are looking to see how you tackle this problem with code.  Please use directives & filters where possible, and make it as interactive and single page-appish as possible.

# Results

I spent a little extra time on this because I wanted to demonstrate not just my coding skills, but my overall approach to development and design.

* [Live app on heroku.](https://catwalk-production.herokuapp.com)

* [Mockups.](https://drive.google.com/folderview?id=0Bx3L_Mlj-HIYQ3UtWC1WS1pMU2M&usp=sharing)  I took the written requirements and built out mockups for the scheduler workflow described (except I used cats).

* [Story board.](https://trello.com/b/w36QBWip/catwalk-stories)  I created a story board in trello, created a bunch of cards, and started building features.  Each card has a general story description, plus a checklist with the initial outline of the UAT that proves the story.

* [Git repo.](https://github.com/sdebaun/catwalk)  I set up a public git repo, and used master/develop/feature-X branches to track my work.  Each feature-x branch corresponds to a single card in the story board.  There's only been one push to master, look in the develop and feature branches to see work.

* [Full e2e test coverage.](https://github.com/sdebaun/catwalk/tree/master/e2e)  I started development on each card by creating an e2e test that proves the feature, based on the card's UAT.  You can find them all in the /e2e directory in the repo.

* Pipeline.  I created catwalk-test and catwalk-production hosts and set them up for automatic deployment from the develop and master branches respectively.  Right now they're identical; master and develop branches are equivalent, and there's no environment-specific config (see below).

## Process Notes

### Mockup fidelity

In this case, I didn't spend too much time trying to make the mockups pretty, nor did I try to reproduce them exactly in the app (e.g. font faces, precise spacing).  If there was a professional graphic designer who made high-fidelity mockups, then the images in the cards would've been used as an absolute reference rather than just guidelines.

### Storyboard & Features

In a real project, that storyboard would be used not just by me but by other stakeholders in the project.  The cards would get a lot more development as everyone hammered out what they really wanted out of the features.  UATs would be revised and detailed, mockups would be tweaked, etc.

Also, *I completely skipped estimates*.  While they're arguably one of the most important parts of an agile process, they're primarily used in collaborative feature prioritization, which there was none of.

### Time Tracking

I like to use Toggl to track my work by feature number; I didn't this time.  I probably spent:

* less than an hour of setup (heroku, git, trello, yeoman, deployment)
* ~2-3 hours of mockups, design, storyboarding.  Writing the stories, putting them into Trello, playing with Illustrator and downloading a picture of a cat.
* ~3-4 hours of actual feature development.

## Design Philosophy

I think this code (and the commit history) is a great demonstration of my development approach.  With good tests, I can focus on delivering features, and refactor as needed to keep code organized and maintainable.  A couple of examples from this project:

#### /app/components/catwalk/catwalk.fields.directive.[js|html]
When I started feature 3 (adding your first catwalk), I just wrote the form directly into the dash page.  When I got to feature 10 (edit catwalk), it was obvious that the fields that were the same as what was used in feature 3.  So I extracted the fields into a directive and refactored the code for feature 3 to use the new directive.  e2e tests: dare to refactor!

This illustrates a general principle I try to follow: avoid premature organization, and plan for future organization.  I know from experience that form fields are commonly reused like this, and I kept that in mind when I initially wrote the form.  But I didn't extract the fields into their own component until there was a practical need (DRY).

#### /app/dash/dash.route.js

This is where i define the controller logic for the dashboard.  Because I tend towards very thin controllers, I usually just inline the controller function in the state definition.  This controller has gradually grown over the course of several stories -- but I still haven't found a compelling reason to refactor it.  There are tons of potential features that would justify refactoring:

* if we had a second page in the app, it would need a load spinner, and it would make sense to extract the $loaded behavior from the dash controller into something else.  Into a new loadspinner directive?  Into a service used by said directive?  Several options there.
* if we had another place in the app that let you add new catwalks, that would involve extracting the newCatwalk-related stuff from the js and the html into a new directive.
* if we manipulated catwalk records anywhere else, it would make sense to extract the firebase-specific calls from the controller and expose them as methods in a more generic Catwalk service.

Still, at this point, I don't feel like extracting any of that behavior makes sense.  Splitting it out into separate components just means more files to browse through. :)

## Tech Notes

### Scaffolding

The project was scaffolded with a yeoman generator, gulp-angular.  I cleaned out all the unused code right before I pushed to production (yay for tests!), and I believe everything in the /app folder is specific to the project.

### Unit Tests

There is good e2e test coverage, but there are no unit tests.  I think unit tests start to bring real value when you have components that you want to be able to test outside the e2e suite.  This project is small enough that the e2e tests are exercising everything fairly quickly.  I would start using unit tests when the app had functionality that was encapsulated into components that were cumbersome to test through an e2e test, and/or would benefit from a well-defined and comprehensively tested internal interface.

### CI

No, I didn't set up any CI.  At the time of writing this, I use CircleCI for my other projects.  I just didn't want to spend the time plugging into CircleCI for what would end up being a single test run.

### Backend

I looked into a couple of localstorage modules for angular.  It ended up being easier for me to just plug the app into a Firebase.  The app doesn't distinguish between users, it's a shared data source.  Which also means that any changes automatically update all clients (try it out with different browser tabs).

### Environments

Although I have production and test hosts on heroku, the only difference between them is which branches they auto-deploy from.  They ought to have separate configs to specify prod/staging/test/dev firebases, etc.

### Build & Serve

The generator builds to a /dist directory.  It comes with browsersync (which serves the dev code) but thats it.  I tossed in a five-line express server to serve /dist in production.  There are better ways to do this (e.g. pushing /dist only to a static host), but it was easy to set up.

## Miscellaneous

There are tons of things that aren't included: auth, data security, more animations, etc. etc.  There are some dubious UX decisions I made that should probably be revisited.  The standard reply to a stakeholder is: let's develop a story for that and put it in the queue! ;)