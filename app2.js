// Variables
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

    dataInput.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}

//Populate table
populate(data);

// Filter
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputField.property("value").trim();

    // Filter by field matching input value
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate)


    // Add filtered sighting to table
    tbody.html("");

    let response = {
        filterDate
    }

    if (response.filterDate.length !== 0) {
        populate(filterDate);
    }
    else {
        tbody.append("tr").append("td").text("No results found!");
    }
})

resetbtn.on("click", () => {
    tbody.html("");
    populate(data)
    console.log("Table reset")
})