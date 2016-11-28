import React, { PropTypes } from 'react';
import TodoLi from './TodoLi';

export default class TodoUl extends React.Component {
	render() {
		let todos = this.props.todos;
		return (
			<ul>
				{ todos.map((todo) => <TodoLi key={todo.id} {...todo} />) }
			</ul>
		);
	}
}

TodoUl.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired
};
