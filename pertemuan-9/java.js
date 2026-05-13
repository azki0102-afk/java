let btnAdd = document.getElementById("btnAdd");
let btnRemove = document.getElementById("btnRemove");
let btnToggle = document.getElementById("btnToggle");
let target = document.getElementById("target");

btnAdd.addEventListener("click", () => {
  target.textContent = "Class ditambahkan";
  target.classList.add("svcss");
});

btnRemove.addEventListener("click", () => {
  target.textContent = "Class dihapus";
  target.classList.remove("svcss");
});

btnToggle.addEventListener("click", () => {
  target.textContent = "Class ditoggle";
  target.classList.toggle("svcss");
});