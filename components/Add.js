import React, { useState } from 'react';
import styles from '../styles/add.module.css';

const Add = ({ terms, setTerms, onEnter, setOnEnter, i }) => {


    return (
        <div className={styles.popupBox}>
            <div className={styles.firstRow}>
                <label>
                    <input
                        type="text"
                        placeholder={name}
                        className={styles.input}
                        value={terms[i]}
                        onChange={e => setTerms([...terms.slice(0, i), e.target.value, ...terms.slice(i + 1)])}
                    />
                </label>
                <div
                    className={styles.exit}
                    onClick={() => { setOnEnter([...onEnter.slice(0, i), false, ...onEnter.slice(i + 1)]) }}
                >
                    <h2>x</h2>
                </div>
            </div>
        </div>
    );
}

export default Add;