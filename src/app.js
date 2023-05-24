const express = require("express");
const path = require("path")
require("./database/conn")
const hbs = require("hbs")

const app = express();
const port = process.env.PORT || 7000;

// Setting Up Paths
const staticPath =path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"./templates/views")
const partialsPath = path.join(__dirname,"./templates/partials")

// Middleware
app.use("/bootstrap", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use("/bootJs", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.static(staticPath))
app.set("views",templatePath)
app.set("view engine","hbs")
hbs.registerPartials(partialsPath)

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Listen to the port
app.listen(port, () => {
  console.log(`Website is live on this ${port}.`);
});