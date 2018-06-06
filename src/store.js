const initialState = {
    test: 'everest'
};


const SET_CURRENT_USER = 'SET_CURRENT_USER';

function GymJournal(state = initialState, action) {

    if(action.type === SET_CURRENT_USER) {
        state.currentUser = action.payload;
    }

    return state;
}

export default GymJournal;