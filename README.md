## Festival Website
This project is a React-based website for a festival, showcasing various functionalities such as ticket sales, lineup information, and event details.

## Components
---
### Header
The Header component represents the navigation bar at the top of the page. It includes a logo and a mobile-friendly menu toggle. It also includes info about the availability of tickets and a countdown of the days remaining until the beginning of the festival.


### Footer
The Footer component contains social media links and additional navigation links for contacting, accessing the store, and gathering information about the festival. It contains Privacy Policies info that will only be displayed when clicked.

The Footer now includes a link to the RSS page but it doesn´t display correctly, even considering I used a simple, static xml.

## Pages
---
### Home
The Home page displays the main content of the festival website, including featured images and a carousel of event highlights.

### Tickets
The Tickets page offers information about ticket purchases for the festival, it loads information about the tickets from a firebase realtime databse and shows it on a json array. It also has a functionallity that allows the user to filter the ticket by it's type. 

### Camping
The Camping page now features a full CRUD. It uses Firebase RealtimeDatabase to store users and trips. Only registered users can add, modify or delete trips, thats why a login form is displayed every time one wants to performe said actions. The Login Form compares the information stored in Firebase and if a registered user and password is inserted, a Trip Form is displayed allowing the user to post it´s trip, which will be stored in the database and displayed next time the page is refreshed. The same happens when one wants to modify or delete a trip.

The register option allows for new users to be stored in the database.

It is advised to register your own user to test the crud.

!!IMPORTANT: use an alias and a fake password, refrain from using a password you use every day.

Username and password already registered in the database that can be used for testing: luis, luis123

## JSON Array
---
The `carrousel.js` file contains an array of objects representing images and descriptions for the carousel on the Home page.

## FIREBASE HOSTING

The page  can be visited following these links:

- [Firebase](https://react-253c4.web.app/)(https://react-253c4.firebaseapp.com/)


## Dependencies
---
This project relies on the following libraries:

- `react`: A JavaScript library for building user interfaces.
- `react-router-dom`: Provides DOM bindings for React Router.
- `@fortawesome/react-fontawesome`: Allows the use of FontAwesome icons in React applications.
- `firebase`: Provides functionality for Firebase services.

## Credits
---
This project was created by me for practice with React and serves as a school project. Inspiration for this project can be found further bellow.

## How to Run
---
To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/LHdezLP/REACT_project.git`
2. Navigate to the project directory: `cd your-repository`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Inspiration
---
- [Resurrection Fest](https://www.resurrectionfest.es/)
- [Hellfest](https://hellfest.fr/)
- [Wacken Open Air](https://www.wacken.com/en/)
- [BID Repository Template](https://github.com/EL-BID/Plantilla-de-repositorio/blob/master/README.md?plain=1)


