var models = require('../models/models.js');
// Autoload - factoriza el codigo se ruta incluye :quizId
exports.create = function(req, res) {
	var quiz = models.Quiz.build(req.body.quiz);
	quiz.validate().then(function(err) {
		if (err) {
			res.render('quizes/new', {
				quiz: quiz,
				errors: err.errors
			});
		} else {
			quiz.save({
				fields: ["pregunta", "respuesta"]
			}).then(function() {
				res.redirect('/quizes');
			})
		}
	});
}
exports.load = function(req, res, next, quizId) {
	models.Quiz.findById(quizId).then(
		function(quiz) {
			if (quiz) {
				req.quiz = quiz;
				next();
			}
		})
};
exports.new = function(req, res) {
	var quiz = models.Quiz.build({
		pregunta: "Pregunta",
		respuesta: "Respuesta"
	});
	res.render('quizes/new', {
		quiz: quiz,
		errors: []
	});
}
// GET /quizes/:quizId(\\d+)
exports.index = function(req, res) {
	models.Quiz.findAll().then(function(quizes) {
		res.render('quizes/index', {
			quizes: quizes,
			errors: []
		});
	})
};
// GET /quizes/:quizId(\\d+)
exports.show = function(req, res) {
	req.query.pista
	res.render('quizes/show', {
		quiz: req.quiz,
		errors: []
	});
};
// GET /quizes/:quizId(\\d+)/answer
exports.answer = function(req, res) {
	var resultado = 'Incorrecto';
	if (req.query.respuesta === req.quiz.respuesta) {
		resultado = 'Correcto';
	}
	if(resultado=='Incorrecto'){
		var c2;
		c2++;	
	}
	
	res.render('quizes/answer', {
		quiz: req.quiz,
		respuesta: resultado,
		errors: [],
		pista: c2 
	});
};
/*exports.edit = function(req, res) {
	var quiz =
}*/