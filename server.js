const path = require("path");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
// const seeder = require("./seeder");
// seeder();

//Conectando a base de datos
mongoose
  .connect(process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Conectados a la base de datos"))
  .catch((err) => console.log(err));

//Importo rutas
const tweets = require("./routes/tweets");
const users = require("./routes/users");

//Settings
app.set("port", process.env.PORT || 4500);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middlewares
app.use(express.static(__dirname + "public"));
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Para recibir Json.

// passport.js
const passport = require("./middlewares/passport");
passport(app);

//routes
//Ejemplo
app.use(users);
app.use(tweets);

//Inicio Server
app.listen(app.get("port"), () => {
  console.log(`Server running in http://localhost:${app.get("port")}`);
});
