import React from 'react';
import ReactDOM from 'react-dom';

import ColoredHeader from './Components/ColoredHeader.js';
import BorderedDiv from './Components/BorderedDiv.js';

ReactDOM.render(
	<div>
		<ColoredHeader />
		<BorderedDiv />
	</div>,
	document.querySelector('#main')
);

