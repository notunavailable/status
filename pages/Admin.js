import React, { useState } from 'react';
import styles from '../styles/admin.module.css';
import SearchAdd from '../components/admin/SearchAdd';
import SearchResults from '../components/SearchResults';
import SkillPopup from '../components/admin/SkillPopup';
import { GET_ALL_SKILLS, GET_ALL_ATTRIBUTES, GET_ALL_LEVELS, CREATE_SKILL } from '../utils/api-defs';

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
    const [terms, setTerms] = useState(['', '', '', '', '', '', '', '', '']);
    const [onEnter, setOnEnter] = useState([false, false, false, false, false])

    const skills = [
        { name: "drawing" },
        { name: "painting" },
        { name: "writing" },
        { name: "reading" },
        { name: "speed reading" },
        { name: "poker" },
        { name: "magic" },
        { name: "running" }
    ];

    const attributes = [
        { name: "strength" },
        { name: "intelligence" },
        { name: "athleticism" },
        { name: "dexterity" },
        { name: "wisdom" },
        { name: "endurance" }
    ];


    async function onSkillSubmit(data) {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const response = await fetch(CREATE_SKILL, requestOptions);
        const responseData = await response.json();
    }


    return (
        <div className={styles.page}>
            <div>
                <h1 className={styles.title}>Admin</h1>
                <div className={styles.controls}>
                    <div className={styles.search}>
                        <SearchAdd terms={terms} setTerms={setTerms} searchItem="skills" i={0} onEnter={onEnter} setOnEnter={setOnEnter} isSearch={true} />
                        {onEnter[0] ? <SearchResults Alldata={skills} term={terms[0]} onEnter = {onEnter} setOnEnter = {setOnEnter} i = {4}/> : null}
                        <SearchAdd terms={terms} setTerms={setTerms} searchItem="attributes" i={1} onEnter={onEnter} setOnEnter={setOnEnter} isSearch={true} />
                        {onEnter[1] ? <SearchResults Alldata={attributes} term={terms[1]} onEnter = {onEnter} setOnEnter = {setOnEnter} i = {5}/> : null}
                    </div>
                    <div className={styles.add}>
                        <SearchAdd terms={terms} setTerms={setTerms} searchItem="skill" i={2} onEnter={onEnter} setOnEnter={setOnEnter} isSearch={false} />
                        <SearchAdd terms={terms} setTerms={setTerms} searchItem="attribute" i={3} onEnter={onEnter} setOnEnter={setOnEnter} isSearch={false} />
                        {onEnter[3] ? <Add terms={terms} setTerms={setTerms} onEnter={onEnter} setOnEnter={setOnEnter} i={3} /> : null}
                    </div>
                </div>
                {onEnter[2] ? <SkillPopup terms={terms} setTerms={setTerms} onEnter={onEnter} setOnEnter={setOnEnter} i={2} attributes={attributes} /> : null}
                {onEnter[4] ? <SkillPopup terms={terms} setTerms={setTerms} onEnter={onEnter} setOnEnter={setOnEnter} i={4} attributes={attributes} /> : null}

            </div>

        </div>
    );
}

export default Admin;