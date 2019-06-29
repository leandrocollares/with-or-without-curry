# With or without Curry

The visualization comprises a bar chart and a histogram, and was
implemented with React and D3. React renders the visualization 
components, whereas D3 handles data and axis calculations.

The bar chart depicts the point difference in each Golden State Warriors
game of the 2018-19 regular season. Hovering over a bar causes a tooltip 
containing additional game information to be displayed. The histogram 
shows the number of games in which Stephen Curry's performance was within
each point interval. Selecting a point range in the histogram makes the
bar chart display games in which the number of points made by Curry fell
within the said range.

Colours from current (2011 - present) and former (1998 - 2010) Golden 
State Warriors logos were used in the bar chart and histogram, respectively.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Getting started

* Clone or download the repository 

* Navigate to the project directory: ```cd with-or-without-curry```

* Install dependencies: ```npm install```

* Run the app in development mode: ```npm start```

Please refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for further information.

## Data source

[Basketball Reference](https://www.basketball-reference.com)
