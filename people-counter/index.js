// initialize the count
// listen for clicks on increment button
// increment count if clicked
// change the count-el to reflect the new count

let counter = 0;
let countEl = document.getElementById("count-el");

function increment() {
    counter += 1;
    countEl.innerText = counter;
}

function save() {
    console.log("the button was bing bonged %s times", counter);
}