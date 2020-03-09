import React from "react";
import {MdAddCircle} from 'react-icons/md';
import './style/EditForm.css';

/*Form with inputs for adding new Education.*/
class  EducationForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            institutionId: 0,
            institutionName: '',
            institutionPhoto: '',
            diploma: '',
            module: '',
            attendance: '',
        };
        this.handleChangeInstitutionName = this.handleChangeInstitutionName.bind(this);
        this.handleChangeInstitutionPhoto = this.handleChangeInstitutionPhoto.bind(this);
        this.handleChangeDiploma = this.handleChangeDiploma.bind(this);
        this.handleChangeModule = this.handleChangeModule.bind(this);
        this.handleChangeAttendance = this.handleChangeAttendance.bind(this);
        this.addNewEducation = this.addNewEducation.bind(this);
    }

    /*Handlers for education information inputs, on change set state with new value.*/
    handleChangeInstitutionName(event){
        event.preventDefault();
        this.setState({institutionName: event.target.value});
    }
    handleChangeInstitutionPhoto(event){
        event.preventDefault();
        this.setState({institutionPhoto: event.target.value});
    }
    handleChangeDiploma(event){
        event.preventDefault();
        this.setState({diploma: event.target.value});
    }
    handleChangeModule(event){
        event.preventDefault();
        this.setState({module: event.target.value});
    }
    handleChangeAttendance(event){
        event.preventDefault();
        this.setState({attendance: event.target.value});
    }

    /*On click +Add button check if inputs are valid and then create object with
    * education information and send it to the function onAddNewEducation() from EditForm component.
    * Create FromData object, insert values from education information inputs into formData object,
    *  send POST request to server with dataForm object and applicantId.*/
    addNewEducation(event){
        event.preventDefault();
        let validInput = true;
        if(!this.state.institutionName)
            validInput = false;
        if(!this.state.institutionPhoto)
            validInput = false;
        if(!this.state.diploma)
            validInput = false;
        if(!this.state.module)
            validInput = false;
        if(!this.state.attendance)
            validInput = false;
        if(validInput){
            let edu = {
                institutionId: this.state.institutionId,
                institutionName: this.state.institutionName,
                institutionPhoto: this.state.institutionPhoto,
                diploma: this.state.diploma,
                module: this.state.module,
                attendance: this.state.attendance,
            };
            this.props.onAddNewEdu(edu);
            let newId = this.state.institutionId + 1;
            this.setState({institutionId: newId});
            let formData = new FormData();
            formData.append('institutionName', this.state.institutionName);
            formData.append('institutionPhoto', this.state.institutionPhoto);
            formData.append('diploma', this.state.diploma);
            formData.append('module', this.state.module);
            formData.append('attendance', this.state.attendance);
            let url = 'http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants/insertEducation/' + this.props.applicantId;
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
                    alert('Education added!');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            alert('Invalid input!');
        }
    }

    render(){
        return(
            <section>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Institution Name:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangeInstitutionName} className="form-control" placeholder="Institution Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Institution Photo URL:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangeInstitutionPhoto} className="form-control" placeholder="Institution Photo URL"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Diploma:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangeDiploma} className="form-control" placeholder="Diploma"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Module:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangeModule} className="form-control" placeholder="Module"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Attendance Time:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangeAttendance} className="form-control" placeholder="Attendance Time"/>
                    </div>
                </div>
                <div>
                    <button onClick={this.addNewEducation} className="addNewBtnFont addNewBtnFontCss"><MdAddCircle/> Add</button>
                </div>
            </section>
        );
    }
}

export default EducationForm;