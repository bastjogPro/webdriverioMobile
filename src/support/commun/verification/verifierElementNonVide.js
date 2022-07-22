import Gestures from '../../../helpers/Gestures'
import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * verifier que element n'est pas vide
 * @param  {String} locateur - element a verifier
 */
export default (locateur) => {

    //Recuperation du locateur reel
    var locateur2 = getLocateur(locateur)

    const element = $(locateur2)


    var nbScroll = 0

    while (!element.isDisplayed() && nbScroll < 5) {
        Gestures.swipeUp(0.5)
        nbScroll++
    }

    nbScroll = 0;
    while (!element.isDisplayed() && nbScroll < 5) {
        Gestures.swipeDown(0.5);
        nbScroll++;
    }


    var texteElement = element.getText().replace(/\n/g,' ');

    if(texteElement==""){
        throw new Error("L'element "+locateur+" est vide")
    }

};
