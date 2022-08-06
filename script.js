let displayContent = document.getElementById('screenContent');
let currentValue = []; //What is currently displayed on screen, including operators
let operatorLength = 0; //Used to clear only part of the screen with the 'clear' command
let workingValue = []; //Currently selected numbers only, no operators
let storedValue = 0; //Stored when an operator is selected
let answer = 0; //The answer!

let awaitingOperation = false; //Boolean to disallow multiple operators in one line
let operationRequired = ""; //What operation are we doing?

const maxDigits = 14; //Maximum number of digits

const buttons = document.querySelectorAll('.calcButton');
buttons.forEach (function (button){
    button.addEventListener('click', buttonClicked);
});

function buttonClicked(clicked){
    console.log("");
    console.log("Click: " + this.id);
    if (this.id == 'allclear'){
        allClear();
        return;
    }
    if (this.id == 'clear'){
        clear();
        return;
    }
    if (this.classList.contains('operator') && awaitingOperation == false){
        currentValue.push(this.innerHTML);
        displayContent.innerHTML = currentValue.join("");
        operatorLength = currentValue.length;

        //Store current value and reset working value
        storedValue = +workingValue.join("");
        workingValue = [];
        awaitingOperation = true;

        if(this.id == 'plus'){
            operationRequired = "plus"
        }
        if(this.id == 'minus'){
            operationRequired = "minus"
        }
        if(this.id == 'multiply'){
            operationRequired = "multiply"
        }
        if(this.id == 'divide'){
            operationRequired = "divide"
        }

        console.log("Operation: " + operationRequired);

        reportToConsole()
        return;
    }
    if (this.classList.contains('digit') && (workingValue.length <= maxDigits)){
            if (this.id == decimal && currentValue.includes(".")){
                return;
            }
        currentValue.push(this.innerHTML);
        workingValue.push(this.innerHTML);
        displayContent.innerHTML = currentValue.join("");
        if (currentValue.length > maxDigits) currentValue.length = maxDigits;

        reportToConsole()
        return;
    }
    if (this.classList.contains('equals') && awaitingOperation == true){
        operate();

        reportToConsole()
        return;
    }
    
}

function reportToConsole(){
    console.log("Current: " + currentValue.join(""));
    console.log("Working: " + workingValue.join(""));
    console.log("Stored: " + storedValue);
    console.log("Awaiting: " + awaitingOperation)
}

function operate(){
    if (operationRequired == "plus"){

        //Find answer
        const num1 = storedValue;
        const num2 = +workingValue.join("");
        answer = num1 + num2;
    }
    if (operationRequired == "minus"){
        const num1 = storedValue;
        const num2 = +workingValue.join("");
        answer = num1 - num2;
    }
    if (operationRequired == "multiply"){
        const num1 = storedValue;
        const num2 = +workingValue.join("");
        answer = num1 * num2;
    }
    if (operationRequired == "divide"){
        const num1 = storedValue;
        const num2 = +workingValue.join("");
        answer = num1 / num2;
    }
    round(answer);

}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    answer = Math.round(m) / 100 * Math.sign(num);
    reportAnswer();
}

function reportAnswer(){

    //Report on screen
    displayContent.innerHTML = answer;

    //Allow for second operation
    workingValue = Array.from(String(answer));
    currentValue = Array.from(String(answer));
    awaitingOperation = false;

    console.log("Answer: " + answer);
}

function clear(){
    currentValue.length = operatorLength;
    workingValue = Array.from(String(answer));
    displayContent.innerHTML = currentValue.join("")
}

function allClear(){
    displayContent.innerHTML = "";
    currentValue.length = 0;
    storedValue = 0;
    workingValue.length = 0;
    awaitingOperation = false;
    operationRequired = "";
    answer = 0;
}
