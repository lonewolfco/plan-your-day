
// adds current date and time to the header
function dateTime () {
    var timeNow = moment().format("MMMM Do, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(timeNow);
    return timeNow;
}
    // sets interval of function dateTime to 1000 ms to update the date/time display every second
    setInterval(dateTime, 1000);

// create object for the values in each time block Row
var timeBlockData = [
    {
        row: "0",
        hour: "08",
        time: "08",
        meridiem: "am",
        reminder: "",
    },
    {
        row: "1",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: "",
    },
    {
        row: "2",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: "",
    },
    {
        row: "3",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: "",
    },
    {
        row: "4",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "5",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "6",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "7",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "8",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "9",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "10",
        hour: "06",
        time: "18",
        meridiem: "pm",
        reminder: "",
    },
];

// function to create the time block row elements
timeBlockData.forEach(function(timeBlockEl) {
    // Time Block Row Element
    var rowEl = $("<form>")
        rowEl.addClass("row");
        $(".container").append(rowEl);

    // creates hour element
    var hourEl = $("<div>")
         .text(`${timeBlockEl.hour}${timeBlockEl.meridiem}`)
         hourEl.addClass("col-md-2 hour");

    // creates Description Element
    var descriptionEl = $("<div>")
        descriptionEl.addClass("col-md-9 description p-0");

        // text content of Description Element
        var descriptionText = $("<textarea>");

        // appends description element to include the text area
        descriptionEl.append(descriptionText);
        descriptionText.attr("id", timeBlockEl.row);

    // adjusts color of rows based on the time of day
    if (timeBlockEl.time < moment().format("HH")) {
        descriptionEl.addClass("past");

    } else if (timeBlockEl.time === moment().format("HH")) {
        descriptionEl.addClass("present");

    } else if  (timeBlockEl.time > moment().format("HH")) {
        descriptionEl.addClass("future");
    }

    // creates save button element
    var saveBtnEl = $("<i class='far fa-save fa-lg'></i>");
    var saveBtn = $("<button>")
        saveBtn.addClass("col-md-1 saveBtn");
    
        saveBtn.append(saveBtnEl);

    // append the row element data to include the hour element, description element, and the save button
    rowEl.append(hourEl, descriptionEl, saveBtn);


});


// updates the colors of each timeblock in the banner to either past due, current, or future colors
// if (dateTime )

// save data to local storage

// display data from local storage