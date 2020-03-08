import React from "react";
import './style/SearchBar.css';
import logo from './png/dccs.png';
import {FiSearch} from 'react-icons/fi';

/*Represents search bar in application. You can search trough applicants by entering
* some text in search box(first name, last name, address, place of employment) end pressing enter.
* Click on DCCS logo returns you to the first (main) view.*/

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

    /*Send value from search input to searchApplicants() function (from ApplicantApp component),
     on Enter key down.*/
    searchOnEnter(event){
        if(event.key === 'Enter'){
            this.props.onEnterSearch(this.state.inputValue);
        }
    }

    /*On input change set state inputValue on new value.*/
    handleChange(event){
        this.setState({inputValue: event.target.value});
    }

    /*On click on DCCS logo clear search input and call function handleBackToHome() from ApplicantApp
    * to return on application main view.*/
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
