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
const close = document.querySelectorAll(".close");

// const closeForm = document.querySelectorAll('[close-Form]');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
modalbg.style.display = "block";
};

// close modal event
close.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
modalbg.style.display = "none";
};

// form check



const myForm = document.getElementById('myForm');

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const played = document.getElementById('played');
const city = document.querySelectorAll('location');
const birth = document.querySelectorAll('birthdate');

const regexForName =/^[a-zA-Z-\s]+$/;
const regexForEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexForNumber =/^[0-9]/;
const regExAge = /(19\d\d|20[0-3])(-\d\d){2}/;
const isAgeValid = regExAge.test(birth);

const firstBorder = document.getElementById('first');
const lastBorder = document.getElementById('last');
const emailBorder = document.getElementById('email');
const playedBorder = document.getElementById('played');
const birthDayBorder = document.getElementById('birthdate');

const firstErrorMsg = document.getElementById('firstErrorMsg');
const lastErrorMsg = document.getElementById('lastErrorMsg');
const emailErrorMsg = document.getElementById('emailErrorMsg');
const playedErrorMsg = document.getElementById('playedErrorMsg');
const cityErrorMsg = document.getElementById('cityErrorMsg');



      myForm.addEventListener('submit', function(e) {
          if(firstName.value.trim() == "") {
              firstErrorMsg.innerHTML = "le champs Prénom est requis";
              firstBorder.style.border = 'solid 2px red';
              e.preventDefault();
          } else if(regexForName.test(firstName.value) == false) {
              firstErrorMsg.innerHTML = "le champs doit comporter des lettres, des tirets uniquement";
              firstBorder.style.border = 'solid 2px red';
              e.preventDefault();
          }
          if(lastName.value.trim() == "") {
            lastErrorMsg.innerHTML = "le champs nom est requis";
            lastBorder.style.border = 'solid 2px red';
            e.preventDefault();
        } else if(regexForName.test(firstName.value) == false) {
          lastErrorMsg.innerHTML = "le champs doit comporter des lettres, des tirets uniquement";
            lastBorder.style.border = 'solid 2px red';
            e.preventDefault();
        }
          if(email.value.trim() == "") {
            emailErrorMsg.innerHTML = "l'email' est requis";
            emailBorder.style.border = 'solid 2px red';
            e.preventDefault();
          } else if(regexForEmail.test(email.value) == false) {
            emailErrorMsg.innerHTML = "le champs doit respecter le format e-mail uniquement";
            emailBorder.style.border = 'solid 2px red';
            e.preventDefault();
          }
          if(played.value.trim() == "") {
            playedErrorMsg.innerHTML = "veuillez indiquer un nombre";
            playedBorder.style.border = 'solid 2px red';
            e.preventDefault();
          } else if(regexForNumber.test(played.value) == false) {
            playedErrorMsg.innerHTML = "veuillez indiquer le nombre de tournois GameOn Auquel vous avez participé, 0 étant le minimum";
            playedBorder.style.border = 'solid 2px red';
            e.preventDefault();
          }         
      })

      function validateForm() {
        var radios = document.getElementsByName("location");
        var formValid = false;
    
        var i = 0;
        while (!formValid && i < radios.length) {
            if (radios[i].checked) formValid = true;
            i++;        
        }
    
        if (!formValid) {
          cityErrorMsg.innerHTML = "veuilez choisir une ville";
        }
        
        console.log(isAgeValid)
        if(isAgeValid) {
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
        birthdate.style.border = '0.19rem solid #279e7a';
        return true;
        }
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.classList.add(FormData.error);
        return formValid;
        ;
    };

 
