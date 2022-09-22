const express = require ('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,'./app/public')));

//Abrir servidor en puerto 3030
app.listen(3030,()=>
    console.log("Servidor corriendo en el puerto 3030")
);
//Pagina principal
app.get('/', (req, res) => {
    res.send("Pagina principal")
});

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './app/views/home.html'))
});
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './app/views/carrito.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './app/views/login.html'))
});
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './app/views/registro.html'))
});
app.get('/producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './app/views/producto.html'))
});

//Pagina 404, envio pagina no encontrada
app.get('/404', (req, res) => {
    res.send("Error página no encontrada")
});