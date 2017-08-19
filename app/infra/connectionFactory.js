var mysql = require('mysql');

function createDBConnection() {
	if(!process.env.NODE_ENV){
		return mysql.createConnection({
			host : 'localhost',
			user : 'Usuario',
			password : '123456',
			database : 'casadocodigo'
		});
	}
	if(process.env.NODE_ENV == 'test'){
		return mysql.createConnection({
			host : 'localhost',
			user : 'Usuario',
			password : '123456',
			database : 'casadocodigo_test'
		});
	}
}

module.exports = function(){
	return createDBConnection;
}