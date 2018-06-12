const initialState = {
};


const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

function GymJournal(state = initialState, action) {
    if(action.type === SET_CURRENT_USER) {
        state.currentUser = action.payload;
        localStorage.setItem('gymJournal_currentUser', JSON.stringify(action.payload));
    }

    if(action.type === REMOVE_CURRENT_USER) {
        state.currentUser = null;
        localStorage.removeItem('gymJournal_currentUser');
    }



    return state;
}

export default GymJournal;