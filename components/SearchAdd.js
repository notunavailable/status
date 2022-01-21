import React, { useEffect } from 'react';
import styles from '../styles/search.module.css';

const SearchAdd = ({ terms, setTerms, searchItem, i, onEnter, setOnEnter, isSearch }) => {

    useEffect(() => {
        if (terms[i] === "") {
            setOnEnter([...onEnter.slice(0, i), false, ...onEnter.slice(i + 1)]);
        } else if (isSearch) {
            setOnEnter([...onEnter.slice(0, i), true, ...onEnter.slice(i + 1)]);
        }
        //add search function to backend
        /*const timeoutId = setTimeout(() => {
            if (terms[i] === "") {
                endSearch();
            }
        }, 500)*/
    }, [terms[i]])

    return (
        <div>
            <input
                type="text"
                placeholder={`search ${searchItem}`}
                className={styles.input}
                value={terms[i]}
                onChange={e => setTerms([...terms.slice(0, i), e.target.value, ...terms.slice(i + 1)])}
                onKeyPress={e => {
                    if (e.key === 'Enter' && !isSearch) {
                        setOnEnter([...onEnter.slice(0, i), true, ...onEnter.slice(i + 1)]);
                    }
                }}
            />
        </div>
    );
}

export default SearchAdd;