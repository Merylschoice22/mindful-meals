const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Importing models
const db = require("./models");
// importando role para usar en la funcion.
const Role = db.role;
const Posts = db.post;
const Users = db.user;

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
  Users.create({
    username: "cmonlg",
    email: "cmonlg@gmail.com",
    password: "coffee123",
  });
  Users.create({
    username: "moonia",
    email: "enya.munteanu@gmail.com",
    password: "frida123",
  });
  Users.create({
    username: "merylschoice22",
    email: "kekrieg.digital@gmail.com",
    password: "sigamiga",
  });
};

const initialPostsTable = () => {
  Posts.create({
    user_id: 1,
    title: "Pizza",
    loc_barrio: "Gracia",
    loc_street: "Carrer de Rabassa",
    phone: "623 479 840",
    description:
      "I have a leftover cheese pizza from a party. Enough for two people",
    status: "available",
  });
  Posts.create({
    user_id: 2,

    title: "Carrot Cake",
    loc_barrio: "Sant Andreu de Palomar",
    loc_street: "Carrer Malats",
    phone: "623 474 908",
    description:
      "I would like to give away a vegan carrot cake that I baked this morning. Enough for four people :)",
    status: "available",
  });
  Posts.create({
    user_id: 3,

    title: "Cupcakes",
    loc_barrio: "Carmel",
    loc_street: "Carrer de Ramon Rocafull",
    phone: "623 459 004",
    description:
      "I would like to give away some blueberry muffins. There are about 20 waiting to be shared",
    status: "available",
  });
  Posts.create({
    user_id: 1,

    title: "Chickpea Curry",
    loc_barrio: "Sant Marti",
    loc_street: "Carrer de Sant Marti",
    phone: "637 908 625",
    description:
      "I would like to give away some blueberry muffins. There are about 20 waiting to be shared",
    status: "reserved",
  });
  Posts.create({
    user_id: 2,

    title: "Primavera Pasta Salad",
    loc_barrio: "Eixample",
    loc_street: "Arago con Girona",
    phone: "637 759 903",
    description:
      "I would like to give away a freshly made salad. Enough for two servings",
    status: "reserved",
  });
  Posts.create({
    user_id: 3,

    title: "Leftover lasagna 3 pieces",
    loc_barrio: "Born",
    loc_street: "Next to Arc de Triomf",
    phone: "692 880 548",
    description:
      "I made lasagna and have 3 pieces leftover that I won't be able to finish. It is with meat, onions, and zucchini and bechamel cheese",
    status: "reserved",
  });
  Posts.create({
    user_id: 1,

    title: "AMAZING vegetable pasta",
    loc_barrio: "Eixample Dreta",
    loc_street: "Arago, con Bailen",
    phone: "655 734 400",
    description:
      "Pasta with mixed vegetables and herbs. Bring your own tupperware container to put it in please!",
    status: "collected",
  });
  Posts.create({
    user_id: 2,

    title: "Grilled Salmon and mashed potatoes",
    loc_barrio: "Sant Antoni",
    loc_street: "Compte Urgell & Floridablanca",
    phone: "663 121 2198",
    description:
      "I have half of a grilled salmon piece and some mashed potatoes if anyone wants it",
    status: "collected",
  });
  Posts.create({
    user_id: 3,

    title: "Extra chips and some drinks",
    loc_barrio: "Barceloneta",
    loc_street: "Next to Salamanca",
    phone: "623 374 7444",
    description:
      "We had a party and there are leftover snacks. Everything has been opened except one bag of nuts. It's a few bags chips, some Coke, Coke Zero, and a Fanta Limon.",
    status: "collected",
  });
  Posts.create({
    user_id: 1,

    title: "Vegetables",
    loc_barrio: "Eixample",
    loc_street: "Villaroel / Valencia",
    phone: "646 885 5215",
    description:
      "Extra vegetables from the fridge that I won't be able to finish before they expire. 2 tomatoes, 1 onion, 4 potatoes, and half a green pepper",
    status: "collected",
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

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to mindful-meals application." });
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;

// routes
// var foo = require("./routes/auth.routes");
// foo(app);
const dbConfig = require("./config/db.config");
const { Pool } = require("pg");
const { user } = require("./models");
const userRoutes = require("./routes/user.routes");
const pool = new Pool({
  user: dbConfig.USER,
  host: dbConfig.HOST,
  database: dbConfig.DB,
  password: dbConfig.PASSWORD,
  port: dbConfig.PORT,
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/post.routes")(app);
require("./routes/foodfeed.routes")(app, pool);
require("./routes/mymealposts.routes")(app, pool);
require("./routes/myreservedfood.routes")(app, pool);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
