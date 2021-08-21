const { authJwt } = require("../middleware");

module.exports = (app, pool) => {
  //GET my food posts that I have done based on my signed in ID
  //Validate user is signed in
  app.get("/mymealposts/", authJwt.verifyToken, (req, res) => {
    const userId = req.userId; //Get user ID
    const query = `SELECT p.id, p.title, p.loc_barrio, p.loc_street, p.description, p.post_date, p.phone, p.status FROM posts p WHERE p.user_id=${userId} order by p.post_date desc`;
    pool
      .query(query)
      .then((result) => {
        //Validate user is signed in
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });

  //PATCH - Mark collected - Update status from reserved to collected
  app.patch("/status-collected/:postId", authJwt.verifyToken, (req, res) => {
    const postId = req.params.postId;
    const query = "UPDATE posts SET status=$1 WHERE id=$2 and user_id=$3";
    pool
      .query(query, ["collected", postId, req.userId])
      .then(() => {
        res.status(200).send("Food successfully collected!");
      })
      .catch((error) => console.error(error));
  });

  //DELETE - Remove post of user by post ID
  //Won't work until we join the tables correctly
  //Click a button to delete my post
  //Validate that user is logged in to see their food posts
  //Get the post id of the post they want to delete
  //Add functionality to the front end when we are ready
  //   app.delete("/myfoodposts/:postId", (req, res) => {
  //     const postId = req.params.postId; //Get the post ID
  //     // const postTitle = post.title; //To mention the specific post deleted by title
  //     const check = `SELECT * FROM posts p INNER JOIN users u on p.user_id = u.id WHERE p.id=${postId}`; //later use to validate login
  //     const remove = `DELETE FROM posts where id=${postId}`;
  //     pool
  //       .query(check)
  //       .then((result) => {
  //         if (result.rows.length <= 0) {
  //           res.status(400).send("No post with that ID!");
  //           //Validate log in - Please log in first
  //         } else {
  //           pool
  //             .query(remove)
  //             .then(() => {
  //               res.send(`Post ${postId} successfully deleted!`);
  //             })
  //             .catch((error) => console.error(error));
  //         }
  //       })
  //       .catch((error) => console.error(error));
  //   });
};
