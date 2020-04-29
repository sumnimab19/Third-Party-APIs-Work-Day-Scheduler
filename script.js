
var currentDayEl = $("#currentDay");
var calendarHour = $(".hour");
var today = moment();
var storedValues = [];

currentDayEl.text(today.format("LL"));
   
var testArray = ["nine","ten","eleven","twelve","one","two","three","four","five"];
var testRows = ["row1","row2","row3","row4","row5","row6","row7","row8","row9"];
var taskArray = ["tasknine","taskten","taskeleven","tasktwelve","taskone","tasktwo","taskthree","taskfour","taskfive"];
var currentTime = (parseInt((today.format("LT"))))

function timeCheck(){
    
for (let i = 0; i < testArray.length; i++) {  
    if((testArray[i] === "one") || (testArray[i] === "two") || (testArray[i] === "three") ||(testArray[i] === "four") ||(testArray[i] === "five")) {
        var labelTime = (parseInt ($("label#"+ testArray[i]).text())) + 12; 
    } else {
        var labelTime = (parseInt ($("label#"+ testArray[i]).text())); 
    }
    var presentRow = $("textarea#" + testRows[i]);
    if(currentTime === labelTime) {
        presentRow.addClass("present");
    } 
    if ((currentTime > labelTime)){
        presentRow.addClass("past");
    } 
    if ((currentTime < labelTime)){
        presentRow.addClass("future");
    } 
}
}

getValueFromLocalStorage();
timeCheck();

buttonEl = $(".saveBtn")
buttonEl.on("click", saveDataToLocalStorage)



function saveDataToLocalStorage(){
    for (var i = 0; i < testRows.length; i++) {
        var inputText = $("textarea#" + testRows[i]).val();
        localStorage.setItem(taskArray[i], JSON.stringify(inputText));
        
    }
    
}


function getValueFromLocalStorage(){
    for (var i = 0; i < testRows.length; i++) {
    var getData = JSON.parse(localStorage.getItem(taskArray[i]));
   
    if (getData !== null) {
        $("textarea#" + testRows[i]).val(getData);
    }
}
}

