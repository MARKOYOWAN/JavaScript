// Déclaration du variable voiture
// Sélection la classe voiture
var maVoiture = document.querySelector('.voiture');

// Positionner la voiture à gauche (position initiale)
var positionInitiale = maVoiture.style.left;
console.log('Voiture style: ', maVoiture.style);
alert(maVoiture.style);


// fonction pour faire bouger la viture vers l'avant ou faire la marche arrière
function faireBouger(direction,rotation) {

  // inspecter la navigateur pour afficher la console et voire s'il y a une erreur 
  console.error('============================');
  console.log('Rotation', rotation);
  console.log('Direction >>>>>', direction);
  console.log('Position initiale >>>>>', positionInitiale);
  positionInitiale = +positionInitiale + direction;
  console.log('Nouvelle position >>>>>', positionInitiale);
  document.querySelector('.voiture').style.left = positionInitiale + 'px';
  stop();
} 


//------------------Rotation-------------------

// Déclaration du variable rocket pour la séléction du classe voiture
var rocket = document.querySelector('.voiture');

// Déclaration du variable rocket pour la séléction du classe voiture
var btn = document.querySelector('.toggle');

// on declare la variable rotate false : valeur initiale
var rotate = false;

// On déclare la variable runner vide;
var runner;

// On initialise la valeur du degrees a 0 parceque on met la valeur initiale à 0
var degrees = 0;

// fonction pour Débuter la rotation du voiture
function start(){
  // La méthode setInterval () appelle une fonction 
  //ou évalue une expression à des intervalles spécifiés (en millisecondes).
    runner = setInterval(function(){
        degrees++;
        // La propriété transform applique une transformation 2D ou 3D à un élément. Cette propriété vous permet de faire pivoter, 
        // mettre à l'échelle, déplacer, incliner, etc., des éléments.
        rocket.style.webkitTransform = 'rotate(' + degrees + 'deg)';
    },50)
}

// Fonction pour faire stoper la rotation
function stop(){
    clearInterval(runner);
}

// Ici on met une condition sur la façon qu'on click le button tourner
// si n click une fois c'est la voiture tourne et si on le click apres c'est que la voiture tourne au sens conctraire
btn.addEventListener('click', function(){
    if (!rotate){
        rotate = true;
        start();
    } else {
        rotate = false;
        stop();
    }
})



