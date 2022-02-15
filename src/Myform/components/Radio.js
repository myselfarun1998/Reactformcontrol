import React from 'react';
import { Form } from 'react-bootstrap';
const Radio = (props) => {
  /*
  let formControl = "form-control";

  if (props.touched && !props.valid) {
      formControl = 'form-control control-error';
  }
  */
	return( <div className="form-group">
    <label htmlFor={props.name} className="make_bold" >{props.title}</label>
    <div className="radio-block">
      {props.options.map((option,index) => {
        return (
          <Form.Label key={index} className="radio-inline">
             <Form.Check  className='find-me'
              id = {props.name}
              name={props.name}
              onChange={props.handleChange}
              value={option.value}
              checked={ props.value === option.value }
              type="radio" 
              //className={formControl}
              />  {option.displayValue} 
          </Form.Label>
        );
      })}
    </div>
    {props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null}
  </div>
);

}

export default Radio;