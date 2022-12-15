const elebutton = document.getElementById("grid-button")
elebutton.addEventListener("click", newGrid);

const rainbowButton = document.getElementById("rainbow-button")
rainbowButton.addEventListener("click", colorGen);

const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearOriginal);

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

function clearOriginal(){
    const container = document.querySelector('#Grid');
    container.textContent = ""
    document.getElementById("Grid").style.gridTemplateColumns = "repeat(16, auto)"; // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
    boxes()
}

function colorGen() {
    const container = document.querySelector('#Grid');
    container.textContent = ""
    document.getElementById("Grid").style.gridTemplateColumns = "repeat(16, auto)"; // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
    for (i=0; i < 256; i++){

    const container = document.querySelector('#Grid');
    const squarediv = document.createElement('div');
    squarediv.classList.add('squarediv');    
    squarediv.setAttribute('id', 'squarediv'); 
    squarediv.addEventListener("mouseover", function(event) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        squarediv.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    })
    container.appendChild(squarediv);
}
}

function newGrid(){
    // creating actual grid
    let userChoice = prompt("How many boxes on one side would you like?")
       // ask the user new value for the length of one side of the square
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

    // clear button WHEN NEW GRID BUTTON IS PUSHED
    function clearNew(){
        const container = document.querySelector('#Grid');
        container.textContent = ""
        document.getElementById("Grid").style.gridTemplateColumns = `repeat(${userChoice}, auto)`; // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
        const oneSide = Math.pow(userChoice, 2)
        for (i=0; i < oneSide; i++){
            setupGrid()
           }
    }
    const clearButton = document.getElementById("clear-button")
    clearButton.addEventListener("click", clearNew);   

    // rainbow button WHEN NEW GRID BUTTON IS PUSHED
    function rainbow(){
        const container = document.querySelector('#Grid');
        container.textContent = ""
        document.getElementById("Grid").style.gridTemplateColumns = `repeat(${userChoice}, auto)`; // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
        const oneSide = Math.pow(userChoice, 2)
        for (i=0; i < oneSide; i++){
        const container = document.querySelector('#Grid');
        const squarediv = document.createElement('div');
        squarediv.classList.add('squarediv');    
        squarediv.setAttribute('id', 'squarediv'); 
        squarediv.addEventListener("mouseover", function(event) {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            squarediv.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        })
        container.appendChild(squarediv);
    }
    }
    const rainbowButton = document.getElementById("rainbow-button")
    rainbowButton.addEventListener("click", rainbow);

    return userChoice
}
 boxes()
