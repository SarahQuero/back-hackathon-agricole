const router = require('express').Router();
const agri = require('./agri.routes.js');
const acheteurs = require('./acheteurs.routes');
const profil = require('./profil.routes.js');

router.use('/agri', agri);
router.use('/acheteurs', acheteurs);
router.use('/profil', profil);

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'get /api' });
});

module.exports = router;
