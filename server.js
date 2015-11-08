var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');

var app = express();

var PORT = process.env.PORT || 3000;

var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('Todo API Root');
});

// GET /todos or /todos?completed=true&q=house
app.get('/todos', function(req, res) {
	var query = req.query;
	var where = {};

	if (query.hasOwnProperty('completed') 
		&& query.completed === 'true') {
		where.completed = true;
	} else if (query.hasOwnProperty('completed') 
		&& query.completed === 'false') {
		where.completed = false;
	}

	if (query.hasOwnProperty('q') && query.q.length > 0) {
		where.description = {
			$like:  '%' + query.q + '%'
		}
	}

	db.todo.findAll({
		where: where
	}).then(function(todos){
		res.json(todos);
	}, function(e){
		res.status(500).send(e);
	});

});

// GET /todos/:id
app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);

	db.todo.findById(todoId).then(function(todo){
		if (!!todo){
			res.json(todo);
		} else {
			res.status(404).send('Todo with id requested not found.');
		}
	}, function(e){
		res.status(404).send(e);
	})

});

// POST /todos
app.post('/todos', function(req, res) {
	var body = _.pick(req.body, 'description', 'completed');

	db.todo.create(body).then(function(todo){
		res.json(todo.toJSON());
	}, function(e){
		res.status(400).json(e);
	})
});

// DELETE /todos/:id
app.delete('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var where = {};

	db.todo.destroy({
		where: {
			id: todoId
		}
	}).then(function(rowsDeleted){
		if (rowsDeleted === 0) {  
			res.status(404).json({
				"error": "No todo found with that id."
			});
		} else {
			res.status(204).send();
		}
	}, function(e){
		res.status(500).send();
	})
});

// PUT /todos/:id
app.put('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var body = _.pick(req.body, 'description', 'completed');
	var attributes = {};

	// Validate Completed
	if (body.hasOwnProperty('completed')) {
		attributes.completed = body.completed;
	} 

	// Validate Description
	if (body.hasOwnProperty('description')) {
		attributes.description = body.description
	} 

	db.todo.findById(todoId).then(function(todo){
 		if (todo){
 			todo.update(attributes).then(function(todo){
				res.json(todo.toJSON());
			}, function(e){
				res.status(400).send(e);
			});
 		} else {
			return res.status(404).send();
 		}
	}, function(e){
		res.status(500).send(e);
	})
});

app.post('/users', function(req, res){
	var body = _.pick(req.body, 'email', 'password');

	db.user.create(body).then(function(user){
		res.json(user.toJSON());
	}, function(e){
		res.status(400).json(e);
	})
});

db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '!');
	});
});

