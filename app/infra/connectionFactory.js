var mysql = require('mysql');

function createDBConnection() {
	return mysql.createConnection({
		host : 'localhost',
		user : 'Usuario',
		password : '123456',
		database : 'casadocodigo'
	});
}

module.exports = function(){
	return createDBConnection;
}