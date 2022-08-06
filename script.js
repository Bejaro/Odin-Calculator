let displayContent = document.getElementById('screenContent');
let currentValue = []; //What is currently displayed on screen, including operators
let workingValue = []; //Currently selected numbers only, no operators
let storedValue = []; //Stored when an operator is selected

let awaitingOperation = false; //Boolean to disallow multiple operators in one line

const maxDigits = 14; //Maximum number of digits

const buttons = document.querySelectorAll('.calcButton');
buttons.forEach (function (button){
    button.addEventListener('click', buttonClicked);
});

function buttonClicked(clicked){
    if (this.id == 'allclear'){
        allClear();
        return;
    }
    if (this.id == 'clear'){
        clear();
        return;
    }
    if (this.classList.contains('operator')){
        currentValue.push(this.innerHTML);
        displayContent.innerHTML = currentValue.join("");

        storedValue = workingValue;
        awaitingOperation = true;

        reportToConsole()
        return;
    }
    if (this.classList.contains('digit') && (workingValue.length <= maxDigits)){
        currentValue.push(this.innerHTML);
        workingValue.push(this.innerHTML);
        displayContent.innerHTML = currentValue.join("");
        if (currentValue.length > maxDigits) currentValue.length = maxDigits;

        reportToConsole()
        return;
    }
    if (this.classList.contains('equals')){
        operate();

        reportToConsole()
        return;
    }
    
}

function reportToConsole(){
    console.log("");
    console.log("Click: " + this.id);
    console.log("Current: " + currentValue.join(""));
    console.log("Working: " + workingValue.join(""));
    console.log("Stored: " + storedValue.join(""));
    console.log("Awaiting: " + awaitingOperation)
}

function clear(){
    displayContent.innerHTML = "";
    currentValue.length = 0;
    workingValue.length = 0;
}

function allClear(){
    displayContent.innerHTML = "";
    currentValue.length = 0;
    storedValue.length = 0;
    workingValue.length = 0;
    awaitingOperation = false;
}
