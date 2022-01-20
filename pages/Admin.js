import React, {useState} from 'react';
import styles from '../styles/admin.module.css';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults'

const Admin = () => {
    const [terms, setTerms] = useState(['', '', '']);
    const [onEnter, setOnEnter] = useState([false, false, false])
    return (
        <div className={styles.page}>
            <div>
                <h1 className={styles.title}>Admin</h1>
                <div className={styles.controls}>
                    <div className={styles.search}>
                        <Search terms = {terms} setTerms = {setTerms} searchItem = "skills" i = {0} onEnter = {onEnter} setOnEnter = {setOnEnter}/>
                        {onEnter[0] ? <SearchResults/> : null}
                        <Search terms = {terms} setTerms = {setTerms} searchItem = "attributes" i = {1} onEnter = {onEnter} setOnEnter = {setOnEnter}/>
                        {onEnter[1] ? <SearchResults/> : null}
                        <Search terms = {terms} setTerms = {setTerms} searchItem = "levels" i = {2} onEnter = {onEnter} setOnEnter = {setOnEnter}/>
                        {onEnter[2] ? <SearchResults/> : null}
                    </div>
                    <div className={styles.add}>
                    <label htmlFor="addingSkills">
                            <input type="text" placeholder="add skill name" className = {styles.input}/>
                        </label>
                        <label htmlFor="addingAttributes">
                            <input type="text" placeholder="add attribute name" className = {styles.input}/>
                        </label>
                        <label htmlFor="addingLevels">
                            <input type="text" placeholder="add level name" className = {styles.input}/>
                        </label>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Admin;