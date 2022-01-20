import React, {useState} from 'react';
import styles from '../styles/admin.module.css';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import {GET_ALL_SKILLS, GET_ALL_ATTRIBUTES, GET_ALL_LEVELS} from '../utils/api-defs';

/*export async function getServerSideProps(context) {
    const res = await fetch(GET_ALL_SKILLS);
    const skills = await res.json();
    const res1 = await fetch(GET_ALL_ATTRIBUTES);
    const attributes = await res1.json();
    return {
        props: {
            skills,
            attributes
        }
    }
};*/


const Admin = (/*{skills, attributes}*/) => {
    const [searchTerms, setSearchTerms] = useState(['', '']);
    const [onEnter, setOnEnter] = useState([false, false])

    const skills = [
        {name: "drawing"},
        {name: "painting"},
        {name: "writing"},
        {name: "reading"},
        {name: "speed reading"},
        {name: "poker"},
        {name: "magic"},
        {name: "running"}
    ];

    const attributes = [
        {name: "drawing"},
        {name: "painting"},
        {name: "writing"},
        {name: "reading"},
        {name: "speed reading"},
        {name: "poker"},
        {name: "magic"},
        {name: "running"}
    ];

    return (
        <div className={styles.page}>
            <div>
                <h1 className={styles.title}>Admin</h1>
                <div className={styles.controls}>
                    <div className={styles.search}>
                        <Search terms = {searchTerms} setTerms = {setSearchTerms} searchItem = "skills" i = {0} onEnter = {onEnter} setOnEnter = {setOnEnter}/>
                        {onEnter[0] ? <SearchResults Alldata = {skills} term = {searchTerms[0]}/> : null}
                        <Search terms = {searchTerms} setSearchTerms = {setSearchTerms} searchItem = "attributes" i = {1} onEnter = {onEnter} setOnEnter = {setOnEnter}/>
                        {onEnter[1] ? <SearchResults Alldata = {attributes} term = {searchTerms[1]}/> : null}
                    </div>
                    <div className={styles.add}>
                    <label htmlFor="addingSkills">
                            <input type="text" placeholder="add skill name" className = {styles.input}/>
                        </label>
                        <label htmlFor="addingAttributes">
                            <input type="text" placeholder="add attribute name" className = {styles.input}/>
                        </label>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Admin;