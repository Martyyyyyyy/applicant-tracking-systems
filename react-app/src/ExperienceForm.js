import React from "react";
import {MdAddCircle} from 'react-icons/md';
import './EditForm.css';

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyId: 0,
            companyName: '',
            companyPhoto: '',
            position: '',
            time: '',
            place: '',
        };
        this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
        this.handleChangeCompanyPhoto = this.handleChangeCompanyPhoto.bind(this);
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangePlace = this.handleChangePlace.bind(this);
        this.addNewExperience = this.addNewExperience.bind(this);
    }

    handleChangeCompanyName(event){
        event.preventDefault();
        this.setState({companyName: event.target.value});

    }
    handleChangeCompanyPhoto(event){
        event.preventDefault();
        this.setState({companyPhoto: event.target.value});

    }
    handleChangePosition(event){
        event.preventDefault();
        this.setState({position: event.target.value});
    }
    handleChangeTime(event){
        event.preventDefault();
        this.setState({time: event.target.value});
    }
    handleChangePlace(event){
        event.preventDefault();
        this.setState({place: event.target.value});
    }

    addNewExperience(event){
        event.preventDefault();
        let validInput = true;
        if(!this.state.companyName)
            validInput = false;
        if(!this.state.companyPhoto)
            validInput = false;
        if(!this.state.position)
            validInput = false;
        if(!this.state.time)
            validInput = false;
        if(!this.state.place)
            validInput = false;
        if(validInput){
            let exp = {
                companyId: this.state.companyId,
                companyName: this.state.companyName,
                companyPhoto: this.state.companyPhoto,
                position: this.state.position,
                time: this.state.time,
                place: this.state.place,
            };
            this.props.onAddNewExp(exp);
            let newId = this.state.companyId + 1;
            this.setState({companyId: newId});
            let formData = new FormData();
            formData.append('companyName', this.state.companyName);
            formData.append('companyPhoto', this.state.companyPhoto);
            formData.append('position', this.state.position);
            formData.append('time', this.state.time);
            formData.append('place', this.state.place);
            let url = 'http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants/insertExperience/' + this.props.applicantId;
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
                    alert('Experience added!');
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
                    <label className="col-sm-2 col-form-label">Company Name:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangeCompanyName} className="form-control" placeholder="Company Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Company Photo URL:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangeCompanyPhoto} className="form-control" placeholder="Company Photo URL"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Working Position:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangePosition} className="form-control" placeholder="Working Position"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Time Of Employment:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangeTime} className="form-control" placeholder="Time Of Employment"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Place Of Employment:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleChangePlace} className="form-control" placeholder="Place Of Employment"/>
                    </div>
                </div>
                <div>
                    <button onClick={this.addNewExperience} className="addNewBtnFont addNewBtnFontCss"><MdAddCircle/> Add</button>
                </div>
            </section>
        );
    }
}

export default ExperienceForm;