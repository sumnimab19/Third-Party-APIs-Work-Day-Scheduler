
var currentDayEl = $("#currentDay");
var calendarHour = $(".hour");
var today = moment();

currentDayEl.text(today.format("LL"));

//var timeArray = ["09AM","10AM","11AM","12PM"];

    var labelTime = (parseInt(calendarHour.text().slice(0,2)))

    var currentTime = (parseInt((today.format("HH"))))

    var presentRow = $("#row");
    var presentRow = $(".description")
    if(currentTime === labelTime) {
        presentRow.addClass("present");
    } 
    if ((currentTime > labelTime)){
        presentRow.addClass("past");
    } 
    if ((currentTime < labelTime)){
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
   
    if (getData !== null) {
        $("textarea#row").val(getData);

    }
}

// function timeConvert(num)
//  { 
//   var hours = Math.floor(num / 60);  
//   var minutes = num % 60;
//   return hours + ":" + minutes;         
// }
//  var m = timeConvert(calendarHour.text())
//  console.log(m)
//  console.log(calendarHour.text())