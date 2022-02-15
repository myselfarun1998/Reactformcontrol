import React from 'react';
import { Form } from 'react-bootstrap';

const Select = (props) => {
    let formControl = "";

    if (props.touched && !props.valid) {
        formControl = 'control-error';
	}

	return(<div className="form-group" className="select-control">
			<label htmlFor={props.name} className="make_bold"> {props.title} </label>
		    <Form.Select 
		      id = {props.name}
			  name={props.name}
			  multiple={props.multiple}
		      value={props.value}
			  onChange={props.handleChange}
		      className={formControl}
			  >
		      <option value="" disabled>{props.placeholder}</option>
		      {props.options.map((option,index) => {
		        return (
		          <option
		            key={index}
					value={option.value}
		            label={option.displayValue}>{option.displayValue}</option>
		        );
		      })}
		    </Form.Select>
			{props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null}
		  </div>
		  )
	}	


export default Select;