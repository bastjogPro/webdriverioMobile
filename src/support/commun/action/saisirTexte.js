import getLocateur from '../../mapping/fonctions/locateurs';
import Gestures from '../../../helpers/Gestures';

/**
 * Saisir un texte
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
export default (texteASaisir, locateur) => {

    locateur = getLocateur(locateur);

    const element = $(locateur);

    var nbScroll  = 0;
    while (!element.isDisplayed() && nbScroll < 5) {
        Gestures.swipeUp(0.5);
        nbScroll++;
    }

    nbScroll = 0;
    while (!element.isDisplayed() && nbScroll < 5) {
        Gestures.swipeDown(0.5);
        nbScroll++;
    }

    try {
        element.clearValue();
        element.setValue(texteASaisir);

    } catch {
        throw new Error("La saisie du '" + texteASaisir + "' dans l'element '" + locateur + "' a echoue");
    }
}
