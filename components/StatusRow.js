import React from 'react';
import styles from '../styles/status.module.css';

const StatusRow = ({ items }) => {

    const pairedBoxes = items.map((item, i) => {
        var valueArray = [];
        for(var key in item) {
            var attrValue = item[key];
            valueArray.push(attrValue);
        }
        return (
            <div key={i} className={`${styles.statusBox} ${styles.attributesContainer}`}>
                <h2 className = {styles.text}>{valueArray[0]}: {valueArray[1]}</h2>
            </div>
        );
    })
    return (
        <div className = {styles.attributesRow}>
            {pairedBoxes}
        </div>
    );
}

export default StatusRow;