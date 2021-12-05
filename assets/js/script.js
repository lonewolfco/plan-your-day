
// adds current date and time to the header
function dateTime () {
    var timeNow = moment().format("MMMM Do, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(timeNow);
}

setInterval(dateTime, 1000);
// var dateTime = moment().format("MMM Do, YYYY [at] hh:mm:ss a");
// $("#currentDay").text(dateTime);