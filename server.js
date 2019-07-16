const colors = require("colors");
const express = require('express');
const app = express();
const exphbs = require("express-handlebars");

let PORT = process.env.PORT || 9000;

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars");


app.listen(PORT, function() {
    console.log(colors.rainbow("Server listening on: http://localhost:" + PORT));
  });