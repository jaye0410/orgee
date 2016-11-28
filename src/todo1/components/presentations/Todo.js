import React from 'react';
import TodoPane from '../containers/TodoPane';
import AddTodo from '../containers/AddTodo';

export default class Todo extends React.Component {
	render() {
		return (
			<div>
				<AddTodo />
				<TodoPane />
			</div>
		);
	}
}