const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Importing models
const db = require("./models");
// importando role para usar en la funcion.
const Role = db.role;
const Posts = db.post;

const app = express();

// function to create only 3 user_roles
const initial = () => {
  Role.create({
    id: 1,
    name: "food giver",
  });
  Role.create({
    id: 2,
    name: "food getter",
  });
  Role.create({
    id: 3,
    name: "user",
  });
};

const initialPostsTable = () => {
  Posts.create({
    title: "Pizza",
    loc_barrio: "Gracia",
    loc_street: "Carrer de Rabassa no, 67",
    phone: "623 479 840",
    description:
      "I have a leftover cheese pizza from a party. Enough for two people",
  });
  Posts.create({
    title: "Carrot Cake",
    loc_barrio: "Sant Andreu de Palomar",
    loc_street: "Carrer Malats, no 46",
    phone: "623 474 908",
    description:
      "I would like to give away a vegan carrot cake that I baked this morning. Enough for four people :)",
  });
  Posts.create({
    title: "Cupcakes",
    loc_barrio: "Carmel",
    loc_street: "Carrer de Ramon Rocafull, no 91",
    phone: "623 459 004",
    description:
      "I would like to give away some blueberry muffins. There are about 20 waiting to be shared",
  });
  Posts.create({
    title: "Chickpea Curry",
    loc_barrio: "Sant Marti",
    loc_street: "",
    phone: "637 908 625",
    description:
      "I would like to give away some blueberry muffins. There are about 20 waiting to be shared",
  });
  Posts.create({
    title: "Primavera Pasta Salad",
    loc_barrio: "L'Eixample",
    loc_street: "",
    phone: "637 759 903",
    description:
      "I would like to give away a freshly made salad. Enough for two servings",
  });
  Posts.create({
    title: "Leftover lasagna 3 pieces",
    loc_barrio: "Born, next to Arc de Triomf",
    loc_street: "",
    phone: "692 880 548",
    description:
      "I made lasagna and have 3 pieces leftover that I won't be able to finish. It is with meat, onions, and zucchini and bechamel cheese",
  });
  Posts.create({
    title: "AMAZING vegetable pasta",
    loc_barrio: "Eixample Dreta",
    loc_street: "Arago, con Bailen",
    phone: "655 734 400",
    description:
      "Pasta with mixed vegetables and herbs. Bring your own tupperware container to put it in please!",
  });
  Posts.create({
    title: "Grilled Salmon and mashed potatoes",
    loc_barrio: "Compte Urgell & Floridablanca",
    loc_street: "",
    phone: "663 121 2198",
    description:
      "I have half of a grilled salmon piece and some mashed potatoes if anyone wants it",
  });
  Posts.create({
    title: "Extra chips and some drinks",
    loc_barrio: "Barceloneta",
    loc_street: "",
    phone: "623 374 7444",
    description:
      "We had a party and there are leftover snacks. Everything has been opened except one bag of nuts. It's a few bags chips, some Coke, Coke Zero, and a Fanta Limon.",
  });
  Posts.create({
    title: "Vegetables",
    loc_barrio: "Eixample",
    loc_street: "Villaroel / Valencia",
    phone: "646 885 5215",
    description:
      "Extra vegetables from the fridge that I won't be able to finish before they expire. 2 tomatoes, 1 onion, 4 potatoes, and half a green pepper",
  });
};

// method to generate database tables.
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  initial();
  initialPostsTable();
});

//here must be placed the website url/frontend
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mindful-meals application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/post.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
