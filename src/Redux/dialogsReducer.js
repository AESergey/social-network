const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [{ id: 1, name: 'Sergey', ava: 'http://pixner.net/peyamba/peyamba/assets/images/profile/profile-user.png' },
    { id: 2, name: 'Irina', ava: 'http://pixner.net/peyamba/peyamba/assets/images/profile/friend1.png' },
    { id: 3, name: 'Polina', ava: 'http://pixner.net/peyamba/peyamba/assets/images/profile/friend2.png' },
    { id: 4, name: 'Alina', ava: 'http://pixner.net/peyamba/peyamba/assets/images/profile/friend3.png' },
    { id: 5, name: 'Marina', ava: 'http://pixner.net/peyamba/peyamba/assets/images/profile/friend4.png' },
    { id: 6, name: 'Varvara', ava: 'http://pixner.net/peyamba/peyamba/assets/images/profile/friend5.png' }],
    messages: [{ id: 1, message: 'Hi' },
    { id: 2, message: 'How is your IT?' },
    { id: 3, message: 'Yo' }],
    newMessageText: 'Hello'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}

export const addMessageActionCreactor = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;