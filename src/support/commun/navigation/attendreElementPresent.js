import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * Attendre la presence d'un element
 * @param  {String} locateur - element a attendre
 */
export default (locateur) => {

    locateur = getLocateur(locateur)

    const element = $(locateur)

    element.waitForExist(true);
}
