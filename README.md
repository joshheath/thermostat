## Thermostat

This was a weekly project during week 5 at Makers Academy. It is an interactive thermostat that allows the temperature to be increased or decreased. Power Saving Mode limits the temperature to a maximum of 25C. 

If the temperature is above 25C, it will display in red. If it is below 18C it will display in blue. This was done using jQuery

The app uses OpenWeatherMap's API, allowing a user to type in any city name and find out the temperature there.

### How to use
- Clone this repo
- Type `open index.html` into the command line to open the app in your browser
- Type `open SpecRunner.html` into the command line to run tests


### Technology used
- JavaScript
- Jasmine
- jQuery
- OpenWeatherMap API
- HTML/CSS

### User stories
This app satisfies the following user stories:

```
As a user
So that I can set the temperature
I want a thermostat that starts at 20 degrees
```
```
As a user
So that I can increase the temperature
I want my thermostat to have an up button
```
```
As a user
So that I can decrease the temperature
I want my thermostat to have a down button
```
```
As a user
So that I don't get too cold
My thermostat should have a minimum temperature of 10 degrees
```
```
As a user
So that I can protect the environment
My thermostat should have a power saving mode (PSM), which is on by default
```
```
As a user
So that I can regulate the temperature and my heating bills
I want PSM to cap the temperature at 25 degrees when switched on
```
```
As a user
So that I can survive the cold winter months
I want PSM to increase the maximum temperature to 32 degrees when switched off
```
```
As a user
So that I can reset the temperature
I want a reset button that sets the temperature to 20 degrees
```
```
As a user
So I can monitor my energy usage
I want the thermostat to tell me whether the current energy usage is low (<18 degrees), medium (18-25 degrees) or high (>25 degrees)
```
