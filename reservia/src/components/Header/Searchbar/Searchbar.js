import React from 'react'


function Searchbar() {
    return (

        <div className='d-flex'>

            <input className="form-control" text='text' placeholder='Search...'></input>
            <button className='ms-1 btn btn-secondary'>Search</button>

        </div>
    )
}

export default Searchbar;