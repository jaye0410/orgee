import React from 'react';
import { connect } from 'react-redux';

import { addTodoAction } from '../../actions';

let AddTodo = ({dispatch}) => {
	let input;
	
	return (
		<div>
			<input ref={(node) => {
				console.log(node);
				input = node;
			}}/>
			<button onClick={() => {
				dispatch(addTodoAction(input.value));
				input.value = '';
			}}>
			{'Add Todo'}
			</button> 
		</div>
	);
}

AddTodo = connect()(AddTodo);

export default AddTodo;
