import React, { PropTypes } from 'react';

export default class TodoLi extends React.Component {
	render() {
		let completed = this.props.completed;
		return (
			<li
				onClick={this.props.onClick}
				style={{textDecoration: completed ? 'line-through' : 'none'}}>
				{this.props.text}
			</li>
		);
	}
}

TodoLi.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};