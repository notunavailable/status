import React from 'react';
import styles from '../styles/header.module.css';
import Link from 'next/link'

const Header = () => {
    return (
        <div className = {styles.box}>
            <Link href = "http://localhost:3000/Skills">
                <h3 className = {styles.titles}>Skills</h3>
            </Link>
            <Link href = "http://localhost:3000/Status">
                <h3 className = {styles.titles}>Status</h3>
            </Link>
            <Link href = "http://localhost:3000/About">
                <h3 className = {styles.titles}>About</h3>
            </Link>
            <Link href = "http://localhost:3000">
                <h3 className = {styles.titles}>Home</h3>
            </Link>
            <Link href = "http://localhost:3000/Admin">
                <h3 className = {styles.titles}>Admin</h3>
            </Link>
        </div>
    )
}

export default Header;