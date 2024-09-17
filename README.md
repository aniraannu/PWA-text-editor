# 19 Progressive Web Applications (PWA): Text Editor

J.A.T.E is a Progressive Web Application (PWA) that runs in the browser, offline and can be installed locally to your machine. This application features a number of data persistence techniques, insuring the application runs regardless of browser supported function. J.A.T.E uses an IndexedDB database and the idb package. This application is deployed to Heroku, to access it in production continue reading the documentation!

## Description

The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use. The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection. This application allows the user to access visited pages even if the application is offline.

The URL of the GitHub repository is https://github.com/aniraannu/PWA-text-editor and the repository name is PWA-text-editor

🚀The application has been deployed to Render and the URL of the deployed application is:-

The following animation demonstrates the application functionality:
![Demonstration of the finished application being used in the browser and then installed.](./Assets/00-demo.gif).

The following image shows the application's registered service worker:
![Demonstration of the finished application with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:
![Demonstration of the finished application with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)

## Getting Started

To run J.A.T.E locally:

- Pull down and/or branch this repository
- Run npm i to install all dependencies
- Invoke application with npm run start

### Technologies Employed

- Mini-CSS-Extract Plugin
- Webpack+Workbox
- Concurrently
- JavaScript
- IndexedDB
- Express
- NodeJS
- Babel

### Installing

- This text editor require a number of methods and store data to an IndexedDB database to be builded up.

- This application will require the installation of Node.js and various npm packages.

- Node Package Manager (npm) is a software manager and installer which puts the modules in place so that the node project can utilize it, and also, it manages dependency conflicts intelligently and initialized using npm init. The package.json will be generated and will contains all the details of the application in which the user have inputted during the npm initialization.

- This application will use the following npm packages:-

  - npm install express (express.js)
  - npm install --save-dev webpack (Webpack)
  - npm install webpack-dev-server --save-dev (webpack-dev-server)
  - npm install --save-dev webpack-pwa-manifest (WebpackPwaManifest)
  - npm install babel (Babel)
  - npm install --save-dev css-loader (CSS-loader)
  - npm install concurrently --save (run multiple commands concurrently.) (Concurrently)
  - npm npm install idb (IndexedDB)

- The required modules are bundled in the package.json file and at CLI or integrated terminal type in npm run install, the modules will be installed.

### Executing program

- The application code can be cloned from the following Github link:
  [GitHub-PWA-test-editor](https://github.com/aniraannu/PWA-text-editor)

- The application is deployed using Render and can be directly accesd from:

## Help

NA

## Authors

Contributors names and contact info

Anira Raveendran
[@aniraannu](https://github.com/aniraannu)

## Version History

- 0.1
  - Initial Release

## License

None

## Acknowledgments

Inspiration, code snippets, etc.

- [dbader](https://github.com/dbader/readme-template)
- [starter-code]
- [deployment-guidlines](https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide)
