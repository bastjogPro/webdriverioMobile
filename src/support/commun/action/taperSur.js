import getLocateur from '../../mapping/fonctions/locateurs';

/**
 * Taper sur un element
 * @param  {String} locateur - locateur sur lequel taper
 */
export default async (locateur) => {

    locateur      = await getLocateur(locateur);

    await $(locateur).waitForExist({
        timeout: 10000
    }); 

    var element = await $(locateur);

    try {
        await element.click()
    } catch {
        throw new Error("Le tape sur l'element '" + locateur + "' a echoue");
    }
}
