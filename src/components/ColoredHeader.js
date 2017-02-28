import React from 'react';

export default class ColoredHeader extends React.Component {
	
	render() {
		return (
			<header
				style={{
					color: 'green',
					textDecoration: 'underline'
				}}>
				<h1>Hello World!!</h1>
			</header>
		);
	}
	
}