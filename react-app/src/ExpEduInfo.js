import React from 'react';
import './style/ExpEduInfo.css';
import eduPhoto from './png/education.png';

class ExpEduInfo extends React.Component{

	render(){
		return(			
				<div className="moreInfoDiv">
				   <p>Experience</p>
				   {this.props.experience.map(e =>
				    	 <section className="sectionCss" key={e.experienceId}>
				    	 <div className="imgDiv">
				    	 	<img  className="compImg" src={e.companyPhotoURL} alt="company"/>
				    	 </div>
				    	 <div className="eduInfoDiv">
				    	 	<p className="textCss2">{e.workingPosition}</p>
				    	 	<p className="textCss3">{e.companyName}</p>
				    	 	<p className="textCss1">{e.timeOfEmployment}</p>
				    	 	<p className="textCss1">{e.placeOfEmployment}</p>
				    	 </div>
				    	 </section>
				    )}
				    <div className="eduDivEl">
				    	<p>Education</p>
				    	{this.props.education.map(e =>
				    	 	<section className="sectionCss" key={e.educationId}>
				    	 	<div className="imgDiv">
				    	 		<img  className="compImg" src={eduPhoto} alt="Institution"/>
				    	 	</div>
				    	 	<div className="eduInfoDiv">
					    	 	<p className="textCss2">{e.institutionName}</p>
					    	 	<p className="textCss3">{e.diploma}</p>
					    	 	<p className="textCss1">{e.attendanceTime}</p>
					    	 	<p className="textCss3">{e.modul}</p>
					    	 </div>
				    	 	</section>
				    	)}
				    </div>
				</div>
				);
	}
	
}

export default ExpEduInfo;