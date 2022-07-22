import getLocateur from "../../mapping/fonctions/locateurs";

/**
 * Cette fonction permet de glisser un element d'un point A(x, y) vers un point B(x,y).
 * @param  {String} aliasLocateur - element a glisser vers la gauche
 */

export default (aliasLocateur) => {	
        
  //Recuperation du locateur a partir de son alias
  const locateur = getLocateur(aliasLocateur);

  //Rechercher l'element par son locateur
  const element = $(locateur);

  //Scroller vers le haut tant que "element" n'est pas affiche
  var nbScroll = 0;
  while (!element.isDisplayed() && nbScroll < 5) {
    Gestures.swipeUp(0.5);
    nbScroll++;
  }
  
  //Sinon, scroller vers le bas tant que "element" n'est pas affiche
  nbScroll = 0;
  while (!element.isDisplayed() && nbScroll < 5) {
  Gestures.swipeDown(0.5);
  nbScroll++;
  }

  //Afficher dans la Log la position initiale (x,y) de l'element a glisser vers la gauche
  //Cette donnee est necessaire pour determiner (x, y) de depart et (x, y) d'arrivee
  var xLocalisation = element.getLocation('x');
  var yLocalisation = element.getLocation('y');
  console.log("La position initiale du '" + aliasLocateur + "' est : { x:" + xLocalisation + ", y:" + yLocalisation + " }");

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  N.B : Pour utiliser cette fonction, il faut determiner pour chaque "locateur" ces (x, y) de depart et (x, y) d'arrivee
  */ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  switch (aliasLocateur) {
      case "Bloc Produit 1 - Panier PART":
          browser.touchAction([
            { action: 'press', x: 250, y: 820 },
            { action: 'wait', ms: 1000},
            { action: 'moveTo', x: 0, y: 820 },
            'release'
          ])
          break;
      default:
          throw new Error("L'element a swiper vers la gauche  n'est pas definie");
  }
}