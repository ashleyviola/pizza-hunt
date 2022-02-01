const router = require('express').Router();
//import all of the API routes from /api/index.js
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
