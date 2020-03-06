import React from "react";
import ExpEduInfo from "./ExpEduInfo";
import ChatInfo from "./ChatInfo";
import EditForm from "./EditForm";
import SearchBar from "./SearchBar";
import ApplicantInfo from "./ApplicantInfo";
import './ApplicantApp.css';

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

    searchApplicants(input){
        sessionStorage.setItem('searchInput', input);
        this.setState({showMoreInfo: false, classStyle: "firstDivStyle",searchingApplicants: true,});
        sessionStorage.setItem('showMoreInfo', 'false');
        sessionStorage.setItem('classStyle', 'firstDivStyle');
        sessionStorage.setItem('searchingApplicants', 'true');
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

    handleDelete(name){
        alert("Applicant "+name+" deleted.");
    }

    handleEdit(id){
        this.setState({showEditForm: true, applicantIdToEdit: id});
        sessionStorage.setItem('showEditForm', 'true');
        sessionStorage.setItem('applicantIdToEdit', id);
    }

    /*Send as props to EditForm, on button click Close,
	* from EditForm close edit form */
    closeForm(){
        this.setState({showEditForm: false});
        sessionStorage.setItem('showEditForm', 'false');
    }

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



    /*If Applicant is chosen show more info about that applicant (Experience, Education, Chat with admin).
	* Map thru array of Applicants (applicants) and for each applicant show
	* Applicants basic info (Name, Photo, Place of Employment, Address).
	* If showEditForm have true value open edit pop-up and edit applicant info.*/
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