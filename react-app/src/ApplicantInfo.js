import React from 'react';
import './ApplicantInfo.css';
import {MdDelete} from 'react-icons/md';
import {FaUserEdit} from 'react-icons/fa';


class ApplicantInfo extends React.Component {

	constructor(props){
		super(props);
		this.deleteApplicant = this.deleteApplicant.bind(this);
		this.editApplicant = this.editApplicant.bind(this);
		this.handleClickOnApplicant = this.handleClickOnApplicant.bind(this);
	}

	/*Delete selected applicant. */
	deleteApplicant(){
		let url = 'http://localhost:8080/applicant-tracking-systems-1.0-SNAPSHOT/applicants/deleteApplicant/' + this.props.info.applicantId;
		fetch(url, {
			method: 'DELETE',
			mode: 'cors',
			headers: {
				'Content-Type': 'text/plain',
				'Origin' : 'http://localhost:3000',
			}
		})
			.then((response) => {
				console.log('response', response); return response.text();
			})
			.then((text) => {
				console.log('text: ', text);
				this.props.onDelete(this.props.info.fullName);
			})
			.catch((e) => console.log(e));
	}

	editApplicant(){
		this.props.onEdit(this.props.info.applicantId);
	}

	/*Lifting state up, with this function we can send chosen applicant id
	* from ApplicantInfo to ApplicantApp (from child class to parent class)*/
	handleClickOnApplicant(e){
		this.props.onMoreInfoChange(this.props.info.applicantId);
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
					<button className="deleteBtn infoBtnFont" onClick={this.deleteApplicant} ><MdDelete/> Delete</button>
					<button className="editBtn infoBtnFont" onClick={this.editApplicant}><FaUserEdit/> Edit</button>
				</div>
			</section>
		);
	}

} 

export default ApplicantInfo;

