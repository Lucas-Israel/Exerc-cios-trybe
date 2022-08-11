import React from "react";

class Checkbox extends React.Component{
	render() {
		const { input } = this.props;
		return(
			<fieldset>
				<label>Testando esse checkbox</label>
				<input type="checkbox" onChange={(event) => input('checkbox', event)} />
      </fieldset>
		)
	}
}

export default Checkbox;
