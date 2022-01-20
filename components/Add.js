import React from 'react';
import styles from '../styles/add.module.css';

const Add = () => {
    return(
        <div>
            <label>
                <input
                    type="text"
                    placeholder={`search ${searchItem}`}
                    className={styles.input}
                    value={terms[i]}
                    onChange={e => setTerms([...terms.slice(0, i), e.target.value, ...terms.slice(i + 1)])}
                    /*onKeyPress={e => {
                        if (e.key === 'Enter') {
                            setOnEnter([...onEnter.slice(0, i), true, ...onEnter.slice(i + 1)]);
                            console.log(onEnter);
                        }
                    }}*/
                />
            </label>
        </div>
    );
}

export default Add;