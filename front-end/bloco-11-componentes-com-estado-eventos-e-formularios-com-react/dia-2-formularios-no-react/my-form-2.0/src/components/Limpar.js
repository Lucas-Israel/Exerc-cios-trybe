import React from "react";

class Limpar extends React.Component{
  render() {
    const { handler } = this.props
    return(
      <button
      onClick={handler}
      >
        Limpar
      </button>
    )
  }
}

export default Limpar;
