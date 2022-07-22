import { Given, When, Then } from 'cucumber';

import fermerApplication from '../../support/commun/navigation/fermerApplication';
import swipeHaut from '../../support/commun/navigation/swipeHaut';
import swipeHautXFois from '../../support/commun/navigation/swipeHautXFois';
import swipeBas from '../../support/commun/navigation/swipeBas';
import swipeBasXFois from '../../support/commun/navigation/swipeBasXFois';
import attendreSecondes from '../../support/commun/navigation/attendreSecondes';
import retourArriere from '../../support/commun/navigation/retourArriere';
import retourHautDePage from '../../support/commun/navigation/retourHautDePage';
import swipeElementGauche from '../../support/commun/navigation/swipeElementGauche';


When(
    /^Je ferme l'application$/,
    fermerApplication
);

When(
    /^Je swipe vers le haut$/,
    swipeHaut
);

When(
    /^Je swipe vers le haut "([^"]*)?" fois$/,
    swipeHautXFois
);

When(
    /^Je swipe vers le bas$/,
    swipeBas
);

When(
    /^Je swipe vers le bas "([^"]*)?" fois$/,
    swipeBasXFois
);

When(
    /^Je swipe "([^"]*)?" vers la gauche$/,
    swipeElementGauche
);

When(
    /^J'attends "([^"]*)?" secondes$/,
    attendreSecondes
);

When(
    /^Je retourne en arriere$/,
    retourArriere
);

When(
    /^Je retourne en haut de page$/,
    retourHautDePage
);
