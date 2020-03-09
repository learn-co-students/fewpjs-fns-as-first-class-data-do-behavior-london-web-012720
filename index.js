/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(givenTime) {
  let given_hour = parseInt(givenTime.split(":")[0]);
  if (given_hour < 12) {
    return "Good Morning";
  }
  if (given_hour >= 12 && given_hour < 17) {
    return "Good Afternoon";
  }
  if (given_hour >= 17) {
    return "Good Evening";
  }
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
