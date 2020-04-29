
var currentDayEl = $("#currentDay");
var today = moment();
var storedValues = [];

currentDayEl.text(today.format("LL"));
   
var labelArray = ["nine","ten","eleven","twelve","one","two","three","four","five"];
var inputRows = ["row1","row2","row3","row4","row5","row6","row7","row8","row9"];
var taskArray = ["tasknine","taskten","taskeleven","tasktwelve","taskone","tasktwo","taskthree","taskfour","taskfive"];
var currentTime = (parseInt((today.format("LT"))))
 
notTodayClearData();

// This function compares the current time with calendar display label time and adds class 'past', 'present','future' to show different colors dynamically
function timeCheck(){
    
    for (let i = 0; i < labelArray.length; i++) {  
        if((labelArray[i] === "one") || (labelArray[i] === "two") || (labelArray[i] === "three") ||(labelArray[i] === "four") ||(labelArray[i] === "five")) {
            var labelTime = (parseInt ($("label#"+ labelArray[i]).text())) ; 
        } else {
            var labelTime = (parseInt ($("label#"+ labelArray[i]).text())); 
        }

        if((labelArray[i] === "one") || (labelArray[i] === "two") || (labelArray[i] === "three") ||(labelArray[i] === "four") ||(labelArray[i] === "five")) {

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
            
        } else {

            var presentRow = $("textarea#" + inputRows[i]);
            if(currentTime === labelTime) {
                presentRow.addClass("present");
            } 
            if ((currentTime < labelTime)){
                presentRow.addClass("past");
            } 
            if ((currentTime > labelTime)){
                presentRow.addClass("future");
            } 
        }
    }
}


getValueFromLocalStorage();
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
    console.log((today.format("LL")))
    console.log(getData)
    if(getData !== (today.format("LL"))){
        localStorage.clear();
        $("textarea").val("");
    }
}