const express = require("express");
const router = express.Router();

// Placeholder route
router.get("/", (req, res) => {
  res.send("Products route works");
});

module.exports = router;
