const router = require('express').Router();
const agri = require('./agri.routes.js');

router.use('/agri', agri);

router.get('/', (req, res) => {
  res.status(200).json({msg: "get /api"})
});

module.exports = router;
