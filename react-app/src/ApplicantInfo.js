import React from 'react';
import './ApplicantInfo.css';
import {MdDelete} from 'react-icons/md';
import {FaUserEdit} from 'react-icons/fa';


class ApplicantInfo extends React.Component {

	constructor(props){
		super(props);
		this.deleteApplicant = this.deleteApplicant.bind(this);
		this.handleClickOnApplicant = this.handleClickOnApplicant.bind(this);
	}

	/*Lifting state up, with this function we can send chosen applicant id
	* from ApplicantInfo to ApplicantList (from child class to parent class)*/
	handleClickOnApplicant(e){
		this.props.onMoreInfoChange(this.props.info.applicantId);
	}

	/*Delete selected applicant. */
	deleteApplicant(){
		alert("Delete applicant with id: "+ this.props.info.applicantId);
	}

	/*Click on applicant opens more info of chosen applicant (Education, Experience, Chat)
	* Delete button delete applicant from base,
	* Edit Button opens edit pop-up.*/
	render(){
		return(
			<section>
				<div className="divElInf"  onClick={this.handleClickOnApplicant}>
					<div className="imgDivInf">
						<img className="applImgInf" src={this.props.info.applicantPhotoURL} alt="Applicant"/>
					</div>
					<div className="infoDivInf">
						<p className="textCss2Inf">{this.props.info.fullName}</p>
						<p className="textCss3Inf">{this.props.info.placeOfEmployment}</p>
						<p className="textCss1Inf">{this.props.info.addres}</p>
					</div>
				</div>
				<div className="btnDiv">
					<button className="deleteBtn btnFont" onClick={this.deleteApplicant} ><MdDelete/> Delete</button>
					<button className="editBtn btnFont" onClick={this.props.triggerEditForm}><FaUserEdit/> Edit</button>
				</div>
			</section>
		);
	}

} 

export default ApplicantInfo;

