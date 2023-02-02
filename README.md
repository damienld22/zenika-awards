# 🏆 Les Zenika Awards

Application recensant toutes les meilleures citations entendues chez Zenika.  
Ce projet a pour but d'être un bac à sable pour tester différents outils.

## démarrage

Exécutez les commandes suivantes : 

```bash
npm i
# Démarre l'api JSON server et le front via serve
npm start
```

URLs : 
- front http://localhost:3000
- api http://localhost:3001

## API

L'api utilise [JSON server](https://github.com/typicode/json-server)  en se basant sur le fichier de configuration ``./api/db.json`.  
Il offre les endPoints suivants : 

- **CRUD** sur la ressource **Citation** http://localhost:3001/citations

Vous pouvez utiliser les fonctionnalités de [JSON server](https://github.com/typicode/json-server) décrient [ici](https://github.com/typicode/json-server#routes) (filtre, pagination, sort ...)

## Front

L'application propose deux pages :
- Page d’accueil affichant les différentes citations et permettant de voter pour celles-ci (+ ou -)
- Page d'ajout d'une citation
