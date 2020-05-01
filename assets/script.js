// These functions refreshes the page ever 60 seconds.
$(document).ready(function(){
    setInterval(function(){ reload_page(); },60000);
 });

 function reload_page()
 {
    window.location.reload(true);
 }


var currentDayEl = $("#currentDay");
var today = moment();
var storedValues = [];

currentDayEl.text(today.format("LL"));
   
var labelArray = ["nine","ten","eleven","twelve","one","two","three","four","five"];
var inputRows = ["row1","row2","row3","row4","row5","row6","row7","row8","row9"];
var taskArray = ["tasknine","taskten","taskeleven","tasktwelve","taskone","tasktwo","taskthree","taskfour","taskfive"];
var currentTime = (parseInt((today.format("H"))));


// This function clears the data every day
notTodayClearData();


// This function compares the current time with label time value and adds class 'past', 'present','future' to show different colors dynamically
function timeCheck(){
    for (let i = 0; i < labelArray.length; i++) { 
        var labelTime = (parseInt($("label#"+ labelArray[i]).attr("value"))) ; 
        var presentRow = $("textarea#" + inputRows[i]);
        
        if(currentTime === labelTime) {
            presentRow.addClass("present");
        } 
        if ((currentTime > labelTime)){
            presentRow.addClass("past");
        } 
        if ((currentTime < labelTime)){
            presentRow.addClass("future");
        } 

        if((currentTime > 17) && (currentTime < 24)) {
            presentRow.addClass("past");
        } 
        if ((currentTime > 0) && (currentTime < 9)){
            presentRow.addClass("future");
        } 
    }
}

// Pulling the data from localstorage
getValueFromLocalStorage();

// Calling this function to check the time and label time
timeCheck();


// Added event listener to Save buttons
buttonEl = $(".saveBtn")
buttonEl.on("click", saveDataToLocalStorage)


// This function saves input data to localstorage
function saveDataToLocalStorage(){
    for (var i = 0; i < inputRows.length; i++) {
        var inputText = $("textarea#" + inputRows[i]).val();
        localStorage.setItem(taskArray[i], JSON.stringify(inputText));
    }
    localStorage.setItem("todayDate",JSON.stringify(today.format("LL")))
}


// This function pulls data from local storage
function getValueFromLocalStorage(){
    for (var i = 0; i < inputRows.length; i++) {
        var getData = JSON.parse(localStorage.getItem(taskArray[i]));
   
        if (getData !== null) {
            $("textarea#" + inputRows[i]).val(getData);
        }
    }
}


// This function clear the localstorage data if stored date is not equal to today's date
function notTodayClearData(){
    var getData = JSON.parse(localStorage.getItem("todayDate"));
    
    if(getData !== (today.format("LL"))){
        localStorage.clear();
        $("textarea").val("");
    }
}

