import React from 'react';
import styles from '../styles/status.module.css';
import StatusRow from './StatusRow';

const StatusList = ({ items }) => {
    const renderPairedItems = items.map((item, i) => {
        if (i % 2 == 0) {
            let pairedItems = [item, items[i + 1]]
            return (
                <div key = {i}>
                    <StatusRow items={pairedItems} />
                </div>
            );
        } else {
            return;
        }
    })
    return (
        <div className={styles.attributesColumn}>
            {renderPairedItems}
        </div>
    );
}

export default StatusList;

