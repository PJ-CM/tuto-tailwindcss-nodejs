"use strict";

const express = require("express");
const app = express();
const path = require("path");

const hostname = "localhost";
const port = 5005;

// Rutas disponibles ...

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("public/index.html"));
// });

////console.log("path:>", path.join(__dirname, "public"));
////console.log("path:>", path.join("public"));

////console.log("path:>", path.resolve("public"));

//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.resolve("public")));

// app.get("/", (req, res) => {
//     //Cualquiera de las 3 o, hasta, sin incluir nada, se accede al INDEX.html
//     ////res.sendFile("index.html");
//     //res.sendFile("index.html", { root: "./public" });
//     res.send("Accediendo al INDEX...");
// });
//incluso, así, se accede al INDEX
app.get("/");

//Aunque no se emplee el REQ, el no incluirlo produce errores
//app.get("/flexbox", (res) => {
app.get("/flexbox", (req, res) => {
    res.sendFile("flexbox.html", { root: "./public" });
});

app.listen(port, hostname, () => {
    // console.log("Servidor Express escuchando en modo %s", app.settings.env);
    console.log(`Servidor Express escuchando en modo "${app.settings.env}"`);
    console.log(`Servidor web arrancado en http://${hostname}:${port}/`);
});