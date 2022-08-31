# Automatisation Android

Projet d'automatisation des tests fonctionnels effectués sur Android


## Prérequis d'installation

- Node (version > 12, pour vérifier ‘node –v’ dans le terminal) Download | Node.js (nodejs.org) 
- Installer Android Studio (Download Android Studio & App Tools - Android Developers) 
- Installer Appium Server (Release v1.22.3-4 · appium/appium-desktop (github.com)) 
- Installer Appium Inspector (Releases·appium/appium-inspector(github.com)) 
- Télécharger jdk (Latest releases | Adoptium) 
- Configurer les variables d’environnement ANDROID_HOME et JAVA_HOME (How to Set Android SDK Path in Windows 10 (programsbuzz.com))(How to set JAVA_HOME in Windows 10 | Java Tutorial Network) 
- Une fois le projet récupéré et ouvert dans VSC, faire la commande ‘npm install’ pour installer les packages contenus dans le dossier node_modules. 


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

2. Lancer l'émulateur Android

3. Lancer le serveur appium ainsi que appium inspector en local (127.0.0.1) sur le port indique dans le fichier de configuration (4723 de base)

4. Exéxuter la commande dans le terminal ```npm run wdio:Android```


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
