import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


import App from './components/App/App';
import './index.css';

import * as reducers from './store/reducers';

import {ping} from './store/middlewares/ping'

const store = createStore(combineReducers(reducers), applyMiddleware(ping));

if(localStorage.getItem('gymJournal_currentUser')) {
    const currentUser = JSON.parse(localStorage.getItem('gymJournal_currentUser'));
    store.dispatch({type: 'SET_CURRENT_USER', payload: currentUser});
}

store.subscribe(
    () => {
        console.log('subscribe', store.getState());
    }
);



render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
