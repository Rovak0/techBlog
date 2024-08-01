const router = require('express').Router();

//to call handlebars, res.render('target', variables)

//will manage homepage and dashboard


router.get('/', async (req, res) => {
    res.render('landing');
});

router.get('/dash', async (req, res) => {
    //this shows create a post and user's posts
    res.json('Not done yet');
});



module.exports = router;