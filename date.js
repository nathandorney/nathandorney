var d = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];

document.getElementById("display-day").innerHTML = days[d.getDay()];