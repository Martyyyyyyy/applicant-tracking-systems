import React from "react";
import './SearchBar.css';
import logo from './png/dccs.png';
import {FiSearch} from 'react-icons/fi';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
        };
        this.searchOnEnter = this.searchOnEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.backToHomeAndClearInput = this.backToHomeAndClearInput.bind(this);
    }

    /*Send value from search input to ApplicantApp on Enter key down*/
    searchOnEnter(event){
        if(event.key === 'Enter'){
            this.props.onEnterSearch(this.state.inputValue);
        }
    }

    handleChange(event){
        this.setState({inputValue: event.target.value});
    }

    backToHomeAndClearInput(){
        this.setState({inputValue: ''});
        this.props.onLogoClick();
    }

    render(){
        return(
            <div className="searchBar">
                <div className="logoDiv searchDivEle">
                    <img className="logoImg"src={logo} alt="DCCS" onClick={this.backToHomeAndClearInput}/>
                </div>
                <div className="inputDiv searchDivEle">
                    <label className="searchLabel"><FiSearch/></label>
                    <input className="searchInput" type="text" value={this.state.inputValue}
                           onKeyDown={this.searchOnEnter} onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;
