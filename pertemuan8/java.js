let button = document.getElementById("click");

button.addEventListener("click", () => {
  alert("Button ini sedang diclick");
});

let btn = document.getElementById("click2");
btn.addEventListener("click", () => {
  alert("Button ini sedang diclick");
});

let btn3 = document.getElementById("click3");

btn3.addEventListener("click", () => {
  alert("Button");
  console.log("hallo");

  let paragraphElement = document.createElement("p");
  paragraphElement.textContent = "paragraf baru";
  document.getElementById("kosong").appendChild(paragraphElement);
});
