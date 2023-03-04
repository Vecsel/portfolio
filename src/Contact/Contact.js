import React from 'react';
import s from './Contact.module.css'
import gs from "../common/styles/Container.module.css";

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${gs.container} ${s.contactContainer}`}>
                <h2 className={s.title}>My Contact</h2>
                <form className={s.form}>
                    <input />
                    <input />
                    <textarea/>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};
