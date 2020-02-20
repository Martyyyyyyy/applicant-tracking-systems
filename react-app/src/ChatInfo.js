import React from 'react';
import './ChatInfo.css';
import {FaPaperPlane} from 'react-icons/fa';
import {IoMdRadioButtonOff} from "react-icons/io";



class ChatInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				messageArray: [
					{
						sender: "admin",
						message: "Hi, I am admin",
						time: "Jan 26, 2020",
					},
					{
						sender:"appl",
						message: "Hi admin",
						time: "Jan 26, 2020",
					},
					{
						sender: "admin",
						message: "aaaaaaaaaa",
						time: "Jan 26, 2020",
					},
					{
						sender:"appl",
						message: "bbbbbbbb",
						time: "Jan 26, 2020",
					},
					{
						sender: "admin",
						message: "cccccccccc",
						time: "Jan 26, 2020",
					},
					{
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
						<section>
						    <div >
						      <div className="divImg"> 
						      	<img className="senderImg" src="https://cdn1.iconfinder.com/data/icons/ui-colored-1/100/UI__26-512.png"></img>
						      </div>
						      <div className="divMsg">
						      	<p className="textCss3">{s.sender}</p>
						      	<p className="textCss1">{s.message}</p>
							  </div>
							</div>
							<div class="media media-meta-day">{s.time}</div>
						</section>
					)}
					
				</div>

            </div>
			);
	}
	
}

export default ChatInfo;