import attendreSecondes from "../navigation/attendreSecondes";

//Cette fonction est utilisee pour afficher la page source d'une page de l'App PART NG dans la console
//Le contenu de la page source peut servir pour determiner le locateur d'un element par exemple...etc
export default (TexteVerifie) => {

    var TexteAffiche    = false;
    var textePageSource = "";
 
    var n = 0;
    while (TexteAffiche == false && n < 5){

        textePageSource = browser.getPageSource().toString();

        if(textePageSource.includes(TexteVerifie) == true) {
            TexteAffiche = true;
            break;
        } 

        attendreSecondes(1);
        n++;
    }

    if(TexteAffiche == false){
        throw new Error("Le texte '"+ TexteVerifie +"' n'est pas affiche à l'ecran");
    }

}