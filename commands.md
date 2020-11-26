$ yarn init -y
$ yarn add react react-dom

Babel -> Converter (transpilar) código do React para um código que o browser entenda.
Webpack -> Pra cada tipo de arquivo (.js, .css, .png), eu vou converter o código de uma maneira diferente (usando loaders...)
Loaders -> babel-loader, css-loader, image-loader

$ yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
$ yarn add @babel/cli
$ yarn babel Src/index.js --out-file Public/bundle.js
$ yarn add babel-loader
$ yarn webpack --mode development
$ yarn webpack serve --mode development
$ yarn add webpack-dev-server -D
$ yarn add style-loader css-loader
$ yarn add file-loader
$ yarn add @babel/plugin-transform-runtime -D

Componentes
Propriedades -> Info que passa do componente pai para o filho
Estado
