import React from 'react';

export default class ConfirmButton extends React.Component {
	
	constructor(props) {
		super(props);
// 		this.handle = this.handle.bind(this);
	}
	
	handle(ans) {
		if (ans)
			console.log('Accepted!');
		else
			console.log('Rejected!');
	}
	
	render() {
		return(
			<button onClick={() => {
				let ans = confirm('Are you ok?');
				this.handle(ans);
			}}>CONFIRM</button>
		);
	}
	
}