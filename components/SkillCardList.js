import React from 'react';
import styles from '../styles/skills.module.css';
import SkillCard from './SkillCard';

const SkillCardList = ({skills}) => {
    return (skills.map((skill, i) => {
        return(
            <div key = {i} className = {styles.skillList}>
                <SkillCard skill = {skill}/>
            </div>
        );
    }))

}

export default SkillCardList;