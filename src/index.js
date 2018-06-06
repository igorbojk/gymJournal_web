import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App/App';
import './index.css';
import GymJournal from './store.js';

const store = createStore(GymJournal);


store.subscribe(
    () => {
        console.log('subscribe', store.getState());
    }
);

store.dispatch({type: 'TEST', payload: 'everest'});
store.dispatch({type: 'TEST', payload: 'sss'});


render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
