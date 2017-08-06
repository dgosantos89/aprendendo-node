module.exports = function(app) {

	var listaProdutos = function(req,res){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err, results){
			res.format({
				html: function(){
					res.render('produtos/lista',{lista:results});
				},
				json: function(){
					res.json(results);
				}
			});
		});
		connection.end();
	};

	app.get('/produtos',listaProdutos);

	app.get('/produtos/form',function(req,res){
		res.render('produtos/form')
	});

	app.post('/produtos',function(req,res){
		var produto = req.body;

		var validadorTitulo = req.assert('titulo','Titulo é obrigatório');
		validadorTitulo.notEmpty();

		var erros = req.validationErros();
		if(erros){
			res.render('produtos/form');
			return;
		}

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto,function(erros,resultados){
			res.redirect('/produtos');
		});
	});
}