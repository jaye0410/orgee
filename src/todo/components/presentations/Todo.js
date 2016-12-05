import React from 'react';
import TodoPane from '../containers/TodoPane';
import TodoForm from '../containers/TodoForm';

export default class Todo extends React.Component {
	render() {
		return (
			<div>
				<TodoForm />
				<TodoPane />
			</div>
		);
	}
}