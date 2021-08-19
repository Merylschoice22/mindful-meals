module.exports = function (app, pool) {
  //GET all posts
  app.get("/", (req, res) => {
    const query =
      //This will be the real route
      // "SELECT u.username, p.title, p.loc_barrio, p.description, p.post_date, p.loc_street, p.phone FROM posts p INNER JOIN users u ON p.user_id = u.id WHERE p.status='available' order by p.post_date asc limit 5";
      // //This is to test out for now so we can see something until we link with users
      "SELECT * FROM posts where status='available' order by created_at desc";
    pool
      .query(query)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });

  //PATCH - Update status available to reserved
  app.patch("/status-reserved/:postId", (req, res) => {
    const postId = req.params.postId;
    const queryUPDATE = "UPDATE posts SET status=$1 WHERE id=$2";

    pool
      .query(queryUPDATE, ["reserved", postId])
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
