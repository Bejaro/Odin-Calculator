let displayContent = document.getElementById('screenContent').innerHTML;
const buttons = document.querySelectorAll('.calcButton');
buttons.forEach (function (button){
    button.addEventListener('click', buttonClicked);
});

function buttonClicked(clicked){
    console.log(this.id);
    if (this.id == 'allclear'){
        displayContent = "";
        clearScreen();
    }
}

function clearScreen(){
    displayContent = "";
    console.log(displayContent);
}
