const { json } = require("express");
const express = require("express");
const app = express();

//definimos nuestro motor de plantillas
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));

//invocamos los metodos de express

app.listen(5000, () => {
  console.log("Server corriendo");
});

//colocamos nodemon app para cuando grabemos los cambios el server corra autmaticamente
