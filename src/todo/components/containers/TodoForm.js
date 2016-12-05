import React from 'react';
import { connect } from 'react-redux';

import { addTodoAction } from '../../actions';

let TodoForm = ({dispatch}) => {
	let input;
	return (
		<div>
			<input ref={(node) => input = node} />
			<button onClick={() => {
				dispatch(addTodoAction(input.value));
				input.value = '';
			}}>
			{'Add Todo'}
			</button>
		</div>
	);
}

TodoForm = connect()(TodoForm);

export default TodoForm;