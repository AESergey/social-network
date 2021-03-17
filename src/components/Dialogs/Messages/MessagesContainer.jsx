import { addMessageActionCreactor, updateNewMessageTextActionCreator } from '../../../Redux/dialogsReducer';
import Messages from "./Messages";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => { dispatch(updateNewMessageTextActionCreator(text)) },
        addMessage: () => { dispatch(addMessageActionCreactor()) }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;