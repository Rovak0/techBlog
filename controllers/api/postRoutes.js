const router = require('express').Router();
const { Post } = require('../../models');

//api/posts
//creates posts, deletes posts

//get for testing
router.get('/', async (req,res) => {
    try {
        const postData = await Post.findAll();
        const postTotal = [];
        for(post of postData){
            postTotal.push(post.dataValues);
        }
        res.json(postTotal);
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    try{
        const postData = await Post.create(req.body);
        res.json(postData);
    }
    catch(err) {
        res.json(err);
    }
});

router.delete('/', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.body.id
            }
        });
        if(!postData){
            res.status(404).json({message : 'No post was found'}); //the message template is because json
            return;
        }
        res.status(200).json('Post deleted');
    }
    catch(err) {
        res.status(500).json(err);
    }
});



module.exports = router;