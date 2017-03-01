import React from 'react';

export default class MyButton extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<button onClick = { this.props.onClick }>
					{ this.props.value }
				</button>
			</div>
		);
	}
	
}