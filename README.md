<img src="./src/assets/images/Logo.png" alt="MunchPrep Logo" width="250"/>

### http://www.munchprep.net

#### _A meal planning and grocery list app - October 10, 2019_

#### _By **Na Hyung Choi**_

## Description
MunchPrep allows you to plan out a week's worth of meals and make a grocery shopping list in one convenient app.

* Users sign in with Google.
* Menu tab includes spots for 3 meals for each day of the week, plus a spot for your snacks.
* Shopping list is categorized by grocery store sections to make your shopping more efficient.
* An "X" button on each tab clears out your menu items or shopping list for a brand new blank page.
* A "Clean Up" button on the shopping list tab clears away the shopping items that have been checked off.

Currently, only default settings are available:
* Each week begins with Sunday.
* The grocery store sections are Produce, Proteins, Other Foods, and Non-Foods.

## Design Documents
Mock-ups, a React component diagram, and other design documents are included in `Design-Docs.md`.

## Future Features
* Individual editing and deleting of shopping list items
* A Settings page where each user can customize the starting day of the week for the Menu and the grocery store sections for the shopping list
* Color themes
* A native iOS app!

## Known Bugs
* State changes start malfunctioning when the number of checked-off grocery items exceeds 25. Temporary workaround: refresh the page.
* Inline editing stops working if user saves a blank meal by erasing a field completely and hitting enter or clicking outside of the text input box. Temporary workaround: refresh the page.

## Technologies Used
* JavaScript
* React / Redux
* React Inline Edit Kit
* Firebase (Cloud Firestore, Authentication, Hosting)
* Jest
* Bootstrap
* webpack
* npm

## Setup

1. Clone this repository:
    ```
    $ git clone https://github.com/schoinh/munchprep-web.git
    ```
2. Install dependencies:
    ```
    $ npm install
    ```
3. Run development server:
    ```
    $ npm start
    ```
4. Navigate in your browser (Chrome recommended) to http://localhost:8080

## Support and contact details

_Please email Na Hyung with questions and comments. Pull requests are welcome!_

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi_**
