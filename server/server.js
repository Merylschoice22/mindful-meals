const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Importing models
const db = require("./models");
// importando role para usar en la funcion.
const Role = db.role;

const app = express();

// method to generate database tables.
 db.sequelize.sync({ force: true }).then(() => {
 	console.log("Drop and re-sync db.");
	 initial();
   });

// function to create only 3 user_roles
function initial() {
	Role.create({
	  id: 1,
	  name: "admin"
	});
	
   
	Role.create({
	  id: 2,
	  name: "food giver"
	});
   
	Role.create({
	  id: 3,
	  name: "food getter"
	});
	Role.create({
		id: 4,
		name: "user"
	});
  }

var corsOptions = {
  origin: "http://localhost:8081"
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
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});