import React from 'react';
import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.img}>
                <a href={''}>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png'} />
                </a>
            </div>

            <div className={s.title}>{props.title}</div>
            <div className={s.description}>{props.description}</div>
        </div>
    );
};

