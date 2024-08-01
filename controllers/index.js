const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage');
// const dashRoutes = require('.dashboard/');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/dash', dashRoutes);

module.exports = router;