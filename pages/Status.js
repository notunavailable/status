import React from 'react';
import AttributesList from '../components/AttributesList';
import styles from '../styles/status.module.css';

import attributes from '../data/attributes.json';
import user from '../data/user.json';
import level from '../data/level.json';

const Status = () => {

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Status</h1>
            <div className={`${styles.statusBox} ${styles.mainInfo}`}>
                <h2 className={styles.text}>Name: {user.status.name}</h2>
            </div>
            <div className={`${styles.statusBox} ${styles.mainInfo}`}>
                <h2 className={styles.text}>Age: {user.status.age}</h2>
            </div>
            <div className={`${styles.statusBox} ${styles.mainInfo}`}>
                <h2 className={styles.text}>Level: {level.currentLevel}</h2>
            </div>
            <div className={`${styles.statusBox} ${styles.mainInfo}`}>
                <h2 className={styles.text}>EXP: {level.exp}/?</h2>
            </div>
            <AttributesList attributes={attributes} />
        </div>
    );
}

export default Status;