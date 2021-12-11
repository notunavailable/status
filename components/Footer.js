import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div className = {styles.box}>
            <div className = {styles.titleBox}>
                <h3 className = {styles.titles}>Contact Us</h3>
                <h3 className = {styles.titles}>About</h3>
                <h3 className = {styles.titles}>Social Media</h3>
            </div>
        </div>
    )
}

export default Footer;