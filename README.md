# Kikiwow

This project is a demo website for a fictional WoW private server. This game is one of my favorites, and I always admired the websites of some private servers. Therefore, I decided
to make one of my own.

## Installing the application

Before running the application, you must first install it by running the command `npm install`

## Running the application

To execute the application, simply run the command `ng serve`

## Description of the app's architecture

The website is a single page web app build using angular. Each of the routes are separated into their own components. For example, the `/shop` route points to the ShopComponent. Moreover, the components can collectively use services. This app has only one demo service, namely the AuthService, which should be used for authentication related operations like logging in, registering and deleting an account. Currently, the AuthService is used for storing the logged used in order for the `/account` page to display the user's information. The framework used for styling the pages is bootstrap, customized by modifying the color variables in `src/assets/scss/_variables.css` and
`src/styles.scss`.

## Notes

The account page can be accessed by logging in or registering through the relevant pages.
The forum link should point to an external website destined to be the forum of the community, therefore it doesn't route to anything.
The database link should be a page for searching items, quests and anything in the database of the game. It isn't implemented and doesn't route to anything.
