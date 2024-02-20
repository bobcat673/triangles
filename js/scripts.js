window.onload = function() {
 button = document.getElementById("submitButton");
 button.onclick = function(event) {
  event.preventDefault()
  let side1 = document.getElementById("side1").value;
  let side2 = document.getElementById("side2").value;
  let side3 = document.getElementById("side3").value;
  if (side1 === side2 && side2 === side3) {
    let result = "Its a equilateral";
    document.getElementById("output").innerText = result;
  }
  else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    let result = "Its a isosceles";
    document.getElementById("output").innerText = result;
  }
  else if (side1 + side1 <= side3){
    let result = "NOT A TRIANGLE";
    document.getElementById("output").innerText = result;
  }
  else {
    let result = "Its a scalene";
    document.getElementById("output").innerText = result;
  }
 };
};