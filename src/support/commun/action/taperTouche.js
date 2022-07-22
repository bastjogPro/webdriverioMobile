
/**
 * Taper sur une touche
 * @param  {String} touche - touche sur laquelle taper
 */
export default (touche) => {

    switch (touche) {
        case "tab":
            touche = 61;
            break;
        case "entree":
            touche = 66;
            break;
        case "espace":
            touche = 62;
            break;
        case "haut":
            touche = 19;
            break;
        case "bas":
            touche = 20;
            break;
        case "page_haut":
            touche = 92;
            break;
        case "page_bas":
            touche = 93;
            break;
        case "home":
            touche = 82;
            break;
        case "retour":
                touche = 4;
                break;
        default:
            throw new Error("La touche n'est pas definie");
    }

    driver.pressKeyCode(touche);
}
