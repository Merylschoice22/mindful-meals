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
