import React from 'react';
import styles from '../../styles/add.module.css';
import formStyles from '../../styles/form.module.css';

const AffectedAttributeDropdown = ({ attributes, affectedAttributes, setAffectedAttributes, dropdownIsDropped, setDropdownIsDropped }) => {

    const attributeColor = (name) => {
        switch (name.toLowerCase()) {
            case "wisdom":
                return styles.wisdom
            case "strength":
                return styles.strength
            case "athleticism":
                return styles.athleticism
            case "dexterity":
                return styles.dexterity
            case "intelligence":
                return styles.intelligence
            case "endurance":
                return styles.endurance
        }
    }

    const renderDropdown = attributes.map((attribute, i) => {
        for (let i = 0; i <= affectedAttributes.length; i++) {
            if (affectedAttributes[i] === attribute) {
                return;
            }
        }
        return (
            <div key={i} className={`${formStyles.input} ${formStyles.button} ${attributeColor(attribute.name)}`} onClick={() => { setAffectedAttributes([...affectedAttributes, attribute]); setDropdownIsDropped(false) }}>
                <h2 className={formStyles.text}>{attribute.name}</h2>
            </div>
        );
    })

    const renderAffectedAttributes = affectedAttributes.map((attribute, i) => {
        var indexInArray = affectedAttributes.indexOf(attribute);
        return (
            <div key={i} className={`${formStyles.input} ${attributeColor(attribute.name)}`}>
                <h2 className={formStyles.text}>{attribute.name}</h2>
                <div className={`${formStyles.input} ${formStyles.button}`} onClick={() => { setAffectedAttributes([...affectedAttributes.slice(0, indexInArray), ...affectedAttributes.slice(indexInArray + 1)]) }}>
                    <h2 className={formStyles.text}>X</h2>
                </div>
            </div >
        )
    })


    return (
        <div>
            <div className={`${formStyles.input} ${formStyles.button}`} onClick={() => { setDropdownIsDropped(!dropdownIsDropped) }}>
                <h2 className={formStyles.text}>Select affected attributes</h2>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    {dropdownIsDropped ? renderDropdown : null}
                </div>
                <div className={styles.column}>
                    {affectedAttributes != [] ? renderAffectedAttributes : null}
                </div>
            </div>
        </div>
    );
}

export default AffectedAttributeDropdown;