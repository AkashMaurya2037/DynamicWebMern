const express = require("express");
const path = require("path")
require("./database/conn")
const hbs = require("hbs")
const User = require("./models/usermessage")

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

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))
app.set("views",templatePath)
app.set("view engine","hbs")
hbs.registerPartials(partialsPath)

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/contact", (req, res) => {
//   res.render("contact");
// });

app.post("/contact", async(req, res) => {
  try {
    const userData = new User(req.body)
    await userData.save()
    res.status(201).render("index")
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
});

// Listen to the port
app.listen(port, () => {
  console.log(`Website is live on this ${port}.`);
});