# Cityspire

You can find the deployed project at [Cityspire](https://cityspire.shanejeremich.com). This is not the complete version, this is only the first release with a couple features. This project still needs to be built out with future releases/added features.

The future of this app will be an app that will analyze data from cities such as population, cost of living, rental rates, crime rates, park (walk score), and other social and economic scores that are important in deciding in what city a person would like to live in. This app will streamline all this data in an intuitive and easy-to-understand user interface.

### Bugs / Need to fix

- Mapbox Not working correctly as of 10/01/2021
- React Router not working correctly with manual typing of URL/refresh coming back with 404
- Okta authentication not working because of the previous bug

<br>

![Cityspire](/public/images/main.jpg)
![Cityspire](/public/images/map.jpg)

<br>

## Contributors

|                                        [Shane Jeremich](https://github.com/sjeremich23)                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
|            [<img src="https://shanejeremich.com/images/shane.png" width = "200" />](https://github.com/sjeremich23)            |
|                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/sjeremich23)                    |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/shanejeremich/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.11.0.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)
![Okta](https://img.shields.io/badge/Okta--React-3.0.2-blue)
![Mapbox-GL](https://img.shields.io/badge/Mapbox--GL-1.10.1-green)

> When using Okta for authentication, the app will need to run locally on port 3000.

### Key Features

- Search for any city in the United States
- Integration of Okta API for Login/Sign-Up
- Integration of Mapbox-GL API
- Mapbox Geocoding

#### Front end deployed to [Cityspire](https://cityspire.shanejeremich.com/)

#### Back end still under development

# APIs

- Mapbox-GL
- Okta

# Installation Instructions

- Fork and clone the repo to install it as your own remote.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory
    * eject - copy the configuration files and dependencies into the project so you have full control over them
    * deploy - publishes build folder to gh-pages branch
