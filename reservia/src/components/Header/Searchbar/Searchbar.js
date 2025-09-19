import React, { useState } from 'react'


function Searchbar(props) {
    const [term, setTerm] = useState('');

    const search = () => {
        props.onSearch(term);
    }

    const updateTerm = (event) => {
        setTerm(event.target.value);
           
    }

    const onKeyDownHandler = (event) => {
        if(event.key === 'Enter'){
            search();
        }
    }

    return (

        <div className='d-flex'>

            <input 
                value={term}
                onKeyDown={onKeyDownHandler}
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