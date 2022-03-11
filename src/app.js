window.addEventListener('DOMContentLoaded', function(){

  function $(selector, el) { 
    if (!el) {el = document;} 
    return el.querySelector(selector); 
  } 
  function $$(selector, el) { 
    if (!el) {el = document;} 
    return Array.prototype.slice.call(el.querySelectorAll(selector)); 
  }

/*Réglages menu */
const menu = $(".header__menu");
const menuItems = $$(".menu__item");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    $(".menu__close").style.display = "none";
    $(".menu__icon").style.display = "block";
  } else {
    menu.classList.add("showMenu");
    $(".menu__close").style.display = "block";
    $(".menu__icon").style.display = "none";
  }
}

$(".header__hamburger").addEventListener("click", toggleMenu);


menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

/* Compte à rebours */
let compte_a_rebours = $(".timer");

function compte_a_rebours(){
    let date_actuelle = new Date();
    let date_fin = new Date("Fri Mar 26 2022 09:07:19");

    let total_secondes = (date_fin - date_actuelle) / 1000;

    let prefixe = "Fin de cette collection dans ";

    if (total_secondes < 0){
        prefixe = "Vente terminée il y a "; 
        total_secondes = Math.abs(total_secondes); 
    }

    if (total_secondes > 0){
      let jours = Math.floor(total_secondes / (60 * 60 * 24));
      let heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
          minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
          secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
      
      let et = "et";
      let mot_jour = "jours,";
      let mot_heure = "heures,";
      let mot_minute = "minutes,";
      let mot_seconde = "secondes";

    if (jours == 0){
      jours = '';
      mot_jour = '';
    }
    else if (jours == 1){
      mot_jour = "jour,";
    }

    if (heures == 0){
      heures = '';
      mot_heure = '';
    }
    else if (heures == 1){
      mot_heure = "heure,";
    }

    if (minutes == 0){
      minutes = '';
      mot_minute = '';
    }
    else if (minutes == 1){
      mot_minute = "minute,";
    }

    if (secondes == 0){
      secondes = '';
      mot_seconde = '';
      et = '';
    }
    else if (secondes == 1){
      mot_seconde = "seconde";
    }

    if (minutes == 0 && heures == 0 && jours == 0){
      et = "";
    }

    compte_a_rebours.innerHTML ='<p>'+ prefixe + jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde +'</p>';
  }
  else{
    compte_a_rebours.innerHTML = '<p>Fin de la vente.</p>';
  }

  let actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();
});