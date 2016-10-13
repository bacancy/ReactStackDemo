var React = require('react');
var Render = require('react-dom').render;
var AppData = require('./Appdata');
var API = require('./utils/API');
var App = require('./components/Main.react.js');

AppData.init();
API.getData();
Render(
  <App />,
  document.getElementById('app')
);
