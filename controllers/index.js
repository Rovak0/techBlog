const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage');
//this will be used for the default homepage
// router.get('/', (req, res) => {
//     res.render('landing', {logged_in: req.session.logged_in}); // homepage hanldebar
// });

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;