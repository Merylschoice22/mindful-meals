// const { authJwt } = require("../middleware");

const { authJwt } = require("../middleware");

module.exports = function (app, pool) {
  //GET all posts
  app.get("/", authJwt.verifyToken, (req, res) => {
    const query =
      //This will be the real route
      "SELECT u.username, p.id, p.title, p.loc_barrio, p.description, p.post_date, p.loc_street, p.phone FROM posts p INNER JOIN users u ON p.user_id = u.id WHERE p.status='available' order by p.created_at desc";
    // //This is to test out for now so we can see something until we link with users
    // "SELECT * FROM posts where status='available' order by created_at desc";
    pool
      .query(query)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });

  //PATCH - Update status available to reserved
  app.patch("/status-reserved/:postId", authJwt.verifyToken, (req, res) => {
    const userId = req.userId;
    const postId = req.params.postId;
    const queryUPDATE =
      "UPDATE posts SET status=$1, reserved_by_user_id=$2 WHERE id=$3";

    pool
      .query(queryUPDATE, ["reserved", userId, postId])
      .then(() => {
        res.status(200).send("Food successfully reserved!");
      })
      .catch((error) => console.error(error));
  });

  // //GET all
  // app.get("/all", (req, res) => {
  //   const query = "SELECT * from posts";
  //   pool
  //     .query(query)
  //     .then((result) => {
  //       res.json(result.rows);
  //     })
  //     .catch((error) => console.error(error));
  // });
};
