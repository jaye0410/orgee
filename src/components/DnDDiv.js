import React from 'react';
import DraggableDiv from './DraggableDiv';
import DroppableDiv from './DroppableDiv';

export default class DnDDiv extends React.Component {
	
	render() {
		return (
			<div className="drag_and_drop">
				<DraggableDiv />
				<DroppableDiv />
			</div>
		)
	}
}