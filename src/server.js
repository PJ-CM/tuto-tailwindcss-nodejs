"use strict";

const express = require("express");
const app = express();
const path = require("path");

const hostname = "localhost";
const port = 7004;

// Acceso a archivos estáticos...

app.use(express.static(path.resolve("public")));

// Rutas disponibles ...

app.get("/");

app.get("/grid", (req, res) => {
  res.sendFile("02-grid.html", { root: "./public" });
});

app.get("/personalizado", (req, res) => {
  res.sendFile("03-personalizado.html", { root: "./public" });
});

app.get("/flexbox", (req, res) => {
  res.sendFile("04-flexbox.html", { root: "./public" });
});

app.get("/navbar", (req, res) => {
  res.sendFile("05-navbar.html", { root: "./public" });
});

app.get("/navbarjs", (req, res) => {
  res.sendFile("05-navbarjs.html", { root: "./public" });
});

app.get("/ejercicios/flexbox/galeria-ini", (req, res) => {
  res.sendFile("01-galeria-ini.html", { root: "./public/ejercicios/flexbox" });
});

app.get("/ejercicios/flexbox/galeria-solucion", (req, res) => {
  res.sendFile("01-galeria-solucion.html", {
    root: "./public/ejercicios/flexbox",
  });
});

app.get("/ejercicios/input-component", (req, res) => {
  res.sendFile("02-input-component.html", {
    root: "./public/ejercicios",
  });
});

app.get("/ejercicios/tarjeta-empleado", (req, res) => {
  res.sendFile("03-tarjeta-empleado.html", {
    root: "./public/ejercicios",
  });
});

app.get("/ejercicios/landing-page", (req, res) => {
  res.sendFile("04-landing-page.html", {
    root: "./public/ejercicios",
  });
});

app.listen(port, hostname, () => {
  // console.log("Servidor Express escuchando en modo %s", app.settings.env);
  console.log(`Servidor Express escuchando en modo "${app.settings.env}"`);
  console.log(`Servidor web arrancado en http://${hostname}:${port}/`);
});
