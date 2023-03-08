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

// Soumission du formulaire
let form = document.getElementById("reserve");
form.addEventListener('submit', validate);

var formValid = document.getElementById("boutonEnvoi");

// Fonction qui permet de vérifier si le formulaire contient des erreurs
function validate(event){
  let validityForm = true;
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let nbrConcours = document.getElementById("quantity").value;
  var checkLoca = document.querySelector('input[name="location"]:checked'); 
  let acceptCondition = document.getElementById("checkbox1").checked;

  var caractere = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;


  // Vérifie si le prénom est vide ou s'il est inférieur à 2 caractères
  if(firstName == '' || firstName.length < 2){
    document.getElementsByClassName("formData")[0].getAttribute("data-error");
    document.getElementsByClassName("formData")[0].setAttribute("data-error-visible", "true");
    validityForm = false;
  }
  
  // Vérifie si le nom est vide ou s'il est inférieur à 2 caractères
  if(lastName == '' || lastName.length < 2){
    document.getElementsByClassName("formData")[1].getAttribute("data-error");
    document.getElementsByClassName("formData")[1].setAttribute("data-error-visible", "true"); 
    validityForm = false;
  }

  // Vérifie si l'adresse mail est vide ou si sa structure est respectée
  if(caractere.test(email) == '' || !caractere.test(email)){
    document.getElementsByClassName("formData")[2].getAttribute("data-error");
    document.getElementsByClassName("formData")[2].setAttribute("data-error-visible", "true");
    validityForm = false;
  }
  
  // Vérifie si le champs est vide
  if(nbrConcours == ''){
    document.getElementsByClassName("formData")[4].getAttribute("data-error");
    document.getElementsByClassName("formData")[4].setAttribute("data-error-visible", "true");
    validityForm = false;
  }
   
  // Vérifie si une location a été sélectionnée
  if(checkLoca == null) {   
    document.getElementsByClassName("formData")[5].getAttribute("data-error");
    document.getElementsByClassName("formData")[5].setAttribute("data-error-visible", "true");
    validityForm = false;  
  }   
  
  // Vérifie si les conditions d'utilisation ont été acceptées
  if(acceptCondition == false){
    document.getElementsByClassName("formData")[6].getAttribute("data-error");
    document.getElementsByClassName("formData")[6].setAttribute("data-error-visible", "true");
    validityForm = false;
  }

  // Le formulaire n'est pas envoyé s'il y a une erreur
  if(validityForm == false){
    event.preventDefault();
    alert('Le formulaire est incorrect');
  }

}

formValid.addEventListener('click', validate);
