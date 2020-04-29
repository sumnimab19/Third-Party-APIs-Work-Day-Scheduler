
var currentDayEl = $("#currentDay");
var calendarHour = $(".hour");
var today = moment();

currentDayEl.text(today.format("LL"));
   
   var testArray = ["nine","ten","eleven","twelve","one","two","three","four","five"];
   var testRows = ["row1","row2","row3","row4","row5","row6","row7","row8","row9"];
   var currentTime = (parseInt((today.format("LT"))))
    // var labelTime = (parseInt ($("label#ten").text())); -- This code works
    
    for (let i = 0; i < testArray.length; i++) {
        
        if((testArray[i] === "one") || (testArray[i] === "two") || (testArray[i] === "three") ||(testArray[i] === "four") ||(testArray[i] === "five")) {
            var labelTime = (parseInt ($("label#"+ testArray[i]).text())) + 12; 
        } else {
            var labelTime = (parseInt ($("label#"+ testArray[i]).text())); 
        }
        var presentRow = $("textarea#" + testRows[i]);
        console.log(labelTime)
        console.log(currentTime)
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
    


getValueFromLocalStorage()


buttonEl = $(".saveBtn")
buttonEl.on("click", function(e)
{
    var inputText = $("textarea#row1").val();
    localStorage.setItem("task", JSON.stringify(inputText));
    
});


function getValueFromLocalStorage(){
    var getData = JSON.parse(localStorage.getItem("task"));
   
    if (getData !== null) {
        $("textarea#row1").val(getData);

    }
}

