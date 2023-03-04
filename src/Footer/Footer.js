import React from 'react';
import s from './Footer.module.css'
import gs from '../common/styles/Container.module.css'
import {IconsFooter} from "./IconsFooter/IconsFooter";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${gs.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Владимир Вячеславович</h2>
                <div className={s.footer}>
                    <IconsFooter src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgp53HKq4fyclYtZdD-0wHVV2YC2rZ0tmGg&usqp=CAU'}/>
                    <IconsFooter src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgp53HKq4fyclYtZdD-0wHVV2YC2rZ0tmGg&usqp=CAU'}/>
                    <IconsFooter src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgp53HKq4fyclYtZdD-0wHVV2YC2rZ0tmGg&usqp=CAU'}/>
                    <IconsFooter src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgp53HKq4fyclYtZdD-0wHVV2YC2rZ0tmGg&usqp=CAU'}/>
                    <IconsFooter src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgp53HKq4fyclYtZdD-0wHVV2YC2rZ0tmGg&usqp=CAU'}/>

                </div>
                <div>2023 Все права защищены</div>
            </div>
        </div>
    );
};

