/**
 * Attendre X secondes
 * @param  {String} secondesAAttendre - nombre de secondes a attendre
 */
export default (secondesAAttendre) => {
    // Convertion en ms
    const msAAttendre = secondesAAttendre * 1000

    // Attente de X ms
    browser.pause(msAAttendre)
};
