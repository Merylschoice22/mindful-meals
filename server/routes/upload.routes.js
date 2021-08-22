const uploadController = require("../controllers/upload.controller");
const upload = require("../middleware/uploadImages");

module.exports = function (app) {
  //dont think is necessary in this case
  /* app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });*/

  //The single() function with the parameter is the name of input tag (in html view: <input type="file" name="file">) will store the single file in req.file.
  app.post("/upload", upload.single("file"), uploadController.uploadFiles);
};
