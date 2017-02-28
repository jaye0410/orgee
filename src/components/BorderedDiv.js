import React from 'react';

export default class BorderedDiv extends React.Component {
	
	constructor() {
		super();
		this.style = {
			bordered: {
				border: '1px solid red',
				padding: '10px',
				margin: '20px'
			}
		};
	}
	
	render() {
		return (
			<div style={ this.style.bordered }>
				This is bordered div.
			</div>
		);
	};
	
}