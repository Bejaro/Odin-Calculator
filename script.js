let displayContent = document.getElementById('screenContent');
let currentValue = ["Calculator by Ben Rose"];
if (currentValue.length > 15) currentValue.length = 15;

const buttons = document.querySelectorAll('.calcButton');
buttons.forEach (function (button){
    button.addEventListener('click', buttonClicked);
});

const numberButtons = document.querySelectorAll('.digit');

for (var i = 0; i < numberButtons.length; i++) {     
};

function buttonClicked(clicked){
    console.log("Click: " + this.id);
    if (this.id == 'allclear'){
        clearScreen();
        return;
    }
    if (this.classList.contains('digit')){
        currentValue.push(this.innerHTML);
        displayContent.innerHTML = currentValue.join("");
        return;
    }
}

function clearScreen(){
    displayContent.innerHTML = "";
    currentValue.length = 0;
}
