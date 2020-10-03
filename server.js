const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');
//helpers
// hbs.registerHelper('getanio', () => {
//     return new Date().getFullYear();
// })
// hbs.registerHelper('capitalizar', (texto) => {
//     let palabras = texto.split(' ');
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
//     });

//     return palabras.join(' ');
// })

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'gabriel',
    });
});

app.get('/about', (req, res) => {

    res.render('about', {});
});
// app.get('/', (req, res) => {
//     //res.send('Hola Mundo');
//     let salida = {
//         nombre: 'Gabriel',
//         eada: 20,
//         url: req.url
//     }
//     res.send(salida);
// });
// app.get('/data', (req, res) => {
//     res.send('Hola Data');

// });

app.listen(port, () => {
    console.log('escuchando peticion en el puerto ' + port)
});