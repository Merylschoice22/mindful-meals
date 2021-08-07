const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;
const Role = db.role;
const Post = db.post;

const Op = db.Sequelize.Op;

exports.postfood = (req, res) => {
  // Save Post to Database
  Post.create({
    date: req.body.date,
    title: req.body.title,
    loc_barrio: req.body.loc_barrio,
    loc_street: req.body.loc_street,
    phone: req.body.phone,
    description: req.body.description,
    status: req.body.status,
  })
    .then((post) => {
      res.send(post);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// app.post("/new-post", (req, res) => {
//   /* BODY */
//   // {
//   //     "title": "",
//   //     "loc_barrio": "",
//   //     "loc_street": "",
//   //     "phone": "",
//   //     "description": ""
//   // }
//   const now = new Date();
//   const post = req.body;
//   const postDate = now;
//   //Format date using relativeDate(now);

//   const query =
//     "INSERT INTO posts (post_date, title, loc_barrio, loc_street, phone, description, status) VALUES ($1, $2, $3, $4, $5, $6, default)";

//   pool
//     .query(query, [
//       postDate,
//       post.title,
//       post.loc_barrio,
//       post.loc_street,
//       post.phone,
//       post.description,
//     ])
//     .then((result) => res.json(result.rows[0]))
//     .catch((error) => console.error(error));
// });
