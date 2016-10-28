//cargas el modelo orm(el que relacciona el modelo con el gestor de bddatos
var Sequelize = require('sequelize');
var path = require('path');
//aqui le dices el getor y toda la pesca para que traduzca to bien
var sequelize = new Sequelize(null, null, null, /*esto son usuarios y contraseñas para otros gestores pero pa este no*/ {
	dialect: "sqlite",
	storage: "quiz.sqlite"
});
//esto es pa que se relaccione con el quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));
exports.Quiz = Quiz;
//y aqui esto se traduce en lineas de sql royo si no hay crea una y cosas asi que es el objetivo del fichero models
sequelize.sync().then(function() {
	Quiz.count().then(function(count) {
		if (count === 0) {
			Quiz.create({
				pregunta: 'Captial de Italia',
				repuesta: 'Roma'
			}).then(function() {
				console.log('Base de datos inicializada')
			});
		};
	});
});