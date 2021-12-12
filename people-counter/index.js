let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let counter = 0;


function increment() {
    counter += 1;
    countEl.textContent = counter;
}

function save() {
    let countStr = counter + " - ";
    console.log("the button was bing bonged %s times", countStr);
    saveEl.textContent += countStr;
    // set counter to 0 after saving previous value
    countEl.textContent = 0;
    counter = 0;
}