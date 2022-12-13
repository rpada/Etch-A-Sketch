
function setupGrid(){
    const container = document.querySelector('#Grid');
    const squarediv = document.createElement('div');
    squarediv.classList.add('squarediv');    
    squarediv.setAttribute('id', 'squarediv'); 
    squarediv.addEventListener("mouseover", function(event) {
        let color = "blue"
        squarediv.style.backgroundColor = color;
    })
    container.appendChild(squarediv);
}

function boxes(){
for (i=0; i < 256; i++){
   setupGrid()
  }
}

const elebutton = document.getElementById("grid-button")
elebutton.addEventListener("click", newGrid);

function newGrid(){
       // ask the user new value for the length of one side of the square
    let userChoice = prompt("How many boxes on one side would you like?")
    if (userChoice > 100 || userChoice <= 0 || isNaN(userChoice)) {
        alert("Please enter a valid number (less than 100, greater than zero, not a letter or special character.)")
    } else {
    const container = document.querySelector('#Grid');
    container.textContent = ""
    const oneSide = Math.pow(userChoice, 2)
    // take the inputted users and created a new grid by iterating the squarediv again
    for (i=0; i < oneSide; i++){
        document.getElementById("Grid").style.gridTemplateColumns = `repeat(${userChoice}, auto)`; // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
        setupGrid()
      }
    }
}
boxes()
