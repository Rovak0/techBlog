const router = require('express').Router();
const { Post } = require('../models');
const { User } = require('../models');

//to call handlebars, res.render('target', variables)

//will manage homepage and dashboard


router.get('/', async (req, res) => {
    res.render('landing', {logged_in: req.session.logged_in});
});

router.get('/dash', async (req, res) => {
    //this shows create a post and user's posts
    //shows the posts and lets you create a post
    //feeds in data to a render call

    //should have user data at this point
    //use the user data to filter posts to just the user's posts
    //user_id: req.session.user_id
    try{
        const postData = await Post.findAll();
        const postTotal = [];
        for (item of postData){
            postTotal.push(item.dataValues);
        }
        res.render('dashboard', {postTotal});
    }
    catch(err){
        res.json(err)
    }
    
});



module.exports = router;