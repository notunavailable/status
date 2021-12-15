import React from 'react';
import styles from '../styles/skills.module.css';
import SkillCardList from '../components/SkillCardList';
import skills from '../data/skills';

const Skills = () => {
    return (
        <div className={styles.page}>
            <div>
                <h1 className={styles.title}>Skills</h1>
            </div>
            <div>
                <SkillCardList skills = {skills}/>
            </div>
        </div>
    )
}

export default Skills;