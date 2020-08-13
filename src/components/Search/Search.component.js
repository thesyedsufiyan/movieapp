import React, { useState } from 'react'
import Dropdown from '../dropdown/Dropdown.component';
import "../Search/Search.component.css";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('')

    const handleInput = e => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <input
                className='input-style'
                value={searchValue}
                placeholder='search movie'
                onChange={handleInput}
                type='text' />
            <Dropdown />

            <input
                className='input-button'
                onClick={callSearchFunction} type="submit" value='SEARCH' />
        </form>
    );
};

export default Search;