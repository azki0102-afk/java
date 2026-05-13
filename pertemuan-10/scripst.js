let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

box1.addEventListener("click", function() {
  box1.classList.toggle("blue");
});

box2.addEventListener("click", function() {
  box2.classList.toggle("green");
});

box3.addEventListener("click", function() {
  box3.classList.toggle("yellow");
});