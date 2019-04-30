// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// default display of unfiltered data set - all data
tableData.forEach((alienReport) => {
  var row = tbody.append("tr");
  Object.entries(alienReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the 'filter-btn' id including the 'submit' filter table
var submit = d3.select("#filter-btn");

submit.on("click", function() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);

// Arrow function to select a specific date in 'data' 
// Sourced from JS Session 2 09-Ins_Filter
var filterData = tableData.filter(item => item.datetime === inputValue);
// console.log(filterData);

// if the data field is null (condition ==), print out the entire table
if (inputValue.length == 0) {
  filterData = tableData;
 }

// clear table from last filter entry (otherwise, keeps appending to existing data)
var clear = tbody.selectAll("tr").remove();

// This code was sourced from JS Session 03-Evr_03_Table exercise
// Writes to the screen table based on user-entered filter
filterData.forEach((alienReport) => {
  var row = tbody.append("tr");
  Object.entries(alienReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
});


