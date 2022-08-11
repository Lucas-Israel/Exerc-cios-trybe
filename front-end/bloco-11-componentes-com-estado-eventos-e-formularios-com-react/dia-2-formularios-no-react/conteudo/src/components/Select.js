import React from "react";

class Select extends React.Component {
	render () {
		const { value, input } = this.props;
		return (
			<fieldset>
				<label>
					Selecione
					<br></br>
					<select value={value} onChange={(event) => input('select', event)}>
						<option></option>
						<option>abc123</option>
						<option>def456</option>
						<option>ghi789</option>
					</select>
				</label>
			</fieldset>
		)
	}
}

export default Select; 