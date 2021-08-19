module.exports = (app, pool) => {
  //GET
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
};
