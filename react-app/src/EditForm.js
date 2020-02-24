import React from "react";
import {IoIosCloseCircle} from 'react-icons/io';
import {MdUpdate} from 'react-icons/md';
import './EditForm.css';

class EditForm extends React.Component{
    render(){
        return(
            <div className="editFormPopup">
                <form  className="editFormContainer">
                    <p className="editBarP">Edit Applicant Information</p>
                    <div className="editDivElem">
                        <p className="editP">Basic Information</p>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Full Name:</label>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name"/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Photo URL:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Photo URL"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Place Of Employment:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Place Of Employment"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Addres:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Addres"/>
                            </div>
                        </div>
                        <p className="editP">Experience</p>
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
                        <p className="editP">Education</p>
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
                    </div>
                    <div className="editBtnDiv">
                        <button onClick={this.props.triggerCloseForm} className="editBtnFont"><IoIosCloseCircle/> Close</button>
                        <button className="editBtnFont"><MdUpdate/> Update</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditForm;