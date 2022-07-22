import taperSur from '../action/taperSur';
import taperTouche from '../action/taperTouche';
import attendreSecondes from '../navigation/attendreSecondes';
import taperSurSiBesoin from './taperSurSiBesoin';



/**
 * Selectionner une valeur dans une liste
 * @param  {String} valeur - valeur a selectionner
 * @param  {String} locateur - liste
 */
export default (valeur, locateur) => {

    //Taper sur la liste
    taperSur(locateur);
    taperSurSiBesoin(locateur);
    attendreSecondes(2);

    var nbHaut = 0;
    var nbBas  = 0;

    if ($('android=new UiSelector().textContains("' + valeur + '").instance(0)').isDisplayed()) {

        $('android=new UiSelector().textContains("' + valeur + '").instance(0)').click();
    }
    else {
        while (nbHaut < 25) {
            taperTouche("page_haut");
            nbHaut++;
        }

        while (!($('android=new UiSelector().textContains("' + valeur + '").instance(0)').isDisplayed()) && nbBas < 50) {
            taperTouche("page_bas");
            nbBas++;
        }

        $('android=new UiSelector().textContains("' + valeur + '").instance(0)').click();
    }
}
