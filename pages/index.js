import React, {useState} from 'react';
import styles from '../styles/home.module.css';
import TextInput from '../components/TextInput';

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title}>Home</h1>
        <TextInput value = {value} setValue = {setValue} placeholder = "testing"/>
      </div>
    </div>
  );
}