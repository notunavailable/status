import React from 'react';
import styles from '../styles/status.module.css';

const AttributesRow = ({ attributes }) => {
    const attributesBox = attributes.map((attribute, i) => {
        return (
            <div key={i} className={styles.attributesContainer}>
                <h2 className = {styles.attributeInfo}>{attribute.title}: {attribute.level}</h2>
            </div>
        );
    })
    return (
        <div className = {styles.attributesRow}>
            {attributesBox}
        </div>
    );
}

export default AttributesRow;