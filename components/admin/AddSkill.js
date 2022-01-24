import React, { useState } from 'react';
import styles from '../../styles/add.module.css';
import formStyles from '../../styles/form.module.css';
import TextInput from '../TextInput';


const AddSkill = ({ terms, setTerms, onEnter, setOnEnter, i, attributes }) => {
    const [description, setDescription] = useState("");
    const [affectedAttributes, setAffectedAttributes] = useState([]);
    const [dropdownIsDropped, setDropdownIsDropped] = useState(false);
    const [milestones, setMilestones] = useState([{ name: "", level: 0, description: "" }, { name: "", level: 0, description: "" }]);

    const setMilestoneName = (value, level, description) => { setMilestones([...milestones.slice(0, i), { name: value, level: level, description: description }, ...milestones.slice(i + 1)]) };
    const setMilestoneLevel = (value, name, description) => { setMilestones([...milestones.slice(0, i), { name: name, level: value, description: description }, ...milestones.slice(i + 1)]) };
    const deleteMilestone = () => { setMilestones([...milestones.slice(0, i), ...milestones.slice(i + 1)]) };
    const setMilestoneDescription = () => { setMilestones([...milestones.slice(0, i), { name: milestone.name, level: milestone.level, description: e.target.value }, ...milestones.slice(i + 1)]) };


    const renderMilestoneSetter = milestones.map((milestone, i) => {
        return (
            <div key={i} className = {`${formStyles.input} ${styles.milestoneBox}`}>
                <div className={styles.milestoneSetter}>
                    <input
                        type = "text"
                        value = {milestone.name}
                        placeholder = "milestone name"
                        className = {`${formStyles.input} ${formStyles.textInput}`}
                        onChange = {e => setMilestoneName(e.target.value, milestone.level, milestone.description)}
                    />
                    <input
                        type = "text"
                        value = {milestone.level}
                        placeholder = "level"
                        className = {`${formStyles.input} ${formStyles.textInput}`}
                        onChange = {e => setMilestoneLevel(e.target.value, milestone.name, milestone.description)}
                    />
                    <div className= {`${formStyles.input} ${formStyles.button}`} onClick={() => { setMilestones([...milestones.slice(0, i), ...milestones.slice(i + 1)]) }}>
                        <h2 className={formStyles.text}>delete</h2>
                    </div>
                </div>
                <textarea
                    type="text"
                    placeholder="description"
                    className={formStyles.input}
                    value={milestone.description}
                    onChange={e => setMilestones([...milestones.slice(0, i), { name: milestone.name, level: milestone.level, description: e.target.value }, ...milestones.slice(i + 1)])}
                />
            </div>

        );
    })

    const renderDropdown = attributes.map((attribute, i) => {
        for (let i = 0; i <= affectedAttributes.length; i++) {
            if (affectedAttributes[i] === attribute) {
                return;
            }
        }
        return (
            <div key={i} className={`${formStyles.input} ${formStyles.button}`} onClick={() => { setAffectedAttributes([...affectedAttributes, attribute]); setDropdownIsDropped(false) }}>
                <h2 className={formStyles.text}>{attribute.name}</h2>
            </div>
        );
    })

    const renderAffectedAttributes = affectedAttributes.map((attribute, i) => {
        var indexInArray = affectedAttributes.indexOf(attribute);
        return (
            <div key={i} className= {`${formStyles.input} ${formStyles.button}`}>
                <h2 className={formStyles.text}>{attribute.name}</h2>
                <div className={`${formStyles.input} ${formStyles.button}`} onClick={() => { setAffectedAttributes([...affectedAttributes.slice(0, indexInArray), ...affectedAttributes.slice(indexInArray + 1)]) }}>
                    <h2 className={formStyles.text}>X</h2>
                </div>
            </div >
        )
    })



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
                    className={`${formStyles.input} ${formStyles.button}`}
                    onClick={() => { setOnEnter([...onEnter.slice(0, i), false, ...onEnter.slice(i + 1)]); setTerms([...terms.slice(0, i), "", ...terms.slice(i + 1)]) }}
                >
                    <h2 className = {formStyles.text}>cancel</h2>
                </div>
            </div>
            <textarea
                type="text"
                placeholder="description"
                className={`${formStyles.input} ${formStyles.textInput}`}
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            {renderMilestoneSetter}
            <div className={`${formStyles.input} ${formStyles.button}`} onClick={() => { setMilestones([...milestones, { name: "", level: 0 }]) }}>
                <h2 className={formStyles.text}>Add another milestone</h2>
            </div>
            <div className={`${formStyles.input} ${formStyles.button}`} onClick={() => { setDropdownIsDropped(!dropdownIsDropped) }}>
                <h2 className={formStyles.text}>Select affected attributes</h2>
            </div>
            <div style={{ "display": "flex", "flexDirection": "row" }}>
                <div style={{ "display": "flex", "flexDirection": "column" }}>
                    {dropdownIsDropped ? renderDropdown : null}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column" }}>
                    {affectedAttributes != [] ? renderAffectedAttributes : null}
                </div>
            </div>
            <div className={`${formStyles.input} ${formStyles.button}`}>
                <h2 className={formStyles.text}>Submit</h2>
            </div>
        </div>
    );
}

export default AddSkill;

/*name: String,
description: String,
affectedAttributes: Array,
milestones: Array,*/