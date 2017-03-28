module.exports = function(app) {
	app.get('/produtos',function(req,res){
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'Usuario',
			password : '123456',
			database : 'casadocodigo'
		});
		
		connection.query('select * from produtos', function(err, results){
			res.render('produtos/lista',{lista:results});
		});

		connection.end();
	});
}