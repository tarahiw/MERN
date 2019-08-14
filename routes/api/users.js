const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// @router    POST api/users
// @desc      Register user
// @access    public
router.post(
  '/',
  [
    check('name', 'پر کردن فیلد نام اجباری است')
      .not()
      .isEmpty(),
    check('email', 'لطفا یک ایمیل معتبر وارد کنید').isEmail(),
    check('password', 'پسور باید بیش از ۶ کاراکتر داشته باشد').isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User router');
  }
);

module.exports = router;
