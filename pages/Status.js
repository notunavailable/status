import React from 'react';
import StatusList from '../components/StatusList';
import styles from '../styles/status.module.css';

import attributes from '../data/attributes.json';
import user from '../data/user.json';
import level from '../data/level.json';

const Status = () => {

    for (var i = 0; i < attributes.length; i++){
        var obj = attributes[i];
        for (var key in obj){
            var attrName = key;
            var attrValue = obj[key];
            console.log(`${attrName}: ${attrValue}`)
        }
    }

    var userData = [{title: "Name", value: user.status.name}, {title: "Age", value: user.status.age}, {title: "Level", value: level.currentLevel}, {title: "Exp", value: `${level.exp}/??`}];

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Status</h1>
            <StatusList items = {userData} />
            <StatusList items={attributes} />
        </div>
    );
}

export default Status;