const User = require("../models/User");

module.exports = {
  showHome: async (req, res) => {
    // Conectar a la base de datos
    // encontrar mis tweets que quiero agregar a la home
    // Pasarselos a la home
    res.render("home");
  },
  showSignIn: (req, res) => {
    // muestro mi página de registro
    res.render("signIn");
  },
  validateSignIn: async (req, res) => {
    // muestro mi página de registro
    // validar datos de entrada
    // comparar con el backend
    // redirigir al home
    res.render("home");
  },
  showSignUp: (req, res) => {
    // muestro mi página de registro

    res.render("signUp");
  },
  validateSignUp: async (req, res) => {
    const bcrypt = require("bcrypt");
    var validator = require("email-validator");

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const email = req.body.email;
    let password = req.body.password;

    // Falta validar usuario no repetido

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
          console.log("Error de algo" + err);
        }
        if (
          validator.validate(email) &&
          firstName.length >= 4 &&
          lastName.length >= 4 &&
          password.length >= 4 &&
          userName.length >= 4
        ) {
          console.log(
            "Todo válido y validado------------------------------------------------"
          );

          let newUser = new User({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: hash,
          });

          newUser.save((error, savvedNewUser) => {
            if (error) return console.log(error);
            console.log("\n User salvado: \n" + savvedNewUser);
          });

          res.redirect("/");
        } else {
          console.log(
            "Hay algo que no es válido------------------------------------------------"
          );
        }
      });
    });
  },
};
