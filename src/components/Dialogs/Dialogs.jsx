import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () =>{
    return(
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <div className={s.dialog + ' ' + s.active}>
                    Alexey
               </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Vasilysa
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
           </div>
           <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How are you</div>
                <div className={s.dialog}>Nice day</div>


           </div>
        </div>
    )
}

export default Dialogs;