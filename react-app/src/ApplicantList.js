import React from 'react';
import ReactDOM from 'react-dom';
import ApplicantInfo from './ApplicantInfo.js';
import ClientDemo from './ClientDemo';
import './ApplicantList.css';
import ExpEduInfo from './ExpEduInfo.js';
import ChatInfo from './ChatInfo.js';
import {MdDelete} from 'react-icons/md';


class ApplicantList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
				applicants: [],
				moreInfo: false,
				classStyle: "listDiv1",
		}; 
		this.showMoreInfo = this.showMoreInfo.bind(this);
		this.clientDemo = new ClientDemo();
		this.clientDemo.applicantList().then(l => this.setState({applicants: l}));
	}
	showMoreInfo(){
		this.setState({moreInfo: true ,classStyle: "listDiv2",});
	}

  render(){
	let expEduInfo = null;
	let chatInfo = null;
	if(this.state.moreInfo){ 
		expEduInfo = <ExpEduInfo />;
		chatInfo = <ChatInfo />;		
	}
    return(
    		<section className="sectionStyle">
    		<div className="sectionStyle2">
    			<div className= {this.state.classStyle}>
    				<p className="textCss"> Showing {this.state.applicants.length} results</p>
    			    {this.state.applicants.map(a => <ApplicantInfo info={a} triggerParentUpdate={this.showMoreInfo}/>)}   
    			</div>
    			{expEduInfo}
    			{chatInfo}
    	    </div>	
    		</section> 
    );
  }
}
  
export default ApplicantList;
  
 