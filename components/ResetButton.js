import React from "react";
import styles from '../styles/timer.module.css';

export default function ResetButton(props) {
	const ActiveButtons = (
		<h2 className={`${styles.resetButton} ${styles.centerH}`} onClick={props.handleReset}>
			Reset
		</h2>
	);

	return (
		<div>
			<div>{props.isPaused ? ActiveButtons : null}</div>
		</div>
	);
}
