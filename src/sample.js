import React from 'react';
import ReactDOM from 'react-dom';

import MyButton from './Components/MyButton.js';

ReactDOM.render(
	<div>
		<MyButton
			value = {'SUBMIT'}
			onClick = {() => console.log('Submitted!')}
		/>
	</div>,
	document.querySelector('#main')
);