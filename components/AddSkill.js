import React, { useState } from 'react';
import styles from '../styles/add.module.css';


const AddSkill = ({ terms, setTerms, onEnter, setOnEnter, i, attributes }) => {
    const [description, setDescription] = useState("");
    const [affectedAttributes, setAffectedAttributes] = useState([]);
    const [dropdownIsDropped, setDropdownIsDropped] = useState(false);

    const renderDropdown = attributes.map((attribute, i) => {
        for (let i = 0; i <= affectedAttributes.length; i++) {
            if (affectedAttributes[i] === attribute) {
                return;
            }
        }
        return (
            <div key={i} className={styles.dropdown} onClick={() => { setAffectedAttributes([...affectedAttributes, attribute]); setDropdownIsDropped(false) }}>
                <h2 className={styles.text}>{attribute.name}</h2>
            </div>
        );
    })

    const renderAffectedAttributes = affectedAttributes.map((attribute, i) => {
        var indexInArray = affectedAttributes.indexOf(attribute);
        return (
            <div key={i} className={styles.affectedAttribute}>
                <h2 className={styles.text}>{attribute.name}</h2>
                <div className = {styles.deleteAffectedAttribute} onClick={() => { setAffectedAttributes([...affectedAttributes.slice(0, indexInArray), ...affectedAttributes.slice(indexInArray + 1)]) }}>
                    <h2 className={styles.text}>X</h2>
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
                    className={styles.input}
                    value={terms[i]}
                    onChange={e => setTerms([...terms.slice(0, i), e.target.value, ...terms.slice(i + 1)])}
                />
                <div
                    className={styles.exit}
                    onClick={() => { setOnEnter([...onEnter.slice(0, i), false, ...onEnter.slice(i + 1)]); setTerms([...terms.slice(0, i), "", ...terms.slice(i + 1)]) }}
                >
                    <h2>cancel</h2>
                </div>
            </div>
            <textarea
                type="text"
                placeholder="description"
                className={styles.description}
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <div className={styles.affectedAttributesButton} onClick={() => { setDropdownIsDropped(!dropdownIsDropped) }}>
                <h2 className={styles.text}>Select affected attributes</h2>
            </div>
            <div style={{ "display": "flex", "flexDirection": "row" }}>
                <div style={{ "display": "flex", "flexDirection": "column" }}>
                    {dropdownIsDropped ? renderDropdown : null}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column" }}>
                    {affectedAttributes != [] ? renderAffectedAttributes : null}
                </div>
            </div>
        </div>
    );
}

export default AddSkill;

/*name: String,
description: String,
affectedAttributes: Array,
milestones: Array,*/