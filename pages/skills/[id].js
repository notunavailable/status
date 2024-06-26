import React, { useState, useEffect } from 'react';
import skills from '../../data/skills.json';
import styles from '../../styles/skills.module.css';
import formStyles from '../../styles/form.module.css';
import StopWatch from '../../components/StopWatch';
import Link from 'next/link';
import ToggleSwitch from '../../components/form/ToggleSwitch';

const SkillPage = () => {
    const [activeTimer, setActiveTimer] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const [date, setDate] = useState({ start: Date.now(), end: Date.now() });
    const [isEnding, setIsEnding] = useState(false);


    useEffect(() => {
        if (!isEnding) {
            console.log(Math.trunc((date.end - date.start) / 1000) + " seconds");
            const EXP = Math.trunc((((date.end - date.start) / 1000)/60) / 5);
            console.log(EXP + " EXP");
        }
    }, [date.end]);



    const skill = skills[0];
    return (
        <div className={styles.page}>
            <Link href="http://localhost:3000/Skills">
                <div className={`${formStyles.input} ${formStyles.button}`}>
                    <h2 className={formStyles.text}>Back</h2>
                </div>
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
            <div>
                <h2 className={styles.title}>Track your activity:</h2>
            </div>
            <ToggleSwitch label="Track your activity" date={date} setDate={setDate} isEnding={isEnding} setIsEnding={setIsEnding} />

        </div>
    );
}

export default SkillPage;

/*<div className = {styles.stopWatchContainer}>
                <h2 className={`${styles.title} ${styles.instruction}`}>Press to {isPaused ? "start" : "stop"} stopwatch</h2>
                <StopWatch isPaused={isPaused} setIsPaused={setIsPaused} time={time} setTime={setTime} />
            </div>
*/