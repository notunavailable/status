import React, {useState} from 'react';
import styles from '../styles/home.module.css';

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title}>Home</h1>
        
      </div>
    </div>
  );
}