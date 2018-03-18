export default class Welcome extends React.COmponent {
	render() {
		return (
			<div className="pane padded-more">
				<form> 
					<div className="form-group">
						<label>Tell me my name</label>
						<input required className="form-control" placeHolder="Name"/>
					</div>
					<div className="form-actions">
						<button className="btn btn-form btn-primary">OK</button>
					</div>
				</form>
			</div>
		)
	}
}