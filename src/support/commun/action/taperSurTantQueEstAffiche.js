import getLocateur from '../../mapping/fonctions/locateurs';
import attendreSecondes from '../../../support/commun/navigation/attendreSecondes';

/**
 * Taper sur un element si besoin
 * @param  {String} aliasLocateur - locateur sur lequel taper
 */
export default (aliasLocateur) => {

    const locateur = getLocateur(aliasLocateur);
    const element  = $(locateur);

 
    var n = 0;
    while (element.isDisplayed() == true && n < 5) {

        attendreSecondes(1);
        if (element.isDisplayed() == true) {
            element.click();
            attendreSecondes(1);
        } else {
            break;
        }

        n++;
    }
}
