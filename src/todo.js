import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './todo/reducers';
import Todo from './todo/components/presentations/Todo';

import { addTodoAction, toggleTodoAction } from './todo/actions';

let store = createStore(reducer);
store.dispatch(addTodoAction('Hello Redux!'));
store.dispatch(toggleTodoAction(0));

render(
	<Provider store={store}>
		<Todo />
	</Provider>,
	document.querySelector('#root')
);
