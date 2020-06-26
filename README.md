## 😋 Savoristas | A social network for flavor combinations 😋

## What this app is about

_TODO: link to deployed version._

Savoristas charts the exciting universe of ingredients combinations. This web app allows visitors to create and share 'food palettes' - being color palettes, but than palettes of colorful ingredients (you need to see it, really). Visitor can share recipes too, and palettes work as filters for the recipes. So if you like the apple & cinnamon palette, your favorite apple pie recipe is one click away.

## Table of contents

- [App demo](#App-demo)
- [Used technologies and concepts](#used-technologies-and-concepts)
- [Goals for this project](#goals-for-this-project)
- [User Stories](#user-stories)
- [Wireframe](#wireframe)
- [Datamodel](#datamodel)
- [Git version control](#git-version-control)
- [Backend server repo](#backend-server-repo)

## App demo

_TODO: insert screen recording_

## Used technologies and concepts

👀👇 **Click links to see code samples in this project** 👇👀

- [React for UI building](https://github.com/tdijkmans/savoristas-front/blob/master/src/App.js)
- [Redux for state management](https://github.com/tdijkmans/savoristas-front/tree/master/src/store)
- [Authentication](https://github.com/tdijkmans/savoristas-front/tree/master/src/store)
- [Express as web app framework](https://github.com/tdijkmans/savoristas-back/blob/master/index.js)
  - [REST API](https://github.com/tdijkmans/savoristas-back/blob/master/routers/recipes.js)
- [Sequelize as ORM](https://github.com/tdijkmans/savoristas-back/blob/master/index.js)
- [Many-to-many models](https://github.com/tdijkmans/savoristas-back/tree/master/models) ⭐
- [Chakra UI as component library](https://github.com/tdijkmans/savoristas-front/blob/master/src/components/Navigation/Drawermenu.js) ⭐
- [React-Input-Color as input](https://github.com/tdijkmans/savoristas-front/blob/master/src/components/CreatePaletteForm/index.js) ⭐

⭐ _New technology learned during this project_

## Goals for this project

The goal of this project is to build a full-stack app, practicing known and exploring _new_ technologies (see above). I learned these new tools independently by reading its documentation, consultin forums like StackExchange and watching online videos.

- practice full-stack app development
- apply what we learned in Codaisseur's bootcamp
- extend with new technology independently
- showcase and document development skills using:
  - wireframes as Minimum Viable Product
  - conscious data model design
  - user stories perspective
  - agile/[kanban project](https://github.com/users/tdijkmans/projects/1) approach
  - transparant and structured [git version control](#git-version-control)

## User Stories

- As a page visitor, I can sign up and log in as a user. I must register before I can post food palettes and recipes
- As a visitor, I am able see existing food palettes and recipes as a gallery
- As a user, I am able to post new food palettes
- As a user, I am able to post new recipes
- As a visitor, I can see recipes of interest and get their details for cooking.
- As a visitor, I can select food palettes and filter for corresponding recipes
- _planned:_ As a user, I can like recipes and foodpaletes
- _planned:_ As a user, I can bookmark recipes and foodpaletes

_This project is work in progress. Some features still need to be implemented and revised. Any suggestions or feedback is welcome, please let me know [here](https://www.linkedin.com/in/tdijkmans/)_.

## Wireframe

Go to [Wireframe](Wireframe.svg)

## Datamodel

Go to [Datamodel](Datamodel.svg)

## Git version control

I recognize the need for solid version control and try to:

- write clear commit messages
- name branches by feature
- do pull requests with concise summaries

#### 👀👇 Click links to view samples of pull requests 👇👀

- [Homepage](https://github.com/tdijkmans/savoristas-front/pull/4) pull request

## Backend server repo

The backend side of this project is an Express server using Sequelize to manage the underlying Postgres database. [Click here for more details](https://github.com/tdijkmans/savoristas-back)
