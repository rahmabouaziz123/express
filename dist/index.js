const express = require("express");
const app = express();
const path = require("path");
// const users=require("./api/list")
const produits = require("././public/api/list");

// app.get("/",(req,res)=>res.send("<h1> hello every body</h1>"))
// app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")))

app.use(date = (req, res, next) => {
  var objDate = new Date();
  var hours = objDate.getHours();
  var day = objDate.getDay();
  if (hours >= 9 && hours <= 17 && (day != 0 || day != 6)) {
    next();
  } else {
    res.send('We Are Closed');
  }
});
app.use(express.static(path.join(__dirname, "public")));
app.get("/produit/:id", (req, res) => res.json(produits.find(el => el.id == req.params.id)));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "home.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "public", "contact.html")));
app.get("/service", (req, res) => res.sendFile(path.join(__dirname, "public", "Our Services.html")));

// app.get('/now', function(req, res, next){
//     req.time = new Date().toString();
//     next();
//   },
//     function(req, res) {
//       res.send({"time": req.time});

//     }  

//       );

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => err ? console.log(err) : console.log(`server is run sucessfuly rahma on port ${PORT}`));