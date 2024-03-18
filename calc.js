var display = document.getElementById("display");
function ToDisplay(input){

     display.value += input;
}
function clearDisplay(){
     var display = document.getElementById("display");
     var currentValue= display.value;
     display.value = currentValue.slice(0, 0);
}

document.addEventListener("keydown", function(event) {  
     if (event.key === "Backspace") {
         var currentValue = display.value;
         display.value = currentValue.slice(0,0)
     }
 });
function calculate(){

     display.value= eval(display.value);
} 