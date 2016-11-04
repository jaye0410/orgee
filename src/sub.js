import React from 'react';
import ReactDOM from 'react-dom';
import H1 from './components/HeadLine1';
import DnDDiv from './components/DnDDiv';

class Header extends React.Component {
	render() {
		return (
			<header>
				<H1 title='Hello' />
			</header>
		);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Header />, document.querySelector('#wrapper')
	);
	ReactDOM.render(
		<DnDDiv />, document.querySelector('#wrapper')
	);
	
	document.querySelector('.draggable').addEventListener('dragstart', (e) => {
  	e.dataTransfer.setData('text', e.target.getAttribute('class'));
	});
	
	document.querySelector('.droppable').addEventListener('dragover', (e) => {
		e.preventDefault();
		e.target.textContent = 'onDragover';
	});
	
	document.querySelector('.droppable').addEventListener('drop', (e) => {
		e.preventDefault();
		e.target.textContent = 'onDrop';
	});
});
