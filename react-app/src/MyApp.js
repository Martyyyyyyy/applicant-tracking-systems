import React from 'react';
import './MyApp.css';
import logo from './dccs.png';
import {FiSearch} from 'react-icons/fi';
import ApplicantList from './ApplicantList.js';


class SearchBar extends React.Component {
  render(){
    return(
      <div id="searchBar">
        <div id="logoDiv">
          <img id="logoImg"src={logo}/>
        </div>
        <div id="inputDiv">
          <spam><FiSearch/></spam>
          <input id="searchInput" type="text"/>
        </div>
      </div>
    );
  }
}

class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {
            applicantNames: "",
            allApplicans: [],
        };
    }
    componentDidMount() {
        /*
        fetch('http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants/names')
            .then(result => {this.setState({applicantNames: result}); });
         */
        fetch('http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants')
            .then(res => res.json())
            .then((data) => {
                this.setState({ allApplicans: data })
            })
            .catch(console.log)
    }

    render(){
    return(
      <div>
        <SearchBar />
        <ApplicantList />
        <div>{this.state.applicantNames}</div>
          {this.state.allApplicans.map((a) => <p> {a.addres}</p>)}
      </div>
    );
  }
}

export default MyApp;

