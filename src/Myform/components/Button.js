import React from 'react';


const Button = (props) => {
	//console.log(props.style);
	let disabled = false;
	if (props.disabled) {
		disabled = props.disabled
	}
		
	return(
	<button 
		style= {props.style} 
		className = {props.type==='primary'? 'btn btn-primary' : 'btn btn-secondary'}
		onClick= {props.action} 
		disabled={disabled}> 
		{props.title} 
	</button>)
}


export default Button;