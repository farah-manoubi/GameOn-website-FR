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

let form = document.getElementById("reserve");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";  
  form.style.display = "block";
}

// close modal form
function closeModal() {
	modalbg.style.display = "none";
  form.submit();
}

// Soumission du formulaire
let formValid = false;
const confirmation = document.querySelector(".confirme");
const btnFermer = document.querySelector("#boutonFermer");

// Fonction qui soumet le formulaire
form.addEventListener("submit", (event) =>{
  event.preventDefault();
  validate(event);

  // Si le formulaire est valide on affiche une page de confirmation
  if(formValid == true){
    form.style.display ="none";
    confirmation.style.display = "block";
    btnFermer.style.display = "block";
  }
});

// Fonction qui permet de vérifier si le formulaire contient des erreurs
function validate(event){
  let conditionValid = true;
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let email = document.getElementById("email");
  let birthDate = document.getElementById("birthdate");
  let nbrConcours = document.getElementById("quantity");
  var checkLoca = document.querySelector('input[name="location"]:checked'); 
  let acceptCondition = document.getElementById("checkbox1").checked;

  var caractere = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,10}(?:\.[a-z]{10})?)$/i;
  const today = new Date();
  const birth = new Date(birthDate.value);
  minDate = new Date('1923-01-01');
  
  

  // Vérifie si le prénom est vide ou s'il est inférieur à 2 caractères
  if(firstName.value == '' || firstName.value.length < 2){
    firstName.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    firstName.parentElement.setAttribute("data-error-visible", "");
  }
  
  // Vérifie si le nom est vide ou s'il est inférieur à 2 caractères
  if(lastName.value == '' || lastName.value.length < 2){
    lastName.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    lastName.parentElement.setAttribute("data-error-visible", "");
  }

  // Vérifie si l'adresse mail est vide ou si sa structure est respectée
  if(caractere.test(email.value) == '' || !caractere.test(email.value)){
    email.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    email.parentElement.setAttribute("data-error-visible", "");
  }

  // Vérifie si le champs de la date de naissance est vide
  if(birth.getTime() > today.getTime() || birthDate.value == '' || birth.getTime() < minDate){
    birthDate.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    birthDate.parentElement.setAttribute("data-error-visible", "");
  }
  
  // Vérifie si le champs des tournois est vide
  if(nbrConcours.value < 0 || nbrConcours.value == ''){
    nbrConcours.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    nbrConcours.parentElement.setAttribute("data-error-visible", "");
  }
   
  // Vérifie si une location a été sélectionnée
  if(checkLoca == null) {   
    document.getElementsByClassName("formData")[5].getAttribute("data-error");
    document.getElementsByClassName("formData")[5].setAttribute("data-error-visible", "true");
    conditionValid = false;  
  }else{
    document.getElementsByClassName("formData")[5].getAttribute("data-error");
    document.getElementsByClassName("formData")[5].setAttribute("data-error-visible", "");
  }
  
  // Vérifie si les conditions d'utilisation ont été acceptées
  if(acceptCondition == false){
    document.getElementsByClassName("formData")[6].getAttribute("data-error");
    document.getElementsByClassName("formData")[6].setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    document.getElementsByClassName("formData")[6].getAttribute("data-error");
    document.getElementsByClassName("formData")[6].setAttribute("data-error-visible", "");
  }

  // Le formulaire n'est pas envoyé s'il y a une erreur
  if(conditionValid == false){
    event.preventDefault();
  }else{
    formValid = true;
  }
}




