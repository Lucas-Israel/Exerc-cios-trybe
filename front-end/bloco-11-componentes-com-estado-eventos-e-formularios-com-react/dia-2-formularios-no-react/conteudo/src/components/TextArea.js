import React from "react";

class TextArea extends React.Component{
  render() {
    const { value, input } = this.props;
    let error = undefined;
    if (value.length > 120) error = "texto muito grande"
    return(
      <fieldset>
        <label>
          Area do Texto
          <br></br>
          <textarea value={value} onChange={(event) => input('area', event)}></textarea>
        </label>
      <span>{ error ? error : ''}</span>
      </fieldset>
    )
  }
}

export default TextArea;