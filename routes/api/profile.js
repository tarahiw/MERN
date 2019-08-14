const express = require('express');
const router = express.Router();

// @router    GET api/profile
// @desc      Test route
// @access    public
router.get('/', (req, res) => {
  res.send('Profile router');
});

module.exports = router;