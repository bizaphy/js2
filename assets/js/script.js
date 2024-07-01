function pintar(elemento, color = "") {
  elemento.style.backgroundColor = color;
}
const ele1 = document.getElementById("ele1");
ele1.addEventListener("click", function () {
  pintar(ele1, "yellow");
});