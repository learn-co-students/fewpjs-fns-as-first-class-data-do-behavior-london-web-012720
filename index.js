/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

const greet = (timeString) => {
  const time = parseInt(timeString)
  if (time < 12)
  return "Good Morning"
  if (time > 17)
    return "Good Evening"
  else 
    return "Good Afternoon"


}

/* Write your implementation of greet() *
/* Write your implementation of displayMessage() */

const displayMessage = (message) => {
  document.querySelector('#greeting').innerText = message

}