import React from 'react';
import './ApplicantInfo.css';
import {MdDelete} from 'react-icons/md';
import {MdUpdate} from 'react-icons/md';
import {FaUserEdit} from 'react-icons/fa';
import {IoIosCloseCircle} from 'react-icons/io';

class EditForm extends React.Component{
	render(){
		return(
			<div className="formPopup">
				<form  className="formContainer">
					<p className="editBar">Edit Applicant Information</p>
				    <div className="editDivEl">
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
				    <div className="btnDiv">
				    	<button onClick={this.props.triggerCloseForm} className="btnFont"><IoIosCloseCircle/> Close</button>
				        <button className="btnFont"><MdUpdate/> Update</button>
				    </div>
				</form>
			</div>
			);
	}
}

class ApplicantInfo extends React.Component {
	constructor(props){
		super(props);
		this.deleteApplicant = this.deleteApplicant.bind(this);
		this.editApplicant = this.editApplicant.bind(this);
		this.closeForm = this.closeForm.bind(this);
		this.state = {
				showEditForm: false,
		};
	}
	deleteApplicant(){
		alert("Delete "+ this.props.info.name);
	}
	editApplicant(){
		this.setState({showEditForm: true});
	}
	closeForm(){
		this.setState({showEditForm: false});
	}
	render(){
		let editForm = null; 
		if(this.state.showEditForm){
			editForm = <EditForm triggerCloseForm={this.closeForm}/>;
		}
		return(
		  <section>
		  {editForm}
		  <div className="divElInf" onClick={this.props.triggerParentUpdate}>
		    <div className="imgDivInf">
		    	<img className="applImgInf" src={this.props.info.photoURL} alt="Applicant photo"/>
		    </div>
		    <div className="infoDivInf">
		    	<p className="textCss2Inf">{this.props.info.name}</p>
		    	<p className="textCss3Inf">{this.props.info.placeOfEmployment}</p>
		    	<p className="textCss1Inf">{this.props.info.addres}</p>
		    </div>
		  </div>
		  <div className="btnDiv">
	    	<button className="deleteBtn btnFont" onClick={this.deleteApplicant} ><MdDelete/> Delete</button>
	    	<button className="editBtn btnFont" onClick={this.editApplicant}><FaUserEdit/> Edit</button>
	       </div>
	       </section>
		);
	}
} 

export default ApplicantInfo;

