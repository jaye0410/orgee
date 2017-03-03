import express from 'express';

const URL_LIST = [
	'/hello',
	'/hello2',
	'/helloWithStyle',
	'/helloWithEvent',
	'/test',
	'/todo'
];

const app = express();
app.use(express.static('public'));

// Router
URL_LIST.forEach((url) => {
	app.get(url, (req, res) => {
		res.redirect(`.${url}.html`);
	});
});


app.listen(3000, () => {
	console.log('Server listening port 3000');
});