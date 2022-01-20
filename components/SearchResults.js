import React from 'react';
import styles from '../styles/search.module.css';

const SearchResults = ({Alldata, term}) => {

    const renderResults = Alldata.filter(data => data.name.toLowerCase().substring(0, term.length) === term.toLowerCase()).map((data, i) => {
        return(
            <div className = {styles.resultsBox}>
                <h3 className = {styles.title}>{data.name}</h3>
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