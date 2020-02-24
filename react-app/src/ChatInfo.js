import React from 'react';
import './ChatInfo.css';
import {IoMdRadioButtonOff} from "react-icons/io";



class ChatInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				messageArray: [
					{
						messageId: 1,
						sender: "admin",
						message: "Hi, I am admin",
						time: "Jan 26, 2020",
					},
					{
						messageId: 2,
						sender:"appl",
						message: "Hi admin",
						time: "Jan 26, 2020",
					},
					{
						messageId: 3,
						sender: "admin",
						message: "aaaaaaaaaa",
						time: "Jan 26, 2020",
					},
					{
						messageId: 4,
						sender:"appl",
						message: "bbbbbbbb",
						time: "Jan 26, 2020",
					},
					{
						messageId: 5,
						sender: "admin",
						message: "cccccccccc",
						time: "Jan 26, 2020",
					},
					{
						messageId: 6,
						sender:"appl",
						message: "dddddddd",
						time: "Jan 26, 2020",
					}
				],
		};
	}
	render(){
		return(
			<div className="chatDiv">
				
			    <div className="chatHeader" >
					<p className="textCss3">Chat</p>
					<p className="textCss1"><IoMdRadioButtonOff/> Active</p>
				</div>
				<div className="chatContainer">
					{this.state.messageArray.map(s => 
						<section key={s.messageId}>
						    <div >
						      <div className="divImg"> 
						      	<img className="senderImg" src="https://cdn1.iconfinder.com/data/icons/ui-colored-1/100/UI__26-512.png" alt="sender"></img>
						      </div>
						      <div className="divMsg">
						      	<p className="textCss3">{s.sender}</p>
						      	<p className="textCss1">{s.message}</p>
							  </div>
							</div>
							<div className="media media-meta-day">{s.time}</div>
						</section>
					)}
					
				</div>

            </div>
			);
	}
	
}

export default ChatInfo;