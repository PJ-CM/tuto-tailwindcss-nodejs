"use strict";

// const express = require("express");
// const app = express();
// const port = 4004;

// app.use("/public", (req, res) => {
//     res.status(200).send("Todo OK");
// });

// app.listen(port);

// -----------------------------------------------------------------

// const express = require("express");
// const app = express();
// const port = 4004;

// app.get("/", (req, res) => {
//     res.send("Hello Aloha!!");
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

// -----------------------------------------------------------------

// importar
const express = require("express");
const path = require("path");

// instanciar
const app = express();
const hostname = "localhost";
const port = 4004;

// ruteo
app.get("/", function(req, res) {
    //res.sendFile(__dirname + "/public/index.html");
    //res.sendFile("/public/index.html");
    //console.log("__dirname:", "../" + __dirname);
    // ----------------------------------------------------------
    //SI
    res.sendFile(path.resolve("public/index.html"));
    //NO
    // res.sendFile("public/index.html");
});
// app.get('/about', function(req, res){
//     res.sendFile(__dirname + '/public/about.html');
// });

// escuchar
app.listen(port);

// console.log("Servidor Express escuchando en modo %s", app.settings.env);
app.listen(port, hostname, () => {
    console.log(`Servidor web arrancado en http://${hostname}:${port}/`);
});

// -----------------------------------------------------------------

// const http = require("http");
// // import { createServer } from "http";

// const hostname = "localhost";
// const port = 4004;

// const server = http.createServer((req, res) => {
//     // const server = createServer((req, res) => {
//     res.statusCode = 200;
//     //res.setHeader("Content-Type", "text/plain");
//     //res.end("Aloha!!\n");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// -----------------------------------------------------------------

// const express = require("express");
// const app = express();

// // const hostname = "localhost";
// const hostname = "127.0.0.1";
// const port = 4004;

// app.use(express.static(__dirname + "/public/"));

// app.listen(port, function() {
//     //console.log("Servidor web escuchando en el puerto 3000");
//     console.log(`Servidor web arrancado en http://${hostname}:${port}/`);
// });