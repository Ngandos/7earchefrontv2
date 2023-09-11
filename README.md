# 7earchefrontv2

Application 7eArche Projet Soutenance CQP DNT OCTO/DEMOS

## Get Started

## Telecharger le package d'installation de NodeJS a partir du site web de Node JS

      Prendre soin de verifier la version compatible a L'OS utilisé pui installer le package

         Link -> https://nodejs.org/en/download

## Telecharger et installer Installer NVM

      L'installation de NVM est recommandée pour assurer l'installation de la bonne version de NodeJs
      La documentationn d'installation est ici :

      -> https://github.com/nvm-sh/nvm

## Gestion de la version de nodeJS

      Le changement de version de NodeJs (se base sur le fichier .nvmrc)

      ->   `nvm use`

## Prérequis pour la récupération des sources

Ouvrir un terminal puis créer un repertoire

      -> mkdir nom du repertoire

Se placer dans le repertoire créé

      -> cd nom du repertoire

## Recuperation des sources

-> git clone https://github.com/Ngandos/7earchefrontv2

## Installation des dépendances du projet, via [Yarn](https://yarnpkg.com/).

-> `yarn install`

## Lancement du projet (développement):

-> `yarn run dev`

### Pour formatter le code:

-> `yarn run lint:fix`

### Pour lancer les test:

-> `yarn run test`

### Pour mettre à jour les snapshots:

-> `yarn run test -u

## Déploiement

### Installation initiale

    brew install heroku/brew/heroku

### Configuration de Heroku

1. Créer un compte Heroku avec votre addresse octo puis demander les accès à Heroku à l'admin

2. Ajouter la ligne suivante à la fin de votre .bashrc ou .zshrc:

   `export HEROKU_ORGANIZATION=Wakanda`

3. Dans le folder du projet, se connecter à Heroku avec `heroku login` lancer la commande `heroku apps`.

Normalement, il faudrait avoir un message comme celui-ci:

```
SeptArche-front (eu)
SeptArche-front-demo (eu)
```

4. Ajouter les remotes de heroku pour le deploy **depuis le répertoire du projet**:

<!-- heroku git:remote -a SeptArche-front
heroku git:remote -a SeptArche-front-demo -->

### Pour l'env de demo:

Aller sur https://dashboard.heroku.com/apps et selectionner l'app SeptArche-front-demo puis clicker sur le tab Settings pour avoir le lien git URL:

`git remote add herokudemo https://git.heroku.com/SeptArche-front-demo.git`

### Pour l'env de prod:

Suivre les mêmes étapes pour l'app SeptArche-front:

`git remote add herokuprod https://git.heroku.com/SeptArche-front.git`

5. Regarder si les remotes ont bien étés ajoutés avec `git remote -v`:

```
herokudemo	https://git.heroku.com/SeptArche-front-demo.git (fetch)
herokudemo	https://git.heroku.com/SeptArche-front-demo.git (push)
herokuprod	https://git.heroku.com/SeptArche-front.git (fetch)
herokuprod	https://git.heroku.com/SeptArche-front.git (push)
```

### Déployer l'application

Pour déployer main sur les environnements Heroku il faut faire un push sur l'environement souhaité avec la branche à déployer:

1. Pour déployer la branche `demo` sur l'environnement de démo:

   git push herokudemo demo:main

2. Pour déployer la branche `main` sur l'environnement de prod:

   git push herokuprod main:main

