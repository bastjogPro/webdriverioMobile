# Automatisation Android

Projet d'automatisation des tests fonctionnels effectués sur Android


## Execution des tests en local (emulateur)

1. Configurer le fichier de configuration (_wdio.conf.js_)
Les valeurs a modifier sont principalement :
- capabilities - browserName
_Definition du navigateur a utiliser_
- capabilities - maxInstances 
_Definition du nombre d'instances de navigateur a ouvrir en parrallele_
- capabilities - --headless 
_Definition du mode headless ou non_
- capabilities - deviceName
_Definition de l'emulateur utilisé (taper ```adb devices``` dans le cmd pour connaitre le nom de l'emulateur)_
- capabilities - app
_Definition de l'apk a utiliser_

_Chaque valeur importante est documentée dans le fichier de configuration._

2. Lancer le serveur appium ainsi que appium inspector en local (127.0.0.1) sur le port indique dans le fichier de configuration (4723 de base)

3. Exéxuter la commande dans le terminal ```npm run wdio:Android```


## Génération du rapport d'exécution

Pour chaque feature exécutée, un fichier .json est généré automatiquement, contenant toutes les informations utiles telles que le résultat, le temps d'exécution, le screenshot de l'erreur etc.

Deux commandes sont utilisées concernant le rapport d'exécution : 

```nodejs
npm run wdio:viderRapports
```
Permet de supprimer les fichiers logs & les rapports précédents

```nodejs
npm run wdio:genererRapport
```
Permet de générer un rapport HTML à partir des fichiers json créés automatiquement au fil de l'exécution
