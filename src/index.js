import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App/App';
import './index.css';
import GymJournal from './store.js';

const store = createStore(GymJournal);

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
