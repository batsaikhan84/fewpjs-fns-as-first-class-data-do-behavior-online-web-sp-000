/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
let greeting = ""
  let hour = parseInt(timeString.split(':')[0]);
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 17) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Afternoon";
  }
  return greeting
}

/* Write your implementation of displayMessage() */
function displayMessage(args) {
  document.getElementById("greeting").innerText = args;
}

