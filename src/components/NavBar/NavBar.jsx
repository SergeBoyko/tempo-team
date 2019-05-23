import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../SeachBox/SeachBox';

const NavBar = ({ value, onChange, groupdetails }) => {
    let style;
    if (groupdetails) {
        style = { visibility: "hidden" }
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light search-form" data-test="NavBar">
            <form className="form-inline my-2 my-lg-0" style={style}>
                <SearchBox value={value} onChange={onChange} />
            </form>
        </nav >
    );

}

NavBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default NavBar;