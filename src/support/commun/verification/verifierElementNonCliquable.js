import getLocateur from '../../mapping/fonctions/locateurs';
import Gestures    from '../../../helpers/Gestures';
import attendreSecondes from '../navigation/attendreSecondes';
require('expect-webdriverio');

/**
 * Verifier que element n'est pas cliquable
 * @param  {String} locateur - Element a verifier
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

    attendreSecondes(1);

    expect(element).not.toBeEnabled();

}