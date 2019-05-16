import React, { Component } from 'react';

class SeachBox extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" placeholder="Search" />
                </form>
            </nav >
        );
    }
}

export default SeachBox;