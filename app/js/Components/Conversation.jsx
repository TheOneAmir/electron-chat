import React from "react"

export default class Conversation extends React.Component {
	render(){
		return(
			<div className="pane padded-more l-chat">
				<ul className="list-group l-chat-conversation">
					<li className="list-group-item">
						<div className="media-body">
							<time className="media-body__time">12.12.2012</time>
							<strong>Name:</strong>
								<p>This is...</p>
						</div>
					</li>
				</ul>
				<form className="l-chat-form">
					<div className="form-group">
						<textarea required placeholder="Say sth..."
							className="form-control"></textarea>
					</div>
				</form>
			</div>
		);
	}
}