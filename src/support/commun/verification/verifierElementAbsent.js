import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element est absent
 * @param  {String} locateur - element a verifier
 */
export default (locateur) => {

    //Recuperation du locateur reel
    const locateur2 = getLocateur(locateur)

    const element = $(locateur2)

    if(element.isDisplayed()){
        throw new Error("L'element '"+locateur+"' est present")
    }

};
