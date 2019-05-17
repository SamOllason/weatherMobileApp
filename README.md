# WhateverTheWeather

## Overview
WhateverTheWeather is dynamic and app that you can use to find out
the current weather and a 5 day forecast in any city in the world! (currently only for Earth).

You can see the current weather and a detailed a 5-day/3-hour forecast 
of the weather in that city.

The app has a dynamic background image that will show the current weather 
conditions for the selected city.

This is a cross-platform app created with React Native.



## Features:
* Text input area to type in name of the city
* Text input area will automatically 'slide up' when you want to use the keyboard
* Area to see current weather and conditions in selected city
* Area to see 5-day/3-hour forecast in current city, scrollable to see more information. Includes conditions description, conditions icons, and max/min temperature
* Background dynamically changes based on current weather conditions
* Ability to refresh data at the click of a button (data on server is updated every 10 minutes)

## Technology features
This app uses a wide variety of React Native features available on both iOS and Android.
* ScrollView to enable smooth scrolling behaviour
* 'Pop-up' modal component to show information
* Networking - data fetching from multiple endpoints using modern async/await syntax
* Responsive styling with Flexbox
* Working with images and external links
* Testing with Jest + Enzyme
* Accessibility labels added to buttons etc.

## Data
* Data is provided by {openWeatherMapLink}. Please note there is currently limit on of 60 requests per minute (across all users!) so please be patient.
* Data is refreshed on the server every 10 minutes.

## Photo
Thanks to the following for photos inside of the app
* Raindrops: Photo by [Liv Bruce](https://unsplash.com/photos/8yt8kBuEqok?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash

* Thunderstorm: Photo by Mélody P on Unsplash

* Fog by Photo by Annie Spratt on Unsplash

* Haze by Photo by Karsten Würth (@karsten.wuerth) on Unsplash

* clear sky by Photo by Sam Schooler on Unsplash

* dust by Photo by Dmitry Sovyak on Unsplash

## Data
Data is provided by OpenWeatherMap. Please note there is currently limit on of 60 requests per minute (across all users!) so please be patient.

## Privacy
None of the 'city' data you interact with inside of the app is stored or recorded.

## Support
Please either raise a Github issue or email sam_ollason@hotmail.co.uk with any support questions.
