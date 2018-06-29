import * as TYPES from '../actionTypes';

const initialState = {
    currentUser: null,
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case TYPES.SET_CURRENT_USER: {
            state.currentUser = action.payload;
            localStorage.setItem('gymJournal_currentUser', JSON.stringify(action.payload));
            return {...state};
        }
        case TYPES.REMOVE_CURRENT_USER: {
            state.currentUser = null;
            localStorage.removeItem('gymJournal_currentUser');
            return {...state};
        }
        case TYPES.UPDATE_CURRENT_USER: {
            state = Object.assign({}, state, Object.assign(state.currentUser, action.payload));
            localStorage.setItem('gymJournal_currentUser', JSON.stringify(state.currentUser));
            return {...state};
        }
        default: {
            return state;
        }
    }
}