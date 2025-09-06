import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <input className={styles.input} text='text' placeholder='Search...'></input>
                <button>Search</button>
            </div>
        </header>
    );
}

export default Header;
