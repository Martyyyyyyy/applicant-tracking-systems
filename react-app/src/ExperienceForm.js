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