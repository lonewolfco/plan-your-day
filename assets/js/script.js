


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

var saveBtn;
var saveBtnEl;
var userInput;


// function to create the time block row elements
timeBlockData.forEach(function(timeBlockEl, index) {
    // Time Block Row Element
    var rowEl = $("<form>")
        rowEl.addClass("row");
        $(".container").append(rowEl);

    // creates hour element
        var hourEl = $("<div>")
         .text(`${timeBlockEl.hour}${timeBlockEl.meridiem}`)
         hourEl.addClass("col-md-1 hour");

    // creates Description Element
    var descriptionEl = $("<div>")
        descriptionEl.addClass("col-md-10 description p-0");

        // text content of Description Element
        var descriptionText = $("<textarea>");
        descriptionText.addClass("user-input");


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

     
    // variable that gets the data saved in the local storage & assigns it to my text area
    var storePlan = (localStorage.getItem(index));
    console.log(storePlan);
    descriptionText.val(storePlan);


    // creates save button element
    saveBtnEl = $("<i class='far fa-save fa-lg'></i>");
    saveBtn = $("<button>")
            saveBtn.addClass("col-md-1 saveBtn");
        
            saveBtn.append(saveBtnEl);
        
        // save button event listener
        // userInput variable is equal to the row numbers of each textarea tag as an index
        // sets the specific text area tag whose ID is represented by a number value to the local storage
        saveBtn.on("click", function(e){
            e.preventDefault();
            userInput = document.getElementById(index);
            console.log(userInput);
            console.log(userInput.value);
            localStorage.setItem(index, userInput.value);
            // userInput.value = storePlan;
            return userInput;
        });

        

    // append the row element data to include the hour element, description element, and the save button
    rowEl.append(hourEl, descriptionEl, saveBtn);

    

});

