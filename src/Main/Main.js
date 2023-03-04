import React from 'react';
import s from './Main.module.css'
import gs from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={gs.container}>
                <div className={s.about}>
                    <span>Hi There</span>
                    <h1>I am Jeffrey  Aaron</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo}>

            </div>

            </div>
        </div>
    );
};

