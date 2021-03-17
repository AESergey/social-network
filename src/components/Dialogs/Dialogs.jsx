import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import React from 'react';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    let state = props.store.getState();
    let dialogsElements = state.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} ava={d.ava} />);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>
                <MessagesContainer store={props.store} />
            </div>
        </div>
    );
}

export default Dialogs;