$(document).ready(function() {
    $("form:first").on("submit", selectSchedule);
});

function selectSchedule(event) {
    event.preventDefault();
    let events = "";
    let times = "";
    let day = $("input[name=days]:checked").val();

    switch(day)
    {
        case "Sunday":
            events = "Sleep in";
            times = "Whenever";
            break;

        case "Monday":
            events = "Curse at clock";
            times = "7 am";
            break;

        case "Tuesday":
            events = "Watch TV";
            times = "8 pm";
            break;

        case "Wednesday":
            events = "Javascript Class";
            times = "6 pm";
            break;

        case "Thursday":
            events = "Date night with the Wife";
            times = "6:30 pm";
            break;

        case "Friday":
            events = "Leave Work Early";
            times = "1 pm";
            break;

        case "Saturday":
            events = "Watch Football";
            times = "All Day";
            break;
    }

    $("p#events").text(events);
    $("p#times").text(times);

}