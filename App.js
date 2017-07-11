var http = require('http');
var fs = require('fs');
var url = require('url');


//Na prática, esta função é responsável por levantarumservidor e o seu callback function(request, response)
var server = http.createServer(function(request, response) {

    // Obtendo o pathname digitado no browser
    var pathname = url.parse(request.url).pathname;
 console.log(' ffffffffff ++ddddddd+++++++++++++   ' + pathname);
    var pagina = roteador(pathname + ".html");
 console.log(' path ++ddddddd+++++++++++++   ' + pagina);
    fs.readFile(pagina, function(err, html) {

        response.writeHeader(200, { 'Content-Type': 'text/html' });

        response.write(html);

        response.end();
    });
});

var diretorio = function(arquivo) {
    // A constante __dirname retorna o diretório raiz da aplicação.
    return __dirname + "/" + arquivo;
}

var roteador = function(path) {

    console.log(' path +++++++++++++++   ' + path);

    if (path && path != "/") {
        var arquivo = diretorio(path);
        console.log(' arquivo +++++++++++++++   ' + arquivo);

        var existe = fs.existsSync(arquivo);
        console.log(' arquivo +++++++++++++++   ' + existe);

        if (existe) {
            return arquivo;
        }
        return diretorio("/app/404.html");

    };

    return diretorio("/app/index.html");
}


var servidorLigou = function() {
    console.log('Upholstary rodando !!!');
}

server.listen(3000, servidorLigou);
