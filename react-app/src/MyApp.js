import React from 'react';
import ApplicantList from './ApplicantList.js';
import SearchBar from './SearchBar';

class MyApp extends React.Component {
    render(){
        return(
            <div>
                <SearchBar />
                <ApplicantList />
            </div>
        );
    }
}

export default MyApp;

