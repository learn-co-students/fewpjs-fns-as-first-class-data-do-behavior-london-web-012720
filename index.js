/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function displayMessage(message) {

    document.getElementById("greeting").innerText = message;

}

function greet(string) {
    const number = parseInt(string, 10)
    if (number < 12) return "Good Morning"

    if (number > 17) return "Good Evening"

    return "Good Afternoon"

};



/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */