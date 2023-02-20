
var checkbox = document.getElementById("exampleCheck1");

document.getElementById("enfermedad").style.display = "none";
var hiddenElement = document.getElementById("enfermedad");

checkbox.addEventListener("change", function() {
  if (!this.checked) {
    hiddenElement.style.display = "none";
  } else {
    hiddenElement.style.display = "block";
  }
});
