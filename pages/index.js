import React from 'react';
import styles from '../styles/home.module.css';

export default function Home() {

  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title}>Home</h1>
        <label htmlFor="username">
          <input type="text" placeholder="enter username" />
        </label>
      </div>
    </div>
  )
}

//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