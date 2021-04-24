const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const seeder = require("./seeder");
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
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // Para recibir Json.

// passport.js

const bcrypt = require("bcrypt");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");

app.use(
  session({
    secret: "AlgúnTextoSuperSecreto",
    resave: false,
    // Docs: "The default value is true, but using the default has been deprecated ".
    saveUninitialized: false,
    // Docs: "The default value is true, but using the default has been deprecated ".
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
      session: false,
    },
    async function (req, username, password, done) {
      try {
        console.log("Datos ingresados: " + username + " " + password);
        const user = await User.findOne({ email: username });
        if (!user) {
          console.log("Usuario incorrecto");
          return done(null, false, {
            message: "Usuario incorrecto",
          });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          console.log("Contraseña incorrecta");
          return done(null, false, {
            message: "Usuario y/o contraseña incorrectos",
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      done(error, user);
    });
});

//routes
//Ejemplo
app.use(users);
app.use(tweets);

//Inicio Server
app.listen(app.get("port"), () => {
  console.log(`Server running in http://localhost:${app.get("port")}`);
});
