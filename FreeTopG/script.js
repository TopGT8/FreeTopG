//array of classes
const fontStyles = ["font-style-1", "font-style-2", "font-style-3"];

//get the text element
const text = document.getElementById("text");

//function to change the font
function changeFont() {
    //get a random font style from the array
    const randomFont = fontStyles[Math.floor(Math.random() * fontStyles.length)];

    //remove all classes from the text element
    text.className = "";

    //add the random font style class to the text element
    text.classList.add(randomFont);
}

//call the changeFont function on page load
changeFont();

//call the changeFont function on page refresh
window.onbeforeunload = changeFont;
