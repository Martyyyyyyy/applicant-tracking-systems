import React from 'react';
import './style/ApplicantInfo.css';
import {MdDelete} from 'react-icons/md';
import {FaUserEdit} from 'react-icons/fa';

/*This component shows personal data about applicant.
* It is possible to delete applicant and edit pressing buttons delete and edit.
* If you click on applicant from main view it will open new view with more data
* about selected applicant.*/

class ApplicantInfo extends React.Component {

	constructor(props){
		super(props);
		this.deleteApplicant = this.deleteApplicant.bind(this);
		this.editApplicant = this.editApplicant.bind(this);
		this.handleClickOnApplicant = this.handleClickOnApplicant.bind(this);
	}

	/*Delete selected applicant. Take applicantId from props (send by ApplicantApp component)
	* and send request to server to delete applicant with id sent in url. When server return response
	* call function handleDelete() from ApplicantApp component to refresh applicant state.*/
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

	/*On click on edit button call handleEdit() function from ApplicantApp component,
	* (sent by props to ApplicantInfo component) and send applicantId to that function.*/
	editApplicant(){
		this.props.onEdit(this.props.info.applicantId);
	}

	/*On Click on applicant call handleMoreInfo() from ApplicantApp component,
	* (sent by props to ApplicantInfo component) and send applicantId to that function.*/
	handleClickOnApplicant(){
		this.props.onMoreInfoChange(this.props.info.applicantId);
	}

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

/* => Go to ExpEduInfo.js */
/* => Go to ChatInfo.js */