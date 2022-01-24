import React from 'react';
import StatusList from '../components/StatusList';
import styles from '../styles/status.module.css';

import attributes from '../data/attributes.json';
import user from '../data/user.json';
import level from '../data/level.json';
import skills from '../data/skills.json';

const Status = () => {

    /*var userData = [];
    for (var key in user.status) {
        var attrName = key;
        var attrValue = user[key];
        userData.push({ title: `${attrName}`, value: `${attrValue}` })
    }*/

    var userData = [{ title: "Name", value: user.status.name }, { title: "Age", value: user.status.age }, { title: "Level", value: level.currentLevel }, { title: "Exp", value: `${level.exp}/??` }];

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Status</h1>
            <StatusList items={userData} />
            <StatusList items={attributes} />
            <StatusList items={skills} />
        </div>
    );
}

export default Status;