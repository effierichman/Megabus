# Megabus

# Team name:  Snowplows
![alt text](https://image.shutterstock.com/image-vector/snowman-hat-scarf-isolated-on-260nw-1193297350.jpg)


## Project Description

A redesigned megabus app that highlights a help funtion so the user can  reach out to customer support, track my bus, and get help in an easy manner. The user will be prompted to book a trip on the home back with a user friendly input propt

## Wireframes

GENERAL MVP - updated workflow 

![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581712500/Untitled_Diagram_b8be68.png)



## MVP
- Navbar with working "track my bus" and non functional "email Megabus" "go green" and "help" links
- "i can help" button on main page that links to "track my bus" components 
- Book Now with "to" "from" "leaving" "returning" input field and "find ticket" button 
- List trips component based on user input allowing user to book a trip 
- my trips component listing users selected trips alowing user to click on trip to link to map component
- map component with map and trip detials 


## Post-MVP
- User Authentication
- Notifications 
- Go green 
- Help and frequently asked questions 
- User profiles are indexed and searchable


## ERD Diagram
![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581706850/Screen_Shot_2020-02-14_at_2.00.29_PM_czjnkv.png)



## Endpoints

USER AUTH post-MVP functionality 
- GET `/api/users/:id`
- POST `/api/users`
- PUT `/api/users/:id`
- DELETE `/api/users/:id`

MY TRIPs component CRUD functionality 
- GET `/api/trips`
- POST `/api/trips
- GET `/api/trips/:tripid`
- PUT `/api/trips/:tripid`
- DELETE `/api/trips/:tripid`

Sample JSON from GET `/api/users`

  ```
  [
    {
      "name": "Erinn",
      "email": "erinn@erinn.erinn",
      "likes": [
        {
          "name": "Frank"
        }
      ]
    },
    {
      "name": "Frank",
      "email": "frank@erinn.erinn",
      "likes": [
        {
          "name": "Erinn"
        }
      ]
    }
  ]
  ```


## React Component Hierarchy

![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581707503/IMG_9975_armcfa.jpg)


## Components

Breakdown the initial logic defined in the previous sections into stateful and stateless components

| Component | Description | 
| --- | :--- |
| Nav |functional |
| App.js  | class | 
| Booking | functional  |
| Trips | functional |
| Map   | functional |

post MVP
| notifications   | functional |
| going green   | functional |




## Priority Matrix

Render your project priority matrix here

## Timeframes

Estimate the amount of time your team expects to spend on each area of your app

| Component | Estimated Time | Actual Time |
| --- | :---: | :---: |
| css| 15hrs |  |
| backend set-up | 6hrs |  |
| Front-End Routing | 7hrs |  |
| setting up components | 5 hrs |  |
| connecting front and backend | 5 hrs |  |
| Server | 4hrs |  |
| pseudocoding | 4hrs |  |
| Total | hrs |  |

_Be sure to document the actual time spent as you progress_

## Additional Libraries
- nodemon
- express
- react-router-dom
- axios 
- morgan
- passport 
- pg sequelize

## Expected Issues
routing

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolutions

#### ISSUES AND RESOLUTIONS EXAMPLE:
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Update as neccessary with any changes or directional adjustments made throughout the project week
