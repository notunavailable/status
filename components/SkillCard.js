import React from 'react';
import styles from '../styles/skills.module.css';
import Link from 'next/link';

const SkillCard = ({ skill }) => {

    return (
        <Link href="http://localhost:3000/skills/1324323">
            <div className={styles.skillBox}>
                <h3 className={styles.skillTitle}>{skill.title}: {skill.level}</h3>
            </div>
        </Link>
    );

}

export default SkillCard;