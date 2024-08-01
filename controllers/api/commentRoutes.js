const router = require('express').Router();
const { Comment } = require('../../models');

//same as the other, get for testing, post, delete

router.get('/', async (req,res) => {
    try {
        const commentData = await Comment.findAll();
        const commentTotal = [];
        for(comment of commentData){
            commentTotal.push(comment.dataValues);
        }
        res.json(commentTotal);
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    try{
        const commentData = await Comment.create(req.body);
        res.json(commentData);
    }
    catch(err) {
        res.json(err);
    }
});

router.delete('/', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.body.id
            }
        });
        if(!commentData){
            res.status(404).json('No comment was found'); //did not find
            return;
        }
        res.status(200).json('Comment deleted'); 
    }
    catch(err) {
        res.status(500).json(err); //something went wrong
    }
});


module.exports = router;