const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const seeder = require("./seeder");

//Conectando a base de datos
mongoose
  .connect(process.env.CONNECTION)
  .then((db) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

//Importo rutas
const tweets = require("./routes/tweets");
const users = require("./routes/users");

//Settings
app.set("port", process.env.PORT || 4500);
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

//Middlewares
app.use(morgan("dev")); // Estilo monitor
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // Para recibir Json.

//routes
//Ejemplo
app.use(users);
app.use(tweets);

//seeder(); // Llena de datos la base.

//Inicio Server
app.listen(app.get("port"), () => {
  console.log(`Server running in http://localhost:${app.get("port")}`);
});
