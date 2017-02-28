import express from 'express';

//import React from 'react';
//import ReactDOMServer from 'react-dom/server';

//import Counter from './components/Counter';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.redirect('./testindex.html');
});

app.get('/todo', (req, res) => {
	res.redirect('./todo.html');
});


app.listen(3000, () => {
	console.log('Server listening port 3000');
});