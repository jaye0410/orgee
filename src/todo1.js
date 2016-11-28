import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './todo1/reducers';
import { addTodoAction } from './todo1/actions';
import Todo from './todo1/components/presentations/Todo';

// この処理により、storeにreducerが登録される
let store = createStore(reducer);

// Test ->
/*
store.dispatch(addTodoAction('Hello World'));
store.dispatch(addTodoAction('Hello React!'));
store.dispatch(addTodoAction('Hello Redux!'));
console.log(store.getState());
*/
// <- Test

render(
	<Provider store={store}>
		<Todo />
	</Provider>,
	document.querySelector('#root')
);
