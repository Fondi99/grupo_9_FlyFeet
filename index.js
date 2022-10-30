const express = require ('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

app.use(express.static(path.resolve(__dirname,'./app/public')));

//Configuración de EJS
app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRoutes);

//Abrir servidor en puerto 3030
app.listen(3030,()=>
    console.log("Servidor corriendo en el puerto 3030")
);

//Pagina 404, envio pagina no encontrada
app.get('/*', (req, res) => {
    res.send("404//Error página no encontrada")
});
