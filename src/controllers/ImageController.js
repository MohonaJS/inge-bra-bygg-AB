const fs = require("fs");
const path = require("path");

module.exports = {
  get_image: (req, res) => {
    const images = fs.readdirSync(path.join("public", "images"));
    res.json({ images });
  },

  upload_image: (req, res) => {
    if (!req.files.image.mimetype.startsWith("image/")) {
      res.json({ message: "you can only upload images" });
    }

    if (fs.existsSync(path.join("public", "images", req.files.image.name))) {
      res.json({ message: "file already exists" });
    }

    fs.copyFileSync(
      req.files.image.tempFilePath,
      path.join("public", "images", req.files.image.name)
    );
    res.json({ message: "image is uploaded" });
  },
};
