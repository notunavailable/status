import React from 'react';
import styles from '../styles/form.module.css';

const SearchResults = ({Alldata, term}) => {

    const renderResults = Alldata.filter(data => data.name.toLowerCase().substring(0, term.length) === term.toLowerCase()).map((data, i) => {
        return(
            <div key = {i} className = {`${styles.input} ${styles.button}`}>
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