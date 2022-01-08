import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import store from "../../Redux/store";
import {addMessageCreator, updateNewMessageCreator} from "../../Redux/dialogsReducer";

const Dialogs = (props) =>{

    let newMsjElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageCreator());
    }

    let onMessageChange = () => {
        let text = newMsjElement.current.value;
        props.dispatch(updateNewMessageCreator(text))
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>) ;
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageText;

    return(
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={s.messages}>
               {messagesElements}
               <div>
                   <div>
                       <textarea onChange={onMessageChange}
                                 ref={newMsjElement}
                                 value={newMessageBody}/>
                   </div>
                   <div>
                       <button onClick={addMessage}>Add Message</button>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Dialogs;