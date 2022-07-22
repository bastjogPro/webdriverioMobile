import Gestures from '../../../helpers/Gestures'
import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element est coche
 * @param  {String} locateur - element a verifier
 */
export default (locateur) => {

    //Recuperation du locateur reel
    var locateur2 = getLocateur(locateur)

    const element = $(locateur2)

    if(element.getAttribute('checked')=="false"){
        throw new Error("L'element "+locateur+" n'est pas coche" )
    }

};
