import React from 'react';
import styles from '../styles/form.module.css';

const SearchResults = ({Alldata, term, onEnter, setOnEnter, i}) => {

    const renderResults = Alldata.filter(data => data.name.toLowerCase().substring(0, term.length) === term.toLowerCase()).map((data, i) => {
        return(
            <div key = {i} className = {`${styles.input} ${styles.button}`} onClick = {() => {setOnEnter([...onEnter(0, i), true, ...onEnter(i+1)])}}>
                <h3 className = {styles.text}>{data.name}</h3>
            </div>
        );
    })
    return(
        <div>
            {renderResults}
        </div>
    );
}

export default SearchResults;