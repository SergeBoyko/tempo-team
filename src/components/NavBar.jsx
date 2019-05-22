import React from 'react';
import SearchBox from '../components/SeachBox/SeachBox'

const NavBar = ({ value, onChange }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light search-form">
            <form className="form-inline my-2 my-lg-0">
                <SearchBox value={value} onChange={onChange} />
            </form>
        </nav >
    );

}

export default NavBar;