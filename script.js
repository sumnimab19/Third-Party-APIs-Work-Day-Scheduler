
var currentDayEl = $("#currentDay");
var calendarHour = $(".hour");
var today = moment();

currentDayEl.text(today.format("LL"));

var currentTime = today.format("LT");

var x = (parseInt(calendarHour.text().slice(1,2)))


var y=(parseInt(currentTime.slice(0,1)))
// console.log(y)
// console.log(x)
var presentRow = $("#row");
if(y === x) {
    presentRow.addClass("present");
} 
if ((y > x)){
    presentRow.addClass("past");
} 
if ((y < x)){
    presentRow.addClass("future");
}

getValueFromLocalStorage()


buttonEl = $(".saveBtn")
buttonEl.on("click", function(e)
{
    var inputText = $("textarea#row").val();
    localStorage.setItem("task", JSON.stringify(inputText));



    
});


function getValueFromLocalStorage(){
    var getData = JSON.parse(localStorage.getItem("task"));
    console.log(getData)
    
    if (getData !== null) {
        $("textarea#row").val(getData);

    }
}
