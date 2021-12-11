import React, { useState, useEffect } from "react";
import styles from "../styles/timer.module.css"
import Timer from "./Timer";
import ResetButton from "./ResetButton";

function StopWatch({isPaused, setIsPaused, time, setTime}) {

    useEffect(() => {
        let interval = null;

        if (isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isPaused]);

    const handleStart = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setTime(0);
    };

    return (
        <div>
            <div className={`${styles.circle} ${styles.inactive} ${styles.centerH}`} onClick={handleStart}>
                <Timer time={time} />
            </div>
        </div>
    );
}

export default StopWatch;