const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

const Profile = require('../../Models/Profile');
const User = require('../../Models/User');

// @router    GET api/profile/me
// @desc      get current users Profile
// @access    private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate([
      'name',
      'avatar'
    ]);
    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'هیچ پروفایل برای این کاربر وجود ندارد' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

module.exports = router;
