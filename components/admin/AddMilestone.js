import React from 'react';
import formStyles from '../../styles/form.module.css';
import styles from '../../styles/add.module.css';


const AddMilestone = ({milestones, setMilestones}) => {
    const renderMilestoneSetter = milestones.map((milestone, i) => {
        return (
            <div key={i} className={`${formStyles.input} ${styles.milestoneBox}`}>
                <div className={styles.milestoneSetter}>
                    <input
                        type="text"
                        value={milestone.name}
                        placeholder="milestone name"
                        className={`${formStyles.input} ${formStyles.textInput}`}
                        onChange={e => setMilestones([...milestones.slice(0, i), { name: e.target.value, level: milestone.level, description: milestone.description }, ...milestones.slice(i + 1)])}
                    />
                    <input
                        type="text"
                        value={milestone.level}
                        placeholder="level"
                        className={`${formStyles.input} ${formStyles.textInput}`}
                        onChange={e => setMilestones([...milestones.slice(0, i), { name: milestone.name, level: e.target.value, description: milestone.description }, ...milestones.slice(i + 1)])}
                    />
                    <div className={`${formStyles.input} ${formStyles.button}`} onClick={() => { setMilestones([...milestones.slice(0, i), ...milestones.slice(i + 1)]) }}>
                        <h2 className={formStyles.text}>delete</h2>
                    </div>
                </div>
                <textarea
                    type="text"
                    placeholder="description"
                    className={`${formStyles.input} ${styles.skillDescription}`}
                    value={milestone.description}
                    onChange={e => setMilestones([...milestones.slice(0, i), { name: milestone.name, level: milestone.level, description: e.target.value }, ...milestones.slice(i + 1)])}
                />
            </div>

        );
    })

    return (
        <div>
            {renderMilestoneSetter}
        </div>
    );
}

export default AddMilestone;