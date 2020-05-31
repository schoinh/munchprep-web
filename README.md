<img src="./src/assets/images/Logo.png" alt="MunchPrep Logo" width="250"/>

### http://www.munchprep.net

#### _A meal planning and grocery list app_
#### _By **Na Hyung Choi**_
#### _Latest Update: May 30, 2020_ - Show a confirmation when the user clicks the delete icon
#### _Initial release: October 10, 2019_


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
Mock-ups, a React component diagram, and other design documents are included in [Design Docs](Design-Docs.md). Check them out!

## Future Features
* A more intuitive UI for adding new Menu items
* Individual editing and deleting of shopping list items
* A Settings page where each user can customize the starting day of the week for the Menu and the grocery store sections for the shopping list
* Color themes
* A native iOS app!

## Known Bugs
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

## Deploy Changes

1. Merge to `master`
2. Add the following line to `webpack.config.js` (s first item in `module.exports`):
    ```
    mode: "production",
    ```
3. Build distribution files and deploy to Firebase:
    ```
    $ npm run build
    $ firebase deploy 
    ```

## Support and Contact Details

_Please email Na Hyung with questions and comments. Pull requests are welcome!_

## License

_GNU GPLv3_

Copyright (c) 2020 **_Na Hyung Choi_**
