import React, { useState } from 'react';
import skills from '../../data/skills.json';
import styles from '../../styles/skills.module.css';
import StopWatch from '../../components/StopWatch';
import Link from 'next/link';

const SkillPage = () => {
    const [activeTimer, setActiveTimer] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    const skill = skills[0];
    return (
        <div className={styles.page}>
            <Link href = "http://localhost:3000/Skills">
                <h3 className = {styles.button}>Back</h3>
            </Link>
            <h1 className={styles.title}>{skill.title}</h1>
            <div className={styles.skillStatus}>
                <h2 className={styles.skillLevel}>Level: {skill.level}</h2>
                <h2 className={styles.skillNextEXP}>EXP until next level: {skill.nextEXP}</h2>
            </div>
            <div className={styles.descriptionBox}>
                <div className={styles.descriptionContainer}>
                    <h2>{skill.description}</h2>
                </div>
            </div>
            <div className = {styles.stopWatchContainer}>
                <h2 className={`${styles.title} ${styles.instruction}`}>Press to {isPaused ? "start" : "stop"} stopwatch</h2>
                <StopWatch isPaused={isPaused} setIsPaused={setIsPaused} time={time} setTime={setTime} />
            </div>
        </div>
    );
}

export default SkillPage;