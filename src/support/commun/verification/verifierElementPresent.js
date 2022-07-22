import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import Gestures from '../../../helpers/Gestures';
import { assert, expect } from 'chai';

/**
 * verifier que element est affiche
 * @param  {String} locateur - element a verifier
 */
export default (locateur) => {

    //Recuperation du locateur reel
    locateur = getLocateur(locateur)

    const element = $(locateur)

    attendreSecondes(1);
    var elementPresent = false;

    if (element.isDisplayed() == false) {

        var nbScroll = 0;
        while (nbScroll < 5) {
            Gestures.swipeUp(0.5);
            nbScroll++;

            if(element.isDisplayed() == true) {
                elementPresent = true;
                break;
            }
        }

        nbScroll = 0;
        while (nbScroll < 5 && elementPresent == false) {
            Gestures.swipeDown(0.5);
            nbScroll++;

            if(element.isDisplayed() == true) {
                elementPresent = true;
                break;
            }
        } 
    } else {
        elementPresent = true;
    }


    if(elementPresent == false){
        throw new Error("L'element '" + locateur + "' n'est pas present");
    }
  
};
