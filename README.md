# Megabus

# Team name:  Snowplows
![alt text](https://image.shutterstock.com/image-vector/snowman-hat-scarf-isolated-on-260nw-1193297350.jpg)


## Project Description

A redesigned megabus app that highlights a help funtion so the user can reach out to customer support and navigate their trip information in an easy manner  

## Wireframes

![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581704012/Screen_Shot_2020-02-14_at_1.12.22_PM_xchmfj.png)
![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581704018/Screen_Shot_2020-02-14_at_1.12.09_PM_v7brrh.png)
Change view to Book and Change to edit 
![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581704292/Screen_Shot_2020-02-14_at_1.17.58_PM_lm3zcm.png)


My trip list 
![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581704422/Screen_Shot_2020-02-14_at_1.20.07_PM_il7jr9.png)
![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581704675/Screen_Shot_2020-02-14_at_1.24.16_PM_u9klh9.png)
![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581704753/Screen_Shot_2020-02-14_at_1.25.36_PM_vx86e9.png)

![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581705452/Screen_Shot_2020-02-14_at_1.37.02_PM_dvagex.png)






## MVP
- User Authentication
- Navbar with "track my bus" and "email Megabus" links
- "i can help" button on main page that links to "track my bus" and "email Megabus" components 
- Book Now with "to" "from" leaving returning input field and "find ticket" button 
- List trips component based on user input allowing user to book a trip 
- my trips component listing users selected trips alowing user to click on trip to link to map component with trip detials 


## Post-MVP
- Notifications 
- Go green 
- Help and frequently asked questions 
- User profiles are indexed and searchable


## ERD Diagram
![alt text](https://res.cloudinary.com/rachelml/image/upload/v1581706850/Screen_Shot_2020-02-14_at_2.00.29_PM_czjnkv.png)



## Endpoints

	- Index route returning an array of all Users and nested 'Likes'
- GET `/api/users/:id`
	- Show route for a user requested by ID
- POST `/api/users`
	- Create route for a new user
- PUT `/api/users/:id`
- DELETE `/api/users/:id`
- GET `/api/trips`
- GET `/api/trips/:tripid`
- GET `/api/trips/users/:id/:tripid`
- PUT `/api/trips/users/:id/:tripid`
- DELETE `/api/trips/users/:id/:tripid`
- POST `/api/trips

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
| Total | 9.5hrs |  |

_Be sure to document the actual time spent as you progress_

## Additional Libraries
- nodemon
- express
- react-router-dom
- axios 
- morgan
- passport 
- pg sequelize
- 

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
