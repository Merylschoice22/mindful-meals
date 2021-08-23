const { authJwt } = require("../middleware"); //check

module.exports = (app, pool) => {
  app.get("/myreservedposts", authJwt.verifyToken, (req, res) => {
    const userId = req.userId;
    const query = `SELECT u.username, p.id, p.title, p.loc_barrio, p.loc_street, p.description, p.post_date, p.phone, p.status FROM posts p INNER JOIN users u ON p.user_id = u.id WHERE p.reserved_by_user_id=$1 order by p.created_at desc`;

    pool
      .query(query, [userId])
      .then((result) => {
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });

  //PATCH - Cancel a reservation - Update status from reserved to available
  app.patch("/status-cancel-res/:postId", authJwt.verifyToken, (req, res) => {
    const userId = req.userId;
    const postId = req.params.postId;
    const queryUPDATE =
      "UPDATE posts SET status=$1 WHERE id=$2 and reserved_by_user_id=$3";
    pool
      .query(queryUPDATE, ["available", postId, userId])
      .then(() => {
        res.status(200).send("Food successfully unreserved!");
      })
      .catch((error) => console.error(error));
  });
};
