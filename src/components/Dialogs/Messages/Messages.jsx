import Message from "./Message";
import React from 'react';

const Messages = (props) => {
    let messagesElements = props.messages.map((m) => <Message message={m.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div>
            <div>
                <textarea onChange={onMessageChange}
                    value={props.newMessageText}
                    ref={newMessageElement} />
            </div>
            <div>
                <button onClick={addMessage}>
                    Add message
                    </button>
            </div>
            {messagesElements}
        </div>
    );
}

export default Messages;