var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Quiz-2016',
		errors: []
	});
});
//Autoload de comandos con :quizId
router.param('quizId', quizController.load);
//Definición de rutas de quizes
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/new', quizController.new);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.post('/quizes/create', quizController.create);
/*router.get('/quizes/:quizId(\\d+)/edit', quizController.edit);
router.put('/quizes/:quizId(\\d+)', quizController.update);
*/
module.exports = router;