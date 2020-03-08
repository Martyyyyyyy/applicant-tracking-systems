import React from 'react';
import './style/ChatInfo.css';
import {IoMdRadioButtonOff} from "react-icons/io";
import adminPhoto from './png/admin.png';

class ChatInfo extends React.Component{

	render(){
		return(
			<div className="chatDiv">
				<div className="chatHeader" >
					<p className="chatTextCss3">Chat</p>
					<p className="chatTextCss1"><IoMdRadioButtonOff/> Active</p>
				</div>
				<div className="chatContainer">
					{this.props.chat.map(s =>
						<section key={s.messageId}>
							<div>
								<div className="chatDivImg">
									{(s.sender === 'admin') ?
										(<img className="chatAdminImg" src={adminPhoto} alt="admin"/>) :
										(<img className="chatSenderImg" src={this.props.applPhoto} alt="applicant"/>)
									}
								</div>
								<div className="chatDivMsg">
									{(s.sender === 'admin') ?
										(<p className="chatTextCss3">Admin</p>) :
										(<p className="chatTextCss3">{this.props.applName}</p>)
									}
									<p className="chatTextCss1">{s.message}</p>
								</div>
							</div>
							<div className="media media-meta-day">{s.date}</div>
						</section>
					)}
				</div>
			</div>
		);
	}
}

export default ChatInfo;