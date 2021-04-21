const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//Conectando a base de datos
mongoose
  .connect("mongodb+srv://root:root@cluster0.5r57u.mongodb.net/test")
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
app.use("/", users);

//Inicio Server
app.listen(app.get("port"), () => {
  console.log(`Server running in http://localhost:${app.get("port")}`);
});
