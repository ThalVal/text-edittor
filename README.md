# Text Editor

## Description

A simple text editor that runs in browser or installed as a Progressive Web Application.


### User Story

```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

### Acceptance Criteria

```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

A step-by-step description of how to get the development environment running.

Use the following command to install the necessary packages

```
npm install (package_name@version)

npm run build
```

This application uses the following:

[Express](https://www.npmjs.com/package/express/v/4.16.4) as a node js web application framework

[if-env](https://www.npmjs.com/package/if-env) simplify npm scripts with if-env

[code-mirror-themes](https://www.npmjs.com/package/code-mirror-themes) a large collection of Code Mirror themes for your coding pleasure

[idb](https://www.npmjs.com/package/idb) a small wrapper that makes IndexedDB usable

[concurrently](https://www.npmjs.com/package/concurrently) run multiple commands concurrently

[nodemon](https://www.npmjs.com/package/nodemon) a simple monitor script for use during development of a Node.js app

[@babel/core](https://www.npmjs.com/package/@babel/core) Babel compiler core

[@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime) externalize references to helpers and built-ins, automatically poly-filling your code without polluting globals

[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) a Babel preset for each environment

[@babel/runtime](https://www.npmjs.com/package/@babel/runtime) Babel's modular runtime helpers

[babel-loader](https://www.npmjs.com/package/babel-loader) babel module loader for webpack

[copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) copies individual files or entire directories, which already exist, to the build directory

[css-loader](https://www.npmjs.com/package/css-loader) css loader module for webpack

[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) simplifies creation of HTML files to serve your webpack bundles

[http-server](https://www.npmjs.com/package/http-server) a simple zero-configuration command-line http server

[style-loader](https://www.npmjs.com/package/style-loader) style loader module for webpack

[webpack](https://www.npmjs.com/package/webpack) packs ECMAScript / CommonJs / AMD modules for the browser

[webpack-cli](https://www.npmjs.com/package/webpack-cli) CLI for webpack

[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) serves a webpack app, updates the browser on changes

[webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest) webpack-pwa-manifest is a webpack plugin that generates a 'manifest.json' for your Progressive Web Application

[workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin) a plugin for your Webpack build process, helping you generate a manifest of local files that workbox-sw should pre-cache


### Deployed Site

https://text-edittor-8da280c67991.herokuapp.com/

## License

Please refer to the LICENSE in the repo.

---

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



