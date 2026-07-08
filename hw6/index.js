const http = require('http');


const server = http.createServer((req, res) => {    // 1. Kreirame server
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');

    if (url === '/home') {
        res.write('<h1>Welcome to the home page!</h1>');
    }

     else if (url === '/home/imePrezimePol') {              // 2. na ruta /home/imePrezimePol -> res.end(<imetoPrezimetoPolot), prvata bukva na sekoe da bide golema
        res.write('Ime: Daniel<br>');
        res.write('Prezime: Ognenoski<br>');
        res.write('Pol: Mashko');


    } else if (url === '/home/title') {              // 3. na ruta /home/title -> dodadete naslov na rutata
        res.write('<h1>Domashna rabota 6</h1>');


    } else if (url === "/home/header") {                // 4. na ruta /home/header -> dodadete vrednost "Ova e header!"
        res.setHeader("Header", "Ova e header!");
        res.write("Header e dodaden.");
    } else {

        res.statusCode = 404;
        res.write("Not Found");
    }

    return res.end();
});

server.listen(8000);
