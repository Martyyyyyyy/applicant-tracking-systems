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
            classStyle: "firstDivStyle",
        };
        this.handleMoreInfo = this.handleMoreInfo.bind(this);
        this.searchApplicants = this.searchApplicants.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.editApplicant = this.editApplicant.bind(this);
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
    }

    searchApplicants(input){
        this.setState({showMoreInfo: false, classStyle: "firstDivStyle"});
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

    /*Send as props to EditForm, on button click Close,
	* from EditForm close edit form */
    closeForm(){
        this.setState({showEditForm: false});
    }

    /*Send as props to ApplicantInfo, on button click Edit,
	* from ApplicantInfo open edit pop-up.*/
    editApplicant(){
        this.setState({showEditForm: true});
    }

    componentDidMount() {
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
            editForm = <EditForm triggerCloseForm={this.closeForm}/>;
        }
        return(
            <div>
                <SearchBar onEnterSearch={this.searchApplicants}/>
                <section className="sectionStyle">
                    {editForm}
                    <div className="sectionStyle2">
                        <div className={this.state.classStyle}>
                            <p className="textCss">
                                Showing {this.state.applicants.length} results
                            </p>
                            {this.state.applicants.map(a =>
                                <ApplicantInfo key={a.applicantId} info={a} triggerEditForm={this.editApplicant}
                                               onMoreInfoChange={this.handleMoreInfo}/>
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