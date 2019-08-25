// from data.js
var tableData = data;
var dateInput = d3.selectAll('#datetime');
var cityInput = d3.selectAll('#city');
var stateInput = d3.selectAll('#state');
var countryInput = d3.selectAll('#country');
var shapeInput = d3.selectAll('#shape');

var button = d3.select('button');
var table = d3.select('tbody');


//* A function that clears and displays the array of objects as a table */
function createTable(tableData){
    // Clear table
    table.selectAll('tr').remove();
    // Add table elements based on filtered data
    tableData.forEach(sighting => {
        var newRow = table.append('tr');
        Object.entries(sighting).forEach(([key, value]) => {
            newRow.append('td').text(value);
        })
    })
}

// show full table 
createTable(tableData); 

// event handler
function tableFilter(){
    /*  If I was clever, I could probobly use these and a loop to clean up the mess below
    Inputs.nodes().forEach(function(d,i) {
        console.log(d3.select(d).property("value"))})

    Inputs.nodes().forEach(function(d,i) {
        console.log(d3.select(d).attr('id'))})
    */

    var filteredData = tableData.filter(sighting => (
        [sighting.datetime, ''].includes(dateInput.property("value")) &&
        [sighting.state, ''].includes(stateInput.property("value")) &&
        [sighting.city, ''].includes(cityInput.property("value")) &&
        [sighting.country, ''].includes(countryInput.property("value")) &&
        [sighting.shape, ''].includes(shapeInput.property("value"))
    ));
    createTable(filteredData);
}

// event watch
button.on("click", tableFilter);