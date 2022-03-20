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
  );

/* Compte à rebours */
  let affiche_temps = $("#timer");

  function compte_a_rebours(){
    let date_actuelle = new Date();
    let date_fin = new Date("Mon April 11 2022 00:00:00");

    let total_secondes = (date_fin - date_actuelle) / 1000;

    let prefixe = "Fin de cette collection dans </p><p> ";

    if (total_secondes > 0){
      let jours = Math.floor(total_secondes / (60 * 60 * 24));
      let heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
          minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
          secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

          let et = "et";
          let mot_jour = "jours,";
          let mot_heure = "heures,";
          let mot_minute = "minutes";
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
      
          affiche_temps.innerHTML ='<p>'+ prefixe + jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde +'</p>';
    }
    else{
      affiche_temps.innerHTML = '<p> Vente terminée! </p>';
    }  
    setInterval(compte_a_rebours, 1000);  
  }
  compte_a_rebours();

/* Affichage caractéristiques */
  $$(".description__more").forEach( plus =>{
    plus.addEventListener("click", function(){
    plus.closest(".description").classList.toggle('description--open');
    });
  });

});