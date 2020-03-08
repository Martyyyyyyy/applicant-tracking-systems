import React from "react";
import ExpEduInfo from "./ExpEduInfo";
import ChatInfo from "./ChatInfo";
import EditForm from "./EditForm";
import SearchBar from "./SearchBar";
import ApplicantInfo from "./ApplicantInfo";
import './style/ApplicantApp.css';

/*This is the main component of application, controls visibility of other components
* (ChatInfo, ExpEduInfo, EditForm) and renders them together with SearchBar and ApplicantInfo component.*/
class ApplicantApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            applicants: [],
            chosenApplicantId: null,
            applicantMoreInfo: {},
            showMoreInfo: false,
            showEditForm: false,
            applicantIdToEdit: null,
            searchingApplicants : false,
            classStyle: "firstDivStyle",
        };
        this.handleMoreInfo = this.handleMoreInfo.bind(this);
        this.handleBackToHome = this.handleBackToHome.bind(this);
        this.searchApplicants = this.searchApplicants.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    /*Take applicantId from ApplicantInfo and send GET request to server for more information
    * about selected applicant. Save response data into applicantMoreInfo object state and set
    * visibility on for ExpEduInfo component, change view from main to second.
    * Save states into sessionStorage in case of reload page. */
    handleMoreInfo(id){
        let url = 'http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants/moreInfo/' + id;
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Origin' : 'http://localhost:3000',
            }
        })
            .then((response) =>
            {
                console.log('response', response); return response.json()
            })
            .then((json) =>
            {
                console.log('json: ', json);
                this.setState({applicantMoreInfo: json});
            })
            .catch((e) => console.log(e));

        this.setState({chosenApplicantId: id, showMoreInfo: true, classStyle: "secondDivStyle"});
        sessionStorage.setItem('showMoreInfo', 'true');
        sessionStorage.setItem('classStyle', 'secondDivStyle');
        sessionStorage.setItem('chosenApplicantId', id);
    }

    /*Return to main view on DCCS logo click, if we were in search mode
    * before that it is necessary to load all applicant from base again
    * (send GET request to server to return all applicants from base and set
    * applicants array state ).
    * Save states into sessionStorage in case of reload page.*/
    handleBackToHome(){
        this.setState({showMoreInfo: false, classStyle: "firstDivStyle",showEditForm: false});
        sessionStorage.setItem('showMoreInfo', 'false');
        sessionStorage.setItem('classStyle', 'firstDivStyle');
        sessionStorage.setItem('showEditForm', 'false');
        if(this.state.searchingApplicants){
            fetch('http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants', {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin' : 'http://localhost:3000',
                }
            })
                .then((response) =>
                {
                    console.log('response', response); return response.json()
                })
                .then((json) =>
                {
                    console.log('json: ', json);
                    this.setState({applicants: json});
                })
                .catch((e) => console.log(e)) ;
            this.setState({searchingApplicants: false});
            sessionStorage.setItem('searchingApplicants', 'false');
        }
    }

    /*Return to main view and save states into sessionStorage in case of reload page.
    * Take input value from SearchBar and send GET request to server to
    * search trough applicants, server returns applicants that satisfy the search criteria,
    * set applicants state. */
    searchApplicants(input){
        sessionStorage.setItem('searchInput', input);
        this.setState({showMoreInfo: false, classStyle: "firstDivStyle",searchingApplicants: true, showEditForm: false});
        sessionStorage.setItem('showMoreInfo', 'false');
        sessionStorage.setItem('classStyle', 'firstDivStyle');
        sessionStorage.setItem('searchingApplicants', 'true');
        sessionStorage.setItem('showEditForm', 'false');
        let url = 'http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants/search/' + input;
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Origin' : 'http://localhost:3000',
            }
        })
            .then((response) =>
            {
                console.log('response', response); return response.json()
            })
            .then((json) =>
            {
                console.log('json: ', json);
                this.setState({applicants: json});
            })
            .catch((e) => console.log(e)) ;
    }

    /*After delete applicant (in ApplicantInfo.js) load applicants from base
    * to refresh view, load depends on view mode before delete. */
    handleDelete(name){
        if(this.state.searchingApplicants){
            let searchInputSess =  sessionStorage.getItem('searchInput');
            this.searchApplicants(searchInputSess);
        } else {
            fetch('http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants', {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin' : 'http://localhost:3000',
                }
            })
                .then((response) =>
                {
                    console.log('response', response); return response.json()
                })
                .then((json) =>
                {
                    console.log('json: ', json);
                    this.setState({applicants: json});
                })
                .catch((e) => console.log(e)) ;
        }
        alert("Applicant "+name+" deleted.");
    }

    /*After click on edit button, take applicantId from ApplicantInfo and open edit form
    *(set visibility on true). Save states into sessionStorage in case of reload page. */
    handleEdit(id){
        this.setState({showEditForm: true, applicantIdToEdit: id});
        sessionStorage.setItem('showEditForm', 'true');
        sessionStorage.setItem('applicantIdToEdit', id);
    }

    /*After click on close button from EditForm close edit form,
    * set visibility on false. Save states into sessionStorage in case of reload page.*/
    closeForm(){
        this.setState({showEditForm: false});
        sessionStorage.setItem('showEditForm', 'false');
    }

    /*Invoked immediately after ApplicantApp component is mounted. Load states from
    * sessionStorage and set states in case reload page happened. Depending on previous state,
    * before reload call functions and send request to server. If componentDidMount happens for the
    * firs time set view on main view and load all applicants from base. */
    componentDidMount() {
        let searchInputSess =  sessionStorage.getItem('searchInput');
        let showMoreInfoSess = sessionStorage.getItem('showMoreInfo') === 'true';
        let showEditFormSess = sessionStorage.getItem('showEditForm') === 'true';
        let searchingApplicantsSess = sessionStorage.getItem('searchingApplicants') === 'true';
        let classStyleSess  = sessionStorage.getItem('classStyle');
        let chosenApplicantIdSess = sessionStorage.getItem('chosenApplicantId');
        let applicantIdToEditSess = sessionStorage.getItem('applicantIdToEdit');
        if(!showMoreInfoSess)
            classStyleSess = 'firstDivStyle';
        this.setState({showMoreInfo: showMoreInfoSess, showEditForm: showEditFormSess, searchingApplicants: searchingApplicantsSess,
            classStyle: classStyleSess, chosenApplicantId: chosenApplicantIdSess, applicantIdToEdit: applicantIdToEditSess});

        if(searchingApplicantsSess){
            this.searchApplicants(searchInputSess);
        } else {
            fetch('http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants', {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin' : 'http://localhost:3000',
                }
            })
                .then((response) =>
                {
                    console.log('response', response); return response.json()
                })
                .then((json) =>
                {
                    console.log('json: ', json);
                    this.setState({applicants: json});
                })
                .catch((e) => console.log(e)) ;
        }

        if(showMoreInfoSess)
            this.handleMoreInfo(chosenApplicantIdSess);
        if(showEditFormSess)
            this.handleEdit(applicantIdToEditSess);

    }

    /*Main render, render other components depending on state.
    * Map through array of Applicants (applicants) and for each applicant show
    * applicants basic info (name, photo, place of employment, address).
    * If applicant is chosen show more info about that applicant (experience, education and chat with admin).
    * If showEditForm is set on true, open edit pop-up and edit applicant info.*/
    render(){
        let expEduInfo = null;
        let chatInfo = null;
        let editForm = null;
        if(this.state.applicantMoreInfo.applicantId && this.state.showMoreInfo){
            expEduInfo = <ExpEduInfo education={this.state.applicantMoreInfo.education} experience={this.state.applicantMoreInfo.experience}/>;
            chatInfo = <ChatInfo chat={this.state.applicantMoreInfo.chat}
                                 applName={this.state.applicantMoreInfo.fullName} applPhoto={this.state.applicantMoreInfo.applicantPhotoURL}/>;
        }
        if(this.state.showEditForm){
            editForm = <EditForm onCloseForm={this.closeForm} id={this.state.applicantIdToEdit}/>;
        }
        return(
            <div>
                <SearchBar onEnterSearch={this.searchApplicants} onLogoClick={this.handleBackToHome}/>
                {editForm}
                <section className="sectionStyle">
                    <div className="sectionStyle2">
                        <div className={this.state.classStyle}>
                            <p className="textCss">
                                Showing {this.state.applicants.length} results
                            </p>
                            {this.state.applicants.map(a =>
                                <ApplicantInfo key={a.applicantId} info={a} onEdit={this.handleEdit}
                                               onMoreInfoChange={this.handleMoreInfo} onDelete={this.handleDelete}/>
                            )}
                        </div>
                        {expEduInfo}
                        {chatInfo}
                    </div>
                </section>
            </div>
        );
    }
}

export default ApplicantApp;

/* => Go to SearchBar.js */
/* => Go to ApplicantInfo.js */
/* => Go to EditForm.js */