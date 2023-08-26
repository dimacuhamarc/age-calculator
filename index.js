
var userYear = document.getElementById("year");
var userMonth = document.getElementById("month");
var userDay = document.getElementById("day");

var resultYear = document.getElementById("r-year");
var resultMonth = document.getElementById("r-month");
var resultDay = document.getElementById("r-day");

var calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", clearAll);


function ageCalculator(){

    const birthdate = new Date(userYear.value, userMonth.value, userDay.value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth() + 1;
    const days = ageDate.getUTCDate() - 1;
    
    resultYear.innerText = years;
    resultMonth.innerText = months;
    resultDay.innerText = days;
}

function clearAll() {
    userYear.value = "";
    userMonth.value = "";
    userDay.value = "";

    resultYear.innerText = "--";
    resultMonth.innerText = "--";
    resultDay.innerText = "--";
}
userYear.addEventListener("change", ageCalculator);
userMonth.addEventListener("change", ageCalculator);
userDay.addEventListener("change", ageCalculator);
