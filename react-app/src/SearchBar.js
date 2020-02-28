import React from "react";
import './SearchBar.css';
import logo from './png/dccs.png';
import {FiSearch} from 'react-icons/fi';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.searchOnEnter = this.searchOnEnter.bind(this);
    }

    /*Send value from search input to ApplicantApp on Enter key down*/
    searchOnEnter(event){
        if(event.key === 'Enter'){
            this.props.onEnterSearch(event.target.value);
        }
    }

    render(){
        return(
            <div className="searchBar">
                <div className="logoDiv searchDivEle">
                    <img className="logoImg"src={logo} alt="DCCS" onClick={this.props.onLogoClick}/>
                </div>
                <div className="inputDiv searchDivEle">
                    <label className="searchLabel"><FiSearch/></label>
                    <input className="searchInput" type="text" onKeyDown={this.searchOnEnter}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;
