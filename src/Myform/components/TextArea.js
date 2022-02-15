import React from 'react';

const TextArea = (props) => {  
  let formControl = "form-control";

  if (props.touched && !props.valid) {
      formControl = 'form-control control-error';
  }
  return (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className={formControl}
      name={props.name}
      rows={props.rows}
      cols = {props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} />
    {props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null}
  </div>
)
};

export default TextArea;