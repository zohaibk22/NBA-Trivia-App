# Project Overview

## NBA Trivia

## Project Description

The "NBA Trivia" application will challenge your knowledge of player stats within the NBA. This will be a trivia game that will allow you to pick between multiple categories of stats within the NBA. After selecting a category, you will then shown two cards of random players. It will then be up to you to select who you believe is the better player according to that specific category of stats. There will be ten round in total. At the end of the game, you will be given a percentage of the questions you answer correctly to portray your knowledge of NBA players with respect to the select stat line.


## Wireframes
WireFrame: https://wireframe.cc/pbKTLi

### MVP/

#### MVP Gaols

- Have atleast one functioning category for the game
- Be able to compare two objects of data from the sourced API
- Have a home page, game Page, and exit page (Utilizing React Router)
-


#### MVP API


|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| BallDontLie API |      Yes      | https://ball-dont-lie.herokuapp.com/#introduction | https://www.balldontlie.io/api/v1/games/<ID> |

Sample Query Results:

```
{
    "id": 140,
    "first_name": "Kevin",
    "height_feet": 6,
    "height_inches": 9,
    "last_name": "Durant",
    "position": "F",
    "team": {
        "id": 3,
        "abbreviation": "BKN",
        "city": "Brooklyn",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Brooklyn Nets",
        "name": "Nets"
    },
    "weight_pounds": 240
}

```

<br>

#### MVP Libraries & Dependencies


|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | Utilzing React |
| React Router | Utilizing Route, Link, withRouter features |
| Axios | Utilizing API Calls  |

<br>

#### MVP Components

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
|__ components/
      |__ App.jsx
      |__ Header.jsx
      |__ Home.jsx
      |__ Game-Selection.jsx
      |__ Game.jsx
      |__ Exit.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | Implementation file. Will implement all respective components of applications |
|    Header.js    | functional |   n   |   n   |   n   |Header/Nav component that will render on all pages|
|    Home.js     | functional |   n   |   n   |   n   | Home page to enter into game |
|    Game-Selection.js     | functional |   n   |   n   |   n   | Game-Selection page to show all different options of trivia games |
|    Game.js    | class |   y   |   y   |   n  | the Game page|
|    Result-page.js    |   functional |   y   |   n   |   n  | The result page will display the player's score after the game has concluded |
|    Footer    | functional |   n   |   n   |   n   | A footer that will render on all pages |

<br>



#### PostMVP 

-  Add button functionality to display some common symptoms and remedies of COVID-19
- Incorperate dynamic Flag functionality. Incorperate update functionality that continuously checks for countries with the highest Covid-19 cases (Requires a second APU)
- Media Query for mobile app.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt/Project Proposal | Complete
|June 9| Front-End Core Design (HTML/CSS) | Complete
|June 10| Code in Event Listener for Symptoms/Remedies. Implement Map| Complete
|June 11| Code Event Listener for Flags to display COVID-19 stastics from API| Complete
|June 12| Make Final touches. Complete MVP. Work on POSTMVP | Complete
|June 15| Present | Incomplete

## Priority Matrix
![Priority Matrix](https://git.generalassemb.ly/zkhan14/About-Covid19-App/blob/master/Priority%20matrix.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Home Page | H | 1.5hrs| 0.5 hrs  | 0.5 hrs |
| CSS Styles| H | 3hrs| 4 hrs | 4 hrs  |
| Implement Flags | H | 4hrs| 2.5 hrs | 2.5 hrs|
| Flag Click Functionality| H | 4hrs| 3 hrs | 3 hrs|
| Implement API to read COVID-19 Statistics| H | 4hrs| 3 hrs| 3 hrs |
| Toggle functionality between flag and COVID-19 statistics | H | 4hrs | 3 hrs | 3 hrs|
| COVID-19 Symptoms and Remedies buttton | M | 2hrs | 3 hrs | 3 hrs|
| Media Query for Mobile App Design | M | 2hrs | 2 hrs| 2 hrs|
| Total | H | 24.5hrs| 21 hrs | 21 hrs |
|

## Code Snippet
```

l;  
    
 ```


## Change Log
