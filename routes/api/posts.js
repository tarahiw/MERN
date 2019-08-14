const express = require('express');
const router = express.Router();

// @router    GET api/posts
// @desc      Test route
// @access    public
router.get('/', (req, res) => {
  res.send('Posts router');
});

module.exports = router;
