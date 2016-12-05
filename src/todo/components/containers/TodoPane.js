import { connect } from 'react-redux';
import TodoUl from '../presentations/TodoUl';
import { toggleTodoAction } from '../../actions';

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClickTodo: (id) => {
			dispatch(toggleTodoAction(id))
		}
	};
}

const TodoPane = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoUl);

export default TodoPane;