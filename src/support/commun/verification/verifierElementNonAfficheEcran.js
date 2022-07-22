import getLocateur from '../../mapping/fonctions/locateurs';
import Gestures from '../../../helpers/Gestures';
/**
 * verifier que element est n'affiche pas a l'ecran
 * @param  {String} locateur - element a verifier
 */
export default (locateur) => {

    //Recuperation du locateur a partir de son alias
    locateur      = getLocateur(locateur);

    //Rechercher l'element par son locateur
    const element = $(locateur);


    var elementAffiche = false;

    if (element.isDisplayed() == false) {

        var nbScroll = 0;
        while (nbScroll < 5) {
            Gestures.swipeUp(0.5);
            nbScroll++;
            browser.pause(250);
    
            if(element.isDisplayed() == true) {
                elementAffiche = true;
                break;
            }
        }
    
        nbScroll = 0;
        while (nbScroll < 5 && elementAffiche == false) {
            Gestures.swipeDown(0.5);
            nbScroll++;
            browser.pause(250);
    
            if(element.isDisplayed() == true) {
                elementAffiche = true;
                break;
            }
        } 
    } else {
        elementAffiche = true;
    }
    
    if(elementAffiche == true){
        throw new Error("L'element '" + locateur + "' est affiche a l'ecran");
    }

}
