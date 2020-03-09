/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  console.log(timeString);
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  str = str.split(":").join("");
  if (str < 1200) return "Good Morning";
  if (str > 1200 && str < 1700) return "Good Afternoon";
  return "Good Evening";
}

/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}