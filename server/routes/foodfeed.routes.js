module.exports = function (app, pool) {
  app.get("/all", (req, res) => {
    const query = "SELECT * from posts";
    pool
      .query(query)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });

  //FoodFeed - GET
  //See all food posts - username, title, barrio, description
  //In order of creation
  //Where status is available
  app.get("/", (req, res) => {
    const query =
      //This will be the real route
      "SELECT u.username, p.title, p.loc_barrio, p.description, p.post_date, p.loc_street, p.phone FROM posts p INNER JOIN users u ON p.user_id = u.id WHERE p.status='available' order by p.post_date asc limit 5";
    // //This is to test out for now so we can see something until we link with users
    // "SELECT * FROM posts order by created_at desc";
    pool
      .query(query)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });
};
