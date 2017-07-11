var http = require('http');
var url = require('url');

//Na prática, esta função é responsável por levantarumservidor e o seu callback function(request, response)

var server = http.createServer(function(request, response){

	response.writeHead(200, {"Content-Type": "text/html"});
	
	var result = url.parse(request.url);

	for(var key in result.query)
	{
		response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	}*/

	var fs = require('fs');

	// A constante __dirname retorna o diretório raiz da aplicação.
	fs.readFile(__dirname + '/app/index.html', function(err, html){
	

	//s.exists(html)


	response.writeHeader(200, {'Content-Type': 'text/html'});
	
	response.write(html);
	
	response.end();
	
	});

});

var servidorLigou = function() 
{
	console.log('Servidor Hello World rodando!');
}

server.listen(3000,servidorLigou);