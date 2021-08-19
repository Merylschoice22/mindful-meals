module.exports = (app, pool) => {
  //GET all food posts that I have reserved
  //By my user ID
  //Validate user is signed in
  app.get("/myreservedposts/:userId", (req, res) => {
    const userId = 3; //Get user ID currently logged in
    const query = `SELECT p.title, p.loc_barrio, p.loc_street, p.description, p.post_date, p.phone, p.status FROM posts p WHERE p.user_id=${userId} and status='reserved' order by p.post_date asc`;

    pool
      .query(query)
      .then((result) => {
        //Validate user is signed in
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });

  //GET History
  //Previous food that I have collected
  //By my user ID
  //Validate user is signed in
  app.get("/mycollectedposts/:userId", (req, res) => {
    const userId = 3; //Get user ID
    const query = `SELECT p.title, p.loc_barrio, p.loc_street, p.description, p.post_date, p.phone, p.status FROM posts p WHERE p.user_id=${userId} and status='collected' order by p.post_date asc`;

    pool
      .query(query)
      .then((result) => {
        //Validate user is signed in
        res.json(result.rows);
      })
      .catch((error) => console.error(error));
  });
};
