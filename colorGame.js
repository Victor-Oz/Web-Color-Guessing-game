let numOfSquares = 6;
let colors = randomColor(numOfSquares);
let header = document.querySelector("h1");
let display = document.querySelector(".display");
let squares = document.querySelectorAll(".square");
let span = document.querySelector("span");
let pickedColor = pickColor();
span.innerHTML = pickedColor;
let clicked;
let resetButton = document.querySelector("#resetButton");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3
    colors = randomColor(numOfSquares);
    pickedColor = pickColor();
    span.innerHTML = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }

});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numOfSquares = 6
    colors =  randomColor(numOfSquares);
    pickedColor = pickColor();
    span.innerHTML = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        
    };
});

resetButton.addEventListener("click", function(){
   colors =  randomColor(numOfSquares);

    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
    };

    pickedColor = pickColor();
    span.innerHTML = pickedColor;
    header.style.backgroundColor = "steelblue";
    display.textContent = "";
    this.textContent = "New Colors";
})

for (let i = 0; i < colors.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        clicked = this.style.backgroundColor;
        if (clicked === pickedColor) {
           for (let i = 0; i < squares.length; i++) {
               squares[i].style.background = pickedColor;
               display.textContent = "Very Good!";
              resetButton.innerHTML = "Play Again?";   
              header.style.backgroundColor = pickedColor; 
           }
        } else {
            this.style.background = "#232323";
            display.textContent = "Wrong!";
        };
    })
    
};



function pickColor(){
    let random = Math.floor(Math.random() * colors.length );
    return colors[random];
};


function randomColor(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
        let r = Math.floor(Math.random() * 255 + 1);
        let b = Math.floor(Math.random() * 255 + 1);
        let g = Math.floor(Math.random() * 255 + 1);

      arr.push("rgb(" + r + ", " + b +", " + g +")" );
        
    };
    return arr;
    
    
};


