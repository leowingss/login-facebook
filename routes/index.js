const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Facebook' });
});

// GET login page 

router.get('/login', (req, res, next) => {
    res.render('login', { title: 'Facebook' });
});

router.get('/esquece', (req, res, next) => {
    res.render('esquece', { title: 'Esqueci a senha' });
});


module.exports = router;