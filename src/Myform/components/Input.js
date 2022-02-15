import React from 'react';
import './FormControl.css'

import { Form } from 'react-bootstrap';

const Input = (props) => {
  let formControl = "form-control";
  
  console.log(props.name)
  console.log(props.valid)
  console.log(props.touched)
  console.log(props.errorMsg)

  if (props.touched && !props.valid) {
      formControl = 'form-control control-error';
  }

	return (  
  <div className="form-group">

    <Form.Label htmlFor={props.name} className="make_bold">{props.title}</Form.Label>
    <Form.Control
      className={`${formControl} ${props.valid?'is-valid':''} `}
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
       
      />

<Form.Text id="passwordHelpBlock" muted>
{props.errorMsg  ?
          <div style={{color:"red", marginBottom: "15px", fontSize: "15px"}}>{props.errorMsg}</div> 
        : null
      }
  </Form.Text>
  
     
    
  </div>
)
}

export default Input;