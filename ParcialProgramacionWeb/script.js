//Este script es para la pagina resivido2.html


var urlParams = new URLSearchParams(location.search);
var name = urlParams.get("name");
var email = urlParams.get("email");
var phone = urlParams.get("phone");


document.getElementById("name_p").innerHTML = name;
document.getElementById("email_p").innerHTML = email;
document.getElementById("phone_p").innerHTML = phone;

