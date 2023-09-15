const express = require("express");

const router = express.Router();

const ROOMS = [
  {
    title: "Learn Blockchain",
    id: "1",
  },
];

router.get("/", (req, res) => {
  res.json(ROOMS);
});
module.exports = router;
