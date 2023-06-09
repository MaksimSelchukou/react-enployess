const express = require('express');
const {login, register, current} = require("../controllers/users");
const router = express.Router();

/* GET users listing. */
//api/user/login
router.post('/login', login);

router.post('/register', register);

router.get('/current', current);

module.exports = router;
