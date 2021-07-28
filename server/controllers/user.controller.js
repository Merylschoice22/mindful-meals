// There are 4 functions:
// – /api/test/all for public access
// – /api/test/user for loggedin users (role: user/food giver/admin/ food getter)
// – /api/test/mod for users having moderator role
// – /api/test/admin for users having admin role



exports.allAccess = (req, res) => {
	res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
	res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
	res.status(200).send("Admin Content.");
  };