function one() {
  let num = document.getElementById("resultNew").textContent;
  console.log(num);

  let total = num + 1;
  console.log(total);

  document.getElementById("resultNew").textContent = total;
}

function Two() {
  let num = document.getElementById("resultNew").textContent;
  console.log(num);

  let total = num + 2;
  console.log(total);

  document.getElementById("resultNew").textContent = total;
}

function Tree() {
  let num = document.getElementById("resultNew").textContent;
  console.log(num);

  let total = num + 3;
  console.log(total);

  document.getElementById("resultNew").textContent = total;
}

function Four() {
  let num = document.getElementById("resultNew").textContent;
  console.log(num);

  let total = num + 4;
  console.log(total);

  document.getElementById("resultNew").textContent = total;
}

function Five() {
  let num = document.getElementById("resultNew").textContent;
  console.log(num);

  let total = num + 5;
  console.log(total);

  document.getElementById("resultNew").textContent = total;
}

function Six() {
  let num = document.getElementById("resultNew").textContent;
  console.log(num);

  let total = num + 6;
  console.log(total);

  document.getElementById("resultNew").textContent = total;
}

function Seven() {
  let num = document.getElementById("resultNew").textContent;
  console.log(num);

  let total = num + 7;
  console.log(total);

  document.getElementById("resultNew").textContent = total;
}

function subtration() {
  let num = document.getElementById("resultNew").textContent;

  let total = num + " - ";
  document.getElementById("resultNew").textContent = total;
}

function subtration() {
  let num = document.getElementById("resultNew").textContent;

  let total = num + " + ";
  document.getElementById("resultNew").textContent = total;
}


function equale() {
  let num = document.getElementById("resultNew").textContent;
  console.log(num);

  let operatormatch = num.trim().match(/[-]/);
  let operator = operatormatch[0];

  let parts = num.split(operator);
  console.log(parts);

  let n1 = Number(parts[0]);
  let n2 = Number(parts[1]);

  let total = 0;

  if (operator == "-") {
    total = n1 - n2;
  } else if (operator == '+') { 
    total = n1 + n2 ;
  }

  console.log(total);
  document.getElementById("resultNew").textContent = total;


} 