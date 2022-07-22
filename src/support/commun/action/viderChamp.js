import getLocateur from '../../mapping/fonctions/locateurs';
import Gestures from '../../../helpers/Gestures';

/**
 * Vider un champ qui contient un texte
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
export default (locateur) => {

    //Recuperation du locateur a partir de son alias
    locateur      = getLocateur(locateur);

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

    try {
        element.clearValue();

    } catch {
        throw new Error("Effacement du contenu de l'element '" + locateur + "' a echoue");
    }
}
