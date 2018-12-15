## Clicky Game

For this assignment, you'll create a memory game with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

Instructions

Create a new React application using Create React App.
The application should render different images (of your choice) to the screen. Each image should listen for click events.
The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.
Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
Once the user's score is reset after an incorrect guess, the game should restart.
When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages.

This application is a memory game essentially.  The user clicks on images and tries not to click on the same picture, ever, and see how far they can go. If the user clicks on the same picture, the score resets and the game logs their current score before resetting to zero.

Technologies used: React, babel.