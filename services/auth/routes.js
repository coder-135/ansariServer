const { Router } = require('express');
const router = Router();

const { login } = require('./controller/controller');

router.put('/login', login);


module.exports = router;