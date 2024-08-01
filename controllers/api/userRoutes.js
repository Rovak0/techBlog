const router = require('express').Router();
const { User } = require('../../models');

//api/users
//manages login and creating users
//and deleting users

//get all users.  Won't be used except for testing
router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll();
        const userTotal = [];
        for(user of userData){
            userTotal.push(user.dataValues);
        }
        res.json(userTotal);
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//feels out of place.  Renders the login page
router.get('/login', (req,res) => {
    res.render('login');
});



router.post('/login', async (req,res) => {
    //check for the name, then compare the password
    //both passed in as part of req.body
    console.log(req.body);
    try{
        const userLogin = await User.findAll({where: {name: req.body.name}});
        const passCheck = userLogin.checkPassword(req.body.password); //built in to user class
        console.log(passCheck);
        if (passCheck){
            // req.session.logged_in = true;
            // req.session.user_id = userLogin.id;
            // req.session.save(() => {});
            // res.json({answer : 'pass'}); //lets the login page use true/false
            res.json('Work');
        }
        else {
            res.json('Login failed');
        }
    }
    catch(err) {
        res.status(404).json('User not found');
    }
});


router.post('/create', async (req,res) => {
    try{
        const userData = await User.create(req.body);
        //login the user so that they don't have to login right after creating an account
        req.session.logged_in = true; 
        req.session.user_id = userData.id;
        req.session.save(() => {});
        res.json(userData);
    }
    catch(err) {
        res.json(err);
    }
})



module.exports = router;