import React from "react";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import {IoIosCloseCircle} from 'react-icons/io';
import {MdUpdate} from 'react-icons/md';
import {MdAddCircle} from 'react-icons/md';
import './EditForm.css';


class EditForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            applicantInfo : {},
            firstName: '',
            lastName: '',
            applicantPhoto: '',
            placeOfEmpl: '',
            address: '',
            experience: [],
            education: [],
            newExperience: [],
            newEducation: [],
            addExperienceForm: false,
            addEducationForm: false,
        };

        this.updateApplicant = this.updateApplicant.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeApplicantPhoto = this.handleChangeApplicantPhoto.bind(this)
        this.handleChangePlaceOfEmpl = this.handleChangePlaceOfEmpl.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.closeAddExperience = this.closeAddExperience.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.closeAddEducation = this.closeAddEducation.bind(this);
        this.onAddNewExperience = this.onAddNewExperience.bind(this);
        this.onAddNewEducation = this.onAddNewEducation.bind(this);
    }

    updateApplicant(event){
        event.preventDefault();
        let validInput = true;
        if(!this.state.firstName)
            validInput = false;
        if(!this.state.lastName)
            validInput = false;
        if(!this.state.address)
            validInput = false;
        if(validInput){
            let formData = new FormData();
            formData.append('firstName', this.state.firstName);
            formData.append('lastName', this.state.lastName);
            formData.append('applicantPhoto', this.state.applicantPhoto);
            formData.append('placeOfEmpl', this.state.placeOfEmpl);
            formData.append('address', this.state.address);
            let url = 'http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants/update/' + this.props.id;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Origin' : 'http://localhost:3000',
                },
                body: formData,
            })
                .then((response) => {
                    console.log('response', response); return response.text();
                })
                .then((text) => {
                    console.log('text: ', text);
                    alert('Applicant updated!');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            alert('Check your input values to update personal information!');
            console.log('Check your input values to update personal information!');
        }
    }

    handleChangeFirstName(event){
        this.setState({firstName: event.target.value});
    }
    handleChangeLastName(event){
        this.setState({lastName: event.target.value});
    }
    handleChangeApplicantPhoto(event){
        this.setState({applicantPhoto: event.target.value});
    }
    handleChangePlaceOfEmpl(event){
        this.setState({placeOfEmpl: event.target.value});
    }
    handleChangeAddress(event){
        this.setState({address: event.target.value});
    }
    addExperience(event){
        event.preventDefault();
        this.setState({addExperienceForm: true});

    }
    closeAddExperience(event){
        event.preventDefault();
        this.setState({addExperienceForm: false});
    }
    addEducation(event){
        event.preventDefault();
        this.setState({addEducationForm: true});
    }
    closeAddEducation(event){
        event.preventDefault();
        this.setState({addEducationForm: false});
    }
    onAddNewExperience(exp){
        this.setState({newExperience: (this.state.newExperience).concat(exp)});
    }
    onAddNewEducation(edu){
        this.setState({newEducation: (this.state.newEducation).concat(edu)});
    }

    componentDidMount() {
        let url = 'http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants/edit/' + this.props.id;
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
                console.log('response', response); return response.json();
            })
            .then((json) =>
            {
                console.log('json: ', json);
                this.setState({
                    applicantInfo: json,
                    firstName: json.applicantFirstName,
                    lastName: json.applicantLastName,
                    applicantPhoto: json.applicantPhotoURL,
                    placeOfEmpl: json.placeOfEmployment,
                    address: json.addres,
                    experience: json.experience,
                    education: json.education,
                });
            })
            .catch((e) => console.log(e));
    }

    render(){
        let expForm;
        if(this.state.addExperienceForm){
            expForm = <ExperienceForm onAddNewExp={this.onAddNewExperience} applicantId={this.props.id} />;
        }
        let eduForm;
        if(this.state.addEducationForm){
            eduForm = <EducationForm onAddNewEdu={this.onAddNewEducation} applicantId={this.props.id} />;
        }
        return(
            <div className="editFormPopupCss">
                <form  className="editFormContainerCss">
                    <p className="editBarPCss">Edit Applicant Information</p>
                    <div className="editDivElemCss">

                        <p className="editPCss">Personal Information</p>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Full Name:</label>
                            <div className="col">
                                <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} className="form-control" placeholder="First name"/>
                            </div>
                            <div className="col">
                                <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} className="form-control" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Photo URL:</label>
                            <div className="col-sm-10">
                                <input type="text" value={this.state.applicantPhoto} onChange={this.handleChangeApplicantPhoto} className="form-control" placeholder="Photo URL"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Place Of Employment:</label>
                            <div className="col-sm-10">
                                <input type="text" value={this.state.placeOfEmpl} onChange={this.handleChangePlaceOfEmpl} className="form-control" placeholder="Place Of Employment"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Addres:</label>
                            <div className="col-sm-10">
                                <input type="text" value={this.state.address} onChange={this.handleChangeAddress} className="form-control" placeholder="Addres"/>
                            </div>
                        </div>

                        <p className="editPCss">Experience</p>
                        {this.state.experience.map(e =>
                            <section className="editSectionComp" key={e.experienceId}>
                                <div className="editDivComPhoto">
                                    <img className="editCompPhoto"  src={e.companyPhotoURL} alt="company"/>
                                </div>
                                <div className="editDivCompInfo">
                                    <p>{e.workingPosition} at {e.companyName}</p>
                                </div>
                            </section>
                        )}
                        {this.state.newExperience && this.state.newExperience.map(e =>
                                <section className="editSectionComp" key={e.companyId}>
                                    <div className="editDivComPhoto">
                                        <img className="editCompPhoto"  src={e.companyPhoto} alt="company"/>
                                    </div>
                                    <div className="editDivCompInfo">
                                        <p>{e.position} at {e.companyName}</p>
                                    </div>
                                </section>
                            )
                        }
                        <div>
                            <button onClick={this.addExperience} className="addNewBtnFont"><MdAddCircle/> Experience</button>
                            <button onClick={this.closeAddExperience} className="addNewBtnFont closeAddNewBtn"><IoIosCloseCircle/></button>
                        </div>
                        {expForm}

                        <p className="editPCss">Education</p>
                        {this.state.education.map(e =>
                            <section className="editSectionComp" key={e.educationId}>
                                <div className="editDivComPhoto">
                                    <img className="editCompPhoto"  src={e.institutionPhotoURL} alt="institution"/>
                                </div>
                                <div className="editDivCompInfo">
                                    <p>{e.diploma} - {e.modul}</p>
                                </div>
                            </section>
                        )}
                        {this.state.newEducation && this.state.newEducation.map(e =>
                            <section className="editSectionComp" key={e.institutionId}>
                                <div className="editDivComPhoto">
                                    <img className="editCompPhoto"  src={e.institutionPhoto} alt="institution"/>
                                </div>
                                <div className="editDivCompInfo">
                                    <p>{e.module}</p>
                                </div>
                            </section>
                        )
                        }
                        <div>
                            <button onClick={this.addEducation} className="addNewBtnFont"><MdAddCircle/> Education</button>
                            <button onClick={this.closeAddEducation}  className="addNewBtnFont closeAddNewBtn"><IoIosCloseCircle/></button>
                        </div>
                        {eduForm}

                    </div>
                    <div className="editBtnDivCss">
                        <button onClick={this.props.onCloseForm} className="editBtnFontCss"><IoIosCloseCircle/> Close</button>
                        <button onClick={this.updateApplicant} className="editBtnFontCss updateBtnCss"><MdUpdate/> Update</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditForm;