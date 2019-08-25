// from data.js
var tableData = data;
var dateInput = d3.select('#datetime');
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
    var filteredData = tableData.filter(sighting => (
        sighting.datetime == dateInput.property("value")
    ));
    createTable(filteredData);
}

// event watch
button.on("click", tableFilter);