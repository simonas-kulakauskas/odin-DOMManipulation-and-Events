const ul = document.querySelector("ul"); // Selects <ul>
const input = document.querySelector("#item"); // Select input box
const button = document.querySelector("body div button"); // Select button inside div inside body

button.addEventListener("click", () => { // Attach 'click' event listener to 'button'.
    let currentInputValue = input.value; // Get value of input box when button clicked
    input.value = ''; // Reset value back to nothing.

    let li = document.createElement("li"); // create list element
    let span = document.createElement("span"); // create span element
    let button = document.createElement("button"); // create another button

    li.appendChild(span); // make span a child of li
    li.appendChild(button); // make button child of li

    span.textContent = currentInputValue; // make text of span to be input
    button.textContent = "Delete"; // make button text to be 'delete'

    ul.appendChild(li); // put list item onto list.

    button.addEventListener("click", () => { // attach a listener for click onto each button
        ul.removeChild(li); // once clicked, delete that child.
    })

    input.focus(); // put user's focus back onto the input box


});

