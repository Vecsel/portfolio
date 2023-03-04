import React from 'react';
import s from './Skills.module.css'
import gs from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${gs.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={'В приложениях со множеством компонентов очень важно освобождать используемые системные ресурсы, когда компоненты удаляются.\n' +
                        '\n' +
                        'Первоначальный рендеринг компонента в DOM называется «монтирование» (mounting). Нам нужно устанавливать таймер всякий раз, когда это происходит.\n' +
                        '\n' +
                        'Каждый раз когда DOM-узел, созданный компонентом, удаляется, происходит «размонтирование» (unmounting). Чтобы избежать утечки ресурсов, мы будем сбрасывать таймер при каждом «размонтировании».\n' +
                        '\n' +
                        'Объявим специальные методы, которые компонент будет вызывать при монтировании и размонтировании:'}/>
                    <Skill title={"Css"} description={'Css'}/>
                    <Skill title={"React"} description={'React'}/>

                </div>
            </div>
        </div>
    );
};

