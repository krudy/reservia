import React from 'react'


function Searchbar() {
    return (

        <div className='d-flex'>

            <input className={`form-control`} text='text' placeholder='Search...'></input>
            <button className='btn btn-primary'>Search</button>

        </div>
    )
}

export default Searchbar;