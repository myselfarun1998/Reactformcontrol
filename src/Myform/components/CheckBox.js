import React from 'react';
import { Form } from 'react-bootstrap';
const CheckBox = (props) => {
  
  let formControl = "checkbox-inline";

  if (props.touched && !props.valid) {
             formControl = 'checkbox-inline control-error';
  }
  
	return( <div className="form-group">
  <Form.Check htmlFor={props.name} className="make_bold" className="form-label">{props.title}</Form.Check>
    <div className={formControl}>
      {props.options.map((option,index) => {
        return (
          <Form.Check key={index} className="checkbox-inline" >
            <input
              id = {props.name}
              name={props.name}
              onChange={props.handleChange}
              value={option.value}
              checked={ props.value.indexOf(option.value) > -1 }
              type="checkbox" 
              /> {option.displayValue}
     </Form.Check>
        );
      })}


    </div>
    {props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null}
  </div>
);

}

export default CheckBox;