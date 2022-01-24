import React from "react";
import styles from "../../styles/form.module.css";
  
const ToggleSwitch = ({ label, date, setDate, isEnding, setIsEnding }) => {

  const startDate = () => {
    setDate({start: Date.now(), end: date.end});
    setIsEnding(true);
    console.log("start")
  }

  const endDate = () => {
    setDate({start: date.start, end: Date.now()});
    setIsEnding(false);
    console.log("end")
  }

  return (
    <div className={styles.container}>
      {label}{" "}
      <div className={styles.toggleSwitch}>
        <input type="checkbox" className={styles.checkbox}
               name={label} id={label} onClick = {() => {isEnding ? endDate() : startDate()}}/>
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;