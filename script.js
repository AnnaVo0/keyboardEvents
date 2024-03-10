// ol reference
const ol = document.querySelector("ol");

// Stores alphabet as a string
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Randomly picks one of the 26 letters of the alphabet
let letterChoice = alphabet[Math.floor(Math.random() * 27)];

// Keypress event
document.body.addEventListener("keyup", function(event) {
    if (event.key == letterChoice) {
        let li = document.createElement("li");
        li.textContent = "SECRET KEY PRESSED! It was " + letterChoice;
        ol.appendChild(li);
        letterChoice = alphabet[Math.floor(Math.random() * 27)];
    }
});