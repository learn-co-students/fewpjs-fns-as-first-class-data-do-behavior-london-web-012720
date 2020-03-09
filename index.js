/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
let timeHour = parseInt(time.split(":")[0])

if (timeHour < 12) {
  return "Good Morning" 
}
 
else if (timeHour >= 12 && timeHour < 17 ) {
  return "Good Afternoon" 
}

else  {
  return "Good Evening" 
}

}

/* Write your implementation of displayMessage() */
function displayMessage(textt){
 document.querySelector("#greeting").innerText = textt
}