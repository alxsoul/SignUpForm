//get the button
var btn = document.getElementById("modalbtn");
//get the modelDiv
var modalDiv = document.getElementById("modalDiv");
//get close button
var closeBtn = document.getElementById("closeBtn");

//get the form and input fileds
var form = document.forms.subForm;
var username = form.name;
var email = form.email;
var password = form.password;

//get the alert texts
var nameAlert = document.getElementById("userNameAlert");
var emailAlert = document.getElementById("userEmailAlert");
var passwordAlert = document.getElementById("userPassowrdAlert");


//adding the eventlisteners
closeBtn.addEventListener("click", closeModal);

btn.addEventListener("click", showModal);

window.addEventListener("click", outsideClick);

function showModal(){
  $(modalDiv).fadeIn(500);
  $(username).val("");
  $(email).val("");
  $(password).val("");
  $(nameAlert).html("");
  $(nameAlert).removeClass("alert");
  $(emailAlert).html("");
  $(emailAlert).removeClass("alert");
  $(passwordAlert).html("");
  $(passwordAlert).removeClass("alert");

}

function closeModal(){
  $(modalDiv).fadeOut(500);
}

function outsideClick(x){
  if(x.target == modalDiv){
    $(modalDiv).fadeOut(500);
  }
}


//form validation
$(form).on("submit", validation);

function validation(){
  if(username.value == ""){

    $(nameAlert).html("Please enter a username");
    $(nameAlert).addClass("alert");


    return false;
  }
  if (email.value == ""){
    $(emailAlert).html("Please enter an email");
    $(emailAlert).addClass("alert");

    return false;
  }

  if(password.value == "") {
    $(passwordAlert).html("Please enter an email");
    $(passwordAlert).addClass("alert");

    return false;
  }else {
    return true;
  }
};

//listening to the blur event
username.addEventListener("blur", nameVal);
email.addEventListener("blur", emailVal);
password.addEventListener("blur", passVal);

function nameVal(){
  username.style.textTransform = "capitalize";
  if(username.value != ""){
    $(nameAlert).html("");
    $(nameAlert).removeClass("alert");
  }else{
    $(nameAlert).html("Please enter a username");
    $(nameAlert).addClass("alert");
  }
};

function emailVal(){
  if(email.value != ""){
    $(emailAlert).html("");
    $(emailAlert).removeClass("alert");
  }else{
    $(emailAlert).html("Please enter an email");
    $(emailAlert).addClass("alert");
  }
};

function passVal(){
  if(password.value != ""){
    $(passwordAlert).html("");
    $(passwordAlert).removeClass("alert");
  }else{
    $(passwordAlert).html("Please enter a password");
    $(passwordAlert).addClass("alert");
  }
};




/*
  }else if (username.value.length < 3) {
    $(nameAlert).html("username should contain at least 3 letters");
    $(nameAlert).addClass("alert");
    $(username).val("");
    return false;
  }else{
    $(nameAlert).html("");
    return true;
  }
*/

console.log(username.value.length);
