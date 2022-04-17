
The following is my rendition of the wire frame mock up of the assessment. Some of the styles may not be 1-1 but I have tried my best to replicate what was given in the mock up. This was my first time developing in React and developing the components was a lot of fun, especially the charts. I did not use Redux since the data supplied to me was static and I did not have to make any updates to the given data. If the data needed to be modified  I would have used Redux to manage the state of the data. 

I made 4 compoenents for this project. The Header, Left Product Panel, Chart Panel and The Table Panel. All the values in the Left Product Panel, Chart, and the Table were dynamically taken from the provide JSON file to make it robust for other types of JSON that would have to be similarly structured. I transformed the JSON file in to a JSON object and put that in my folder structure under src/products. If there were other similar JSON objects instantiaed in the folder structure, their reference could be easily swapped out. 

I used the Chart.js Library to implement the charts. The given legend in the charts are togglable. Clicking on each legend hides the selected line form the chart. I aggregrated the weekly given data grouping them by months  and displayed it in a line graph to see the montly trends. 

If I was given more time I would have visualized  other relevant metrics. An interesting enhancement would be to give the user the option to configure the type of chart and what value could be picked in any axis of a selected chart to visualize the data in any fasion. Another important enhancement to be made would be to implement Pagination in the Product Display panel to display other poducuts. I would have to modify the structure of the divs to dynimically consume different product data and change logic of how the aggregation is done. 

This project was a lot of fun to implement and I hope you all like what I have done here.  
