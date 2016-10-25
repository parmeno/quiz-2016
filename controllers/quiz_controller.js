exports.question=function(req, res){
	res.render('quizes/question', {pregunta: 'Captial de Italia'});
};

exports.answer =function(req, res) {
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answer.ejs', {respuesta: 'Correcto'});
	}else {
		res.render('quizes/answer.ejs', {respuesta: 'Incorrecto'});
	}
};