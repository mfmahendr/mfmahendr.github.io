<div align="center">
    <h1>Fadhil PortoNews</h1>
    <strong>Portfolio website with vintage newspaper-style and news-like language style.</strong>
    </br></br>
    <div align="center">
        <span>
            <img src="https://img.shields.io/github/license/mfmahendr/mfmahendr.github.io" alt="License" />
            <img src="https://img.shields.io/github/last-commit/mfmahendr/mfmahendr.github.io" alt="Last Commit" />
            <a href="https://github.com/mfmahendr/mfmahendr.github.io/actions/workflows/pages/pages-build-deployment">
                <img src="https://github.com/mfmahendr/mfmahendr.github.io/actions/workflows/pages/pages-build-deployment/badge.svg" alt="pages-build-deployment status" />
            </a>
            <img src="https://img.shields.io/badge/Website-live-blue" alt="Live API status" />
        </span>
    </div>
    </br>
    <div align="center">
        <a href="#overview">Overview</a> -
        <a href="#techlibrary-stack">Tech Stack</a> -
        <a href="#project-structure">Project Structure</a> -
        <a href="#scripts">Scripts</a> -
        <a href="#getting-started">Getting Started</a> -
        <a href="#license">License</a>
    </div>
</div>

<br>

## Overview

This project is my personal portfolio website featuring a vintage newspaper-inspired design and a news-like writing tone.
It is built using **React**, **Vite**, and **Tailwind CSS**, with support for **internationalization (i18n)** through `i18next`. The site is optimized for fast loading, deployment via GitHub Pages, and maintainable code structure using ESLint and Prettier.

---


## Tech/Library Stack

* **React 19**
* **Vite 7**
* **Tailwind CSS 4**
* **React Router DOM 7**
* **i18next + react-i18next + browser language detector**
* **ESLint + Prettier**
* **gh-pages (for deployment)**

---

## Project Structure

```
/
├── src/
|   ├───assets
|   │   ├───data
|   │   ├───images
|   │   │   ├───common
|   │   │   └───tools
|   │   └───styles
|   ├───components
|   │   ├───layouts
|   │   ├───sections
|   │   │   ├───About
|   │   │   ├───Contact
|   │   │   ├───Interests
|   │   │   ├───Projects
|   │   │   └───Skills
|   │   └───ui
|   ├───hooks
|   └───i18n
|       ├───locales
|       └───utils
├── index.html
├── package.json
└── vite.config.js
```

---

## Scripts

| Script         | Description                              |
| -------------- | ---------------------------------------- |
| `dev`          | Start the Vite development server        |
| `build`        | Build the project for production         |
| `preview`      | Preview the production build             |
| `lint`         | Run ESLint checks                        |
| `format`       | Format code using Prettier               |
| `format:check` | Check formatting without modifying files |
| `predeploy`    | Run build before deployment              |
| `deploy`       | Deploy to GitHub Pages (`dist/`)         |

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## License

This project is licensed under the MIT License.
