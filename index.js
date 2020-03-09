/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) { 
  string = string.split(":").join("");
  if (string < 1200) return "Good Morning";
  if (string > 1200 && string < 1700) return "Good Afternoon";
  if (string > 1700) return "Good Evening";
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) { 
  document.getElementById('greeting').innerText = msg;
}