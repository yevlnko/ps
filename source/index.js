// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';


// Instruments
import './theme/init';
import { store, history } from "./init/store";

// Main
import Main from './navigation/Main';


render(
    <Provider store = { store }>
        <Router history = { history }>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('app'));
