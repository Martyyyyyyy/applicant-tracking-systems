import React from 'react';
import ApplicantInfo from './ApplicantInfo.js';
import ClientDemo from './ClientDemo.js';
import ExpEduInfo from './ExpEduInfo.js';
import ChatInfo from './ChatInfo.js';
import './ApplicantList.css';
import EditForm from "./EditForm";


class ApplicantList extends React.Component {

	/*For now load Applicants from ClientDemo,
	* later fetch from server.*/
	constructor(props){
		super(props);
		this.state = {
			applicants: [],
			moreInfo: false,
			classStyle: "firstDivStyle",
			showEditForm: false,
		}; 
		this.showMoreInfo = this.showMoreInfo.bind(this);
		this.closeForm = this.closeForm.bind(this);
		this.editApplicant = this.editApplicant.bind(this);
		this.clientDemo = new ClientDemo();
		this.clientDemo.getAllApplicants().then(a => this.setState({applicants: a}));
	}

	/*Send this function as props to ApplicantInfo.
	* In ApplicantInfo onClick on Applicant open new information
	* about that Applicant (Experience, Education, Chat).
	* Change style of Div element */
	showMoreInfo(){
		this.setState({moreInfo: true, classStyle: "secondDivStyle",});
	}

	/*Send as props to EditForm, on button click Close,
	* from EditForm close edit form */
	closeForm(){
		this.setState({showEditForm: false});
	}

	/*Send as props to ApplicantInfo, on button click Edit,
	* from ApplicantInfo open edit pop-up.*/
	editApplicant(){
		this.setState({showEditForm: true});
	}

	/*If moreInfo have true value create and show more elements (ExpEduInfo, chatInfo).
	* Map thru array of Applicants (applicants) and for each applicant show
	* ApplicantInfo (Name, Photo, Place of Employment, Address).
	* If showEditForm have true value open edit pop-up and edit applicant info.*/
	render(){
		let expEduInfo = null;
		let chatInfo = null;
		if(this.state.moreInfo){
			expEduInfo = <ExpEduInfo />;
			chatInfo = <ChatInfo />;
		}
		let editForm = null;
		if(this.state.showEditForm){
			editForm = <EditForm triggerCloseForm={this.closeForm}/>;
		}
		return(
    		<section className="sectionStyle">
				{editForm}
				<div className="sectionStyle2">
					<div className={this.state.classStyle}>
						<p className="textCss">
							Showing {this.state.applicants.length} results
						</p>
						{this.state.applicants.map(a =>
							<ApplicantInfo key={a.applicantId} info={a} triggerParentUpdate={this.showMoreInfo}
										   triggerEditForm={this.editApplicant}/>
										   )}
					</div>
					{expEduInfo}
					{chatInfo}
				</div>
    		</section>
		);
	}

}
  
export default ApplicantList;
  
 