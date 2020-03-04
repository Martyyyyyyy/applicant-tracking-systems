import React from "react";
import {IoIosCloseCircle} from 'react-icons/io';
import {MdUpdate} from 'react-icons/md';
import {MdAddCircle} from 'react-icons/md';
import './EditForm.css';


class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            companyPhoto: '',
            position: '',
            time: '',
            place: '',
        };
    }
    render(){
        return(
            <section>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Company Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Company Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Company Photo URL:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Company Photo URL"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Working Position:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Working Position"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Time Of Employment:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Time Of Employment"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Place Of Employment:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Place Of Employment"/>
                    </div>
                </div>
            </section>
        );
    }
}

class  EducationForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <section>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Institution Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Institution Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Institution Photo URL:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Institution Photo URL"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Diploma:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Diploma"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Modul:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Modul"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Attendace Time:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Attendace Time"/>
                    </div>
                </div>
            </section>
        );
    }
}

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
    }

    updateApplicant(event){
        event.preventDefault();
        alert("Update applicant information!");
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
                console.log('response', response); return response.json()
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
            expForm = <ExperienceForm />;
        }
        let eduForm;
        if(this.state.addEducationForm){
            eduForm = <EducationForm />;
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
                        <div>
                            <button onClick={this.addExperience} className="addNewBtnFont"><MdAddCircle/> Experience</button>
                            <button onClick={this.closeAddExperience} className="addNewBtnFont closeAddNewBtn"><IoIosCloseCircle/></button>
                        </div>
                        {expForm}

                        <p className="editPCss">Education</p>
                        {this.state.education.map(e =>
                            <section className="editSectionComp" key={e.educationId}>
                                <div className="editDivComPhoto">
                                    <img className="editCompPhoto"  src={e.institutionPhotoURL} alt="company"/>
                                </div>
                                <div className="editDivCompInfo">
                                    <p>{e.diploma} - {e.modul}</p>
                                </div>
                            </section>
                        )}
                        <div>
                            <button onClick={this.addEducation} className="addNewBtnFont"><MdAddCircle/> Education</button>
                            <button onClick={this.closeAddEducation} className="addNewBtnFont closeAddNewBtn"><IoIosCloseCircle/></button>
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