import React from "react";
import './SearchBar.css';
import logo from './png/dccs.png';
import {FiSearch} from 'react-icons/fi';

class SearchBar extends React.Component {
    render(){
        return(
            <div className="searchBar">
                <div className="logoDiv">
                    <img className="logoImg"src={logo} alt="DCCS"/>
                </div>
                <div className="inputDiv">
                    <label><FiSearch/></label>
                    <input className="searchInput" type="text"/>
                </div>
            </div>
        );
    }
}

export default SearchBar;
