//@flow

import React from 'react';
import  { Link } from 'react-router-dom';

const Header = (props: { showSearch?: boolean, handleInput?: Function, searchTerm?: string}) => {
    let utilSpace;

    if(props.showSearch) {
        utilSpace = (
            <input onChange={props.handleInput} type="text" placeholder="Search" value={props.searchTerm}/>
        )
    } else {
        utilSpace = (
            <h2>
                <Link to="/search">
                    Back
                </Link>
            </h2>
        )
    };

    return (
        <header>
            <h1>
                <Link to="/">
                    TvHouse
                </Link>
            </h1>
            {utilSpace}
        </header>
    )
};

Header.defaultProps = {
    showSearch: false,
    handleInput: function noop() {},
    searchTerm: ''
}
export default Header