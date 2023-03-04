import React from 'react';
import s from './IconsFooter.module.css'


export const IconsFooter = (props) => {
    return (
        <div className={s.icons}>
            <div className={s.img}>
                <img src={props.src}/>
            </div>

        </div>
    );
};

