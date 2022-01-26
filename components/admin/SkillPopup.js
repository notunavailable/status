import React, { useState } from 'react';
import styles from '../../styles/add.module.css';
import formStyles from '../../styles/form.module.css';
import AddMilestone from './AddMilestone';
import AffectedAttributeDropdown from './AffectedAttributeDropdown';


const SkillPopup = ({ terms, setTerms, onEnter, setOnEnter, i, attributes }) => {
    const [description, setDescription] = useState("");
    const [affectedAttributes, setAffectedAttributes] = useState([]);
    const [dropdownIsDropped, setDropdownIsDropped] = useState(false);
    const [milestones, setMilestones] = useState([{ name: "", level: 0, description: "" }, { name: "", level: 0, description: "" }]);
    

    return (
        <div className={styles.popupBox}>
            <div className={styles.firstRow}>
                <input
                    type="text"
                    placeholder="name"
                    className= {`${formStyles.input} ${formStyles.textInput}`}
                    value={terms[i]}
                    onChange={e => setTerms([...terms.slice(0, i), e.target.value, ...terms.slice(i + 1)])}
                />
                <div
                    className={`${formStyles.input} ${formStyles.button} ${styles.cancelButton}`}
                    onClick={() => { setOnEnter([...onEnter.slice(0, i), false, ...onEnter.slice(i + 1)]); setTerms([...terms.slice(0, i), "", ...terms.slice(i + 1)]) }}
                >
                    <h2 className = {formStyles.text}>delete</h2>
                </div>
            </div>
            <textarea
                type="text"
                placeholder="description"
                className={`${formStyles.input} ${formStyles.textInput}`}
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <AddMilestone milestones = {milestones} setMilestones = {setMilestones}/>
            <div className={`${formStyles.input} ${formStyles.button}`} onClick={() => { setMilestones([...milestones, { name: "", level: 0 }]) }}>
                <h2 className={formStyles.text}>Add another milestone</h2>
            </div>
            <AffectedAttributeDropdown attributes = {attributes} affectedAttributes = {affectedAttributes} setAffectedAttributes = {setAffectedAttributes} dropdownIsDropped = {dropdownIsDropped} setDropdownIsDropped = {setDropdownIsDropped}/>
            <div className={`${formStyles.input} ${formStyles.button}`}>
                <h2 className={formStyles.text}>Submit</h2>
            </div>
        </div>
    );
}

export default SkillPopup;

/*name: String,
description: String,
affectedAttributes: Array,
milestones: Array,*/