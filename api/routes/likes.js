const express = require("express");
const {
  getLikes,
  addLike,
  deleteLike,
  getUserLikes,
} = require("../controllers/likes");

const router = express.Router();

router.get("/get", getLikes);

router.get("/getuser", getUserLikes);

router.post("/add", addLike);

router.delete("/delete", deleteLike);

module.exports = router;
