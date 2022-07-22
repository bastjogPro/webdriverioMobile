import getLocateur from '../../mapping/fonctions/locateurs';
import attendreSecondes from '../../../support/commun/navigation/attendreSecondes';

/**
 * Taper sur un element si besoin
 * @param  {String} locateur - locateur sur lequel taper
 */
export default (locateur) => {

    locateur      = getLocateur(locateur);

    const element = $(locateur);

    var elementDisplayed = false;
    var n = 0;

    while (n < 3) {
        if (element.isDisplayed() == true) {
            elementDisplayed = true;
            break;
        } else {
            attendreSecondes(1);
            n++;
        }
    }

    if(elementDisplayed == true) {
        element.click();
    }
}
