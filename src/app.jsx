import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

require("./css/main");

// Ask react to render the class
//var element = React.createElement(Dropdown,options);

// Tell it where to place rendered element in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
