import React from 'react';
import styles from '../styles/status.module.css';
import AttributesRow from './AttributesRow';

const AttributesList = ({ attributes }) => {
    const renderPairedAttributes = attributes.map((attribute, i) => {
        if (i % 2 == 0) {
            let pairedAttributes = [attribute, attributes[i + 1]]
            return (
                <div key = {i}>
                    <AttributesRow attributes={pairedAttributes} />
                </div>
            );
        } else {
            return;
        }
    })
    return (
        <div className={styles.attributesColumn}>
            {renderPairedAttributes}
        </div>
    );
}

export default AttributesList;

