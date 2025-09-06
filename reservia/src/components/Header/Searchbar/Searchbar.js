import React from 'react'
import styles from './Searchbar.module.css'

function Searchbar(){
    return(
          <div>
                <input className={styles.input} text='text' placeholder='Search...'></input>
                <button>Search</button>
            </div>
    )
}

export default Searchbar;