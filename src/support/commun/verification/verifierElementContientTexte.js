import Gestures from '../../../helpers/Gestures'
import getLocateur from '../../mapping/fonctions/locateurs'
import { assert, expect } from 'chai';
import { getTextOfElement } from '../../../helpers/utils';

/**
 * verifier que element contient le texte attendu
 * @param  {String} locateur - element a verifier
 * @param  {String} texte - texte a verifier
 */
export default (locateur, texte) => {

    //Recuperation du locateur reel
    locateur = getLocateur(locateur)

    const element = $(locateur)


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
    texteElement = texteElement.replace("  "," ")

    expect(texteElement).to.have.string(texte);

};
