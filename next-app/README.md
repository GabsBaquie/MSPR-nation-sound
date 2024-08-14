# Mon Projet Web

Ce projet est une application web composée d'un frontend développé avec Next.js et d'un backend développé avec Strapi CMS et Prisma.

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Structure du Projet](#structure-du-projet)
- [Déploiement](#déploiement)
- [Ressources](#ressources)

## Prérequis

- Node.js (version >= 18.0.0 <= 20.x.x)
- npm (version >= 6.0.0)
- MySQL (pour la base de données Strapi)
- Prisma (pour la gestion de la base de données)

## Installation

### Backend (Strapi CMS et Prisma)

1. Clonez le dépôt du backend :

   ```bash
   git clone <url-du-repo-backend> strapi-CMS
   cd strapi-CMS
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement en copiant le fichier `.env.example` en `.env` et en modifiant les valeurs selon vos besoins.

4. Initialisez Prisma :

   ```bash
   npx prisma init
   ```

5. Appliquez les migrations Prisma :
   ```bash
   npx prisma migrate dev
   ```

### Frontend (Next.js)

1. Clonez le dépôt du frontend :

   ```bash
   git clone <url-du-repo-frontend> next-app
   cd next-app
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement en créant un fichier `.env` et en ajoutant les valeurs nécessaires, par exemple :
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:1337
   ```

## Démarrage

### Backend (Strapi CMS et Prisma)

Pour démarrer le backend en mode développement avec autoReload :

```bash
npm run develop
# ou
yarn develop
```

Pour démarrer le backend en mode production :

```bash
npm run start
# ou
yarn start
```

### Frontend (Next.js)

Pour démarrer le frontend en mode développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

## Structure du Projet

### Backend (Strapi CMS et Prisma)

```
strapi-CMS/
├── config/
├── database/
├── public/
├── src/
├── .editorconfig
├── .env
├── .env.example
├── .gitignore
├── .strapi/
├── .strapi-updater.json
├── package.json
├── README.md
├── tsconfig.json
├── types/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── lib/
│       └── prisma.ts
```

### Frontend (Next.js)

```
next-app/
├── app/
├── components/
├── controller/
├── lib/
├── models/
├── pages/
├── prisma/
├── public/
├── types/
├── ui/
├── .env
├── .eslintrc.json
├── .gitignore
├── .next/
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
```

## Déploiement

### Backend (Strapi CMS et Prisma)

Strapi offre plusieurs options de déploiement. Consultez la [documentation de déploiement de Strapi](https://docs.strapi.io/dev-docs/deployment) pour plus de détails.

Pour déployer sur Strapi Cloud :

```bash
yarn strapi deploy
```

### Frontend (Next.js)

Le moyen le plus simple de déployer votre application Next.js est d'utiliser la [plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consultez la [documentation de déploiement de Next.js](https://nextjs.org/docs/deployment) pour plus de détails.

## Ressources

### Backend (Strapi CMS et Prisma)

- [Centre de ressources Strapi](https://strapi.io/resource-center)
- [Documentation Strapi](https://docs.strapi.io)
- [Tutoriels Strapi](https://strapi.io/tutorials)
- [Blog Strapi](https://strapi.io/blog)
- [Changelog Strapi](https://strapi.io/changelog)
- [Dépôt GitHub Strapi](https://github.com/strapi/strapi)
- [Documentation Prisma](https://www.prisma.io/docs)
- [Dépôt GitHub Prisma](https://github.com/prisma/prisma)

### Frontend (Next.js)

- [Documentation Next.js](https://nextjs.org/docs)
- [Tutoriel interactif Next.js](https://nextjs.org/learn)
- [Dépôt GitHub Next.js](https://github.com/vercel/next.js)
