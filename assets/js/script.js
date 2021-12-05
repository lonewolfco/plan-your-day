

// adds current date and time to the header
function dateTime () {
    var timeNow = moment().format("MMMM Do, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(timeNow);
    return timeNow;
}
// sets interval of function dateTime to 1000 ms to update the date/time display every second
setInterval(dateTime, 1000);


// updates the colors of each timeblock in the banner to either past due, current, or future colors
// if (dateTime )