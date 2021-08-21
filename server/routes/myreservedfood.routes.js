const { authJwt } = require("../middleware"); //check

module.exports = (app, pool) => {
  app.get("/myreservedposts", authJwt.verifyToken, (req, res) => {
    const userId = req.userId;
    const query = `SELECT p.id, p.title, p.loc_barrio, p.loc_street, p.description, p.post_date, p.phone, p.status FROM posts p WHERE p.reserved_by_user_id=$1 order by p.post_date asc`;

    pool
      .query(query)
      .then((result) => {
        //Validate user is signed in

        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });

  //PATCH - Cancel a reservation - Update status from reserved to available
  app.patch("/status-available/:postId", authJwt.verifyToken, (req, res) => {
    const postId = req.params.postId; //Get postID from front
    console.log(postId);
    const queryUPDATE = "UPDATE posts SET status=$1 WHERE id=$2 and user_id=$3";
    pool
      .query(queryUPDATE, ["available", postId, req.userId])
      .then(() => {
        res.status(200).send("Food successfully unreserved!");
      })
      .catch((error) => console.error(error));
  });
};
