const initialState = {
};


const SET_CURRENT_USER = 'SET_CURRENT_USER';

function GymJournal(state = initialState, action) {
    if(action.type === SET_CURRENT_USER) {
        state.currentUser = action.payload;
        localStorage.setItem('gymJournal_currentUser', JSON.stringify(action.payload));
    }

    return state;
}

export default GymJournal;