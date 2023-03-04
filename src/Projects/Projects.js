import React from 'react';
import s from './Projects.module.css'
import gs from '../common/styles/Container.module.css'
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${gs.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={'TodoLists'} description={'Create TodoLists'}/>
                    <Project title={'Social Network'} description={'Create Social Network'}/>


                </div>
            </div>
        </div>
    );
};
