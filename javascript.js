const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const blueh3 = document.createElement("h3");
blueh3.style.color = "blue";
blueh3.textContent = "I'm a blue h3!";
container.appendChild(blueh3)

const innerDiv = document.createElement("div");
innerDiv.style.cssText = "border: 2px solid black; background-color: pink;";

const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm in a div";

const innerP = document.createElement("p");
innerP.textContent = "ME TOO!";

innerDiv.appendChild(innerH1);
innerDiv.appendChild(innerP);

container.appendChild(innerDiv);

/*
Exercise Instructions:
https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#exercise
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

    - a <p> with red text that says “Hey I’m red!”
    - an <h3> with blue text that says “I’m a blue h3!”
    - a <div> with a black border and pink background color with the following elements inside of it:
        - another <h1> that says “I’m in a div”
        - a <p> that says “ME TOO!”
        - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/