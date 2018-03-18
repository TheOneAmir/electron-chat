import React from "react";

export default class Participants extends React.Component {
	render() {
		return (
			<div className="pane pane-sm sidebar"> 
				<ul className="list=group">
					<li className="list-group-item">
						<div className="media-body">
							<strong><span className="icon icon-user"></span>
							<p>Joined a couple mins ago</p>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}