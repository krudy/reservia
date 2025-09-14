import React, { useState } from 'react'


function Searchbar() {
    const [term, setTerm] = useState('');

    const search = () => {
        console.log('asda');

    }

    const updateTerm = (event) => {
        setTerm(event.target.value);
        
        
    }

    return (

        <div className='d-flex'>

            <input 
                value={term}
                onChange={updateTerm}
                className="form-control" 
                text='text' 
                placeholder='Search...'>
            </input>
            <button
                onClick={search}
                className='ms-1 btn btn-secondary'>
                Search
            </button>

        </div>
    )
}

export default Searchbar;