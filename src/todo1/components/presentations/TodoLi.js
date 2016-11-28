import React, { PropTypes } from 'react';

export default class TodoLi extends React.Component {
	render() {
		return (
			<li>
				{this.props.text}
			</li>
		);
	}
}

TodoLi.propTypes = {
	text: PropTypes.string.isRequired
};