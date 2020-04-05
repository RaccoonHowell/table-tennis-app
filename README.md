## Table Tennis Pair Generator

Developed as my final DevelopMe_ technical challenge, the app generates a table tennis tournament structure from a list of names provided by the user.

Technologies and skills used: React, JSX, Javascript, HTML, CSS, Git, Wireframing.

You can view the finished app by visiting here: https://raccoonhowell.github.io/table-tennis-app/

### Local setup

Requirements - NPM

run git clone to clone this git repository:

```git@github.com:RaccoonHowell/table-tennis-app.git```


in the project directory run:

`npm install` to install all dependencies

`npm start` to run the app locally

### The brief

The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.

It's up to you how you implement this, with JavaScript, React, or PHP, as a web page, or as an app.

Some optional advanced features might include:

- ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs

- continued rounds created until the final (last 2 players who have won all matches to date play each other, one marked as the winner)

### Planning and the build

I did some sketching when planning the basic layout which I then made into a wireframe -

https://github.com/RaccoonHowell/table-tennis-app/blob/master/wireframe.pdf

I decided to version manage the project with Git as I found it to be very useful throughout the course.

Having learnt React towards the end of the course I decided to use it to create my app with the possibility of introducing Redux once I had the MVP working and styled.

As my app has only one page I did the styling using CSS and it wasn't too time consuming but in the future or if I were to have done things differently I'd probably implement Gulp and SASS.

Initially I thought I would start with the following components:

- AddPlayer - to add players to an array using a form
- Reset - to reset the page to it's intial state
- Pair - to generate pairings from the players array
- Shuffle - to shuffle the pairings

However upon starting I created a Header, Footer and AddPlayer component. I decided to get all of my logic for the basic requirements of the task working in the AddPlayer component first and hoped to split it into separate components once it was up and running and the minimum styling had been applied.

### Additional features

- I would like to split the AddPlayer component into smaller component files based on the role of each part of the code and use Redux to do this. I think this would make the code more readable and using Redux would mean I could store state globally and pass information between components more easily.

- I'd try to reduce the number of ternaries within the AddPlayer render section to make the code a bit cleaner.

- Having focussed on getting the MVP working before moving onto the advanced features I ran out of time. I'd like to set up a back end using Laravel to store user information and scores.

- I used dev tools and my own phone to test how the app looks on mobiles and added in a mobile.css file. I used a max-width media query and made some changes to the layout and font size. Given more time I would test my app on different mobiles and tablets. I'd then adjust/add in more media queries as needed.

- The user can still enter just a space in the input field and the AddPlayer button can be pressed adding spaces as a player name so I would find a way to fix this.