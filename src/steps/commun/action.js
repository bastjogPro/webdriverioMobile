import { Given,When,Then } from 'cucumber';
import saisirTexte from '../../support/commun/action/saisirTexte';
import selectionnerOption from '../../support/commun/action/selectionnerOption';
import taperSur from '../../support/commun/action/taperSur';
import taperSurSiBesoin from '../../support/commun/action/taperSurSiBesoin';
import logConsole from '../../support/commun/action/logConsole';
import taperSurTantQueEstAffiche from '../../support/commun/action/taperSurTantQueEstAffiche';


When(
    /^Je tape sur "([^"]*)?"$/,
   taperSur
);

When(
    /^Je tape sur "([^"]*)?" si besoin$/,
   taperSurSiBesoin
);

When(
    /^Je tape sur "([^"]*)?" tant qu'il est affiche$/,
    taperSurTantQueEstAffiche
);

When(
    /^Je saisis "([^"]*)?" dans "([^"]*)?"$/,
   saisirTexte
);

When(
    /^Je selectionne "([^"]*)?" dans la liste "([^"]*)?"$/,
   selectionnerOption
);

When(
    /^Je log "([^"]*)?" dans la console$/,
   logConsole
);
