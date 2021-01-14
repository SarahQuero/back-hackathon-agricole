const router = require('express').Router();
const agri = require('./agri.routes.js');
const acheteurs = require('./acheteurs.routes');

router.use('/agri', agri);
router.use('/acheteurs', acheteurs);

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'get /api' });
});

module.exports = router;
