# 🏆 Les Zenika Awards

Application recensant toutes les meilleures citations entendues chez Zenika.  
Ce projet a pour but d'être un bac à sable pour tester différents outils.

## démarrage

Exécutez les commandes suivantes : 

Installez les dépendences : 

```bash
# Si vous n'avez pas pnpm
npm i -g pnpm

pnpm i
```

Démarrez le projet que vous voulez tester :

```bash
# Démarre l'api JSON server et le front classique (HTML / CSS & JS) via serve
pnpm start:vanilla

# Démarre l'api JSON server et le front Qwik
pnpm start:qwik
```

URLs : 
- front http://localhost:3000
- api http://localhost:3001

Exécutez les tests e2e :

```bash
# Démarre l'api JSON server et le front classique (HTML / CSS & JS) via serve
pnpm test:e2e:vanilla

# Démarre l'api JSON server et le front Qwik
pnpm test:e2e:qwik
```

Un rapport d'`audit` est généré par application dans le dossier `lighthouse`.

## API

L'api utilise [JSON server](https://github.com/typicode/json-server)  en se basant sur le fichier de configuration ``./api/db.json`.  
Il offre les endPoints suivants : 

- **CRUD** sur la ressource **Citation** http://localhost:3001/citations

Vous pouvez utiliser les fonctionnalités de [JSON server](https://github.com/typicode/json-server) décrient [ici](https://github.com/typicode/json-server#routes) (filtre, pagination, sort ...)

## Front

L'application propose deux pages :
- Page d’accueil affichant les différentes citations et permettant de voter pour celles-ci (+ ou -)
- Page d'ajout d'une citation
