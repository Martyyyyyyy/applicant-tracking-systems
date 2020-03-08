import React from 'react';
import ReactDOM from 'react-dom';
import ApplicantApp from "./ApplicantApp";
import './style/index.css';

/*Render a React element into the DOM in the supplied container and return a reference to the component.
* In this case React element is ApplicantApp component and container is div element with id='root' from body of
* public/index.html document.*/
ReactDOM.render( <ApplicantApp />, document.getElementById('root'));

/* => Go to ApplicantApp.js*/