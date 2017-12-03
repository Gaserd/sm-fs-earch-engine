const express 		= require('express');
const app 			= express();
const bodyParser 	= require('body-parser');

const search 		= require('./functions/search.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/search', function(req, res) {
	if (typeof req.query.text !== 'undefined') {
		search(req.query.text, function(data_items) {
			res.send({
				response : {
					items : data_items
				}
			})
		})
	} else {
		res.send({error : '[100] Not search params text in query.'})
	}
})

app.listen(port);
console.log(new Date() + ' => start server :' + port);
