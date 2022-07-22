import { Given,When,Then } from 'cucumber';

import verifierElementPresent from '../../support/commun/verification/verifierElementPresent';
import verifierElementContientTexte from '../../support/commun/verification/verifierElementContientTexte';
import verifierElementAbsent from '../../support/commun/verification/verifierElementAbsent';
import verifierElementAfficheEcran from '../../support/commun/verification/verifierElementAfficheEcran';
import verifierElementNonAfficheEcran from '../../support/commun/verification/verifierElementNonAfficheEcran';
import verifierElementNonVide from '../../support/commun/verification/verifierElementNonVide';
import verifierElementNeContientPasTexte from '../../support/commun/verification/verifierElementNeContientPasTexte';
import verifierElementCoche from '../../support/commun/verification/verifierElementCoche';
import verifierElementCliquable from '../../support/commun/verification/verifierElementCliquable';
import verifierElementNonCliquable from '../../support/commun/verification/verifierElementNonCliquable';
import verifierTexteAfficheEcran from '../../support/commun/verification/verifierTexteAfficheEcran';



When(
    /^Je verifie que le texte "([^"]*)?" est affiche a l'ecran$/,
    verifierTexteAfficheEcran
);

When(
    /^Je verifie la presence de "([^"]*)?"$/,
    verifierElementPresent
);

When(
    /^Je verifie l'absence de "([^"]*)?"$/,
    verifierElementAbsent
);

When(
    /^Je verifie que "([^"]*)?" est affiche a l'ecran$/,
    verifierElementAfficheEcran
);

When(
    /^Je verifie que "([^"]*)?" n'est pas affiche a l'ecran$/,
    verifierElementNonAfficheEcran
);

When(
    /^Je verifie que "([^"]*)?" contient "([^"]*)?"$/,
    verifierElementContientTexte
);

When(
    /^Je verifie que "([^"]*)?" ne contient pas "([^"]*)?"$/,
    verifierElementNeContientPasTexte
);

When(
    /^Je verifie que "([^"]*)?" n'est pas vide$/,
    verifierElementNonVide
);


When(
    /^Je verifie que "([^"]*)?" est coche$/,
    verifierElementCoche
);

When(
    /^Je verifie que "([^"]*)?" est cliquable$/,
    verifierElementCliquable
);

When(
    /^Je verifie que "([^"]*)?" n'est pas cliquable$/,
    verifierElementNonCliquable
);