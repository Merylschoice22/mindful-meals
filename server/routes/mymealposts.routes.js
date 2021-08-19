module.exports = (app, pool) => {
  //GET my food posts that I have done based on my signed in ID
  //Validate user is signed in
  app.get("/mymealposts/:userId", (req, res) => {
    const userId = 3; //Get user ID
    const query = `SELECT p.title, p.loc_barrio, p.loc_street, p.description, p.post_date, p.phone, p.status FROM posts p WHERE p.user_id=${userId} order by p.post_date desc`;
    pool
      .query(query)
      .then((result) => {
        //Validate user is signed in
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });

  //PATCH - Mark collected - Update status from reserved to collected
  app.patch("/status-collected/:postId", (req, res) => {
    const postId = req.params.postId;
    const query = "UPDATE posts SET status=$1 WHERE id=$2";
    pool
      .query(query, ["collected", postId])
      .then(() => {
        res.status(200).send("Food successfully collected!");
      })
      .catch((error) => console.error(error));
  });
};
