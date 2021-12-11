import React from 'react';
import AttributesList from '../components/AttributesList';
import styles from '../styles/status.module.css';
import attributes from '../data/attributes.json';

const Status = () => {
    return (
        <div className={styles.page}>
            <h1 className = {styles.title}>Status</h1>
            <AttributesList attributes = {attributes}/>
        </div>
    );
}

export default Status;