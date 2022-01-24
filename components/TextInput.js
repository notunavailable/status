import React from 'react';
import styles from '../styles/form.module.css';

const TextInput = ({value, setValue, placeholder, ...args}) => {

    return(
        <input
            className = {styles.textInput}
            type = "text"
            placeholder = {placeholder}
            value = {value}
            onChange = {(e) => {setValue(e.target.value, ...args)}}
        />
    );
}

export default TextInput;