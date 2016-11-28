import { connect } from 'react-redux';
import TodoUl from '../presentations/TodoUl';

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

const TodoPane = connect(
	mapStateToProps
)(TodoUl);

export default TodoPane;
