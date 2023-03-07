function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalBtnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
	modalbg.style.display = "none";
}

// validité du formulaire
let form = document.getElementById("reserve");
form.addEventListener('submit', validate);


function emailValidation(email) {
  var caractere = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return caractere.test(email);
}

function validate(event){
  let validityForm = true;
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let adrEmail = document.getElementById("email").value;
  let nbrConcours = document.getElementById("quantity").value;
  var checkLoca = document.getElementsByName("location");
  let acceptCondition = document.getElementById("checkbox1").checked;
  
  if(firstName == '' || firstName.length < 2){
    document.getElementsByClassName("formData")[0].getAttribute("data-error");
    document.getElementsByClassName("formData")[0].setAttribute("data-error-visible", "true");
    validityForm = false;
  }

  if(lastName == '' || lastName.length < 2){
    document.getElementsByClassName("formData")[1].getAttribute("data-error");
    document.getElementsByClassName("formData")[1].setAttribute("data-error-visible", "true");
    validityForm = false;
  }

  if(adrEmail == ''){
    validityForm = false;
  }
  
  if(nbrConcours == ''){
    validityForm = false;
  }

  for (let i = 0; i < checkLoca.length; i++) {
    if(checkLoca[i].checked) {
      document.getElementsByClassName("formData")[5].getAttribute("data-error");
      document.getElementsByClassName("formData")[5].setAttribute("data-error-visible", "");
      checkLoca[i].value = i;
      validityForm = true;
      break;
    }
    else{
      document.getElementsByClassName("formData")[5].getAttribute("data-error");
      document.getElementsByClassName("formData")[5].setAttribute("data-error-visible", "true");
      validityForm = false;
    }
  }
  
  if(acceptCondition == false){
    document.getElementsByClassName("formData")[6].getAttribute("data-error");
    document.getElementsByClassName("formData")[6].setAttribute("data-error-visible", "true");
    validityForm = false;
  }

  if(!validityForm){
    event.preventDefault();
    alert('Le formulaire est incorrect');
  }

  
 /* form.submit();
  console.log("Formulaire envoyé !");*/
 
}


