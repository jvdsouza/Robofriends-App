import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //Changing CardList to App as we're moving to
                         //the final stages of the app
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
