
var birthdateInput = document.getElementById("inputdate");
birthdateInput.addEventListener("change", function() {
  var birthdate = new Date(this.value);
  var today = new Date();
  var age = today.getFullYear() - birthdate.getFullYear();
  if (today.getMonth() < birthdate.getMonth() || (today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
    age--;
  }

  document.getElementById("result").textContent = "Tiene: " + age+ " años";

});


