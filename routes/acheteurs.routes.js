const router = require('express').Router();
const { getProfilAcheteur, getTransAcheteur } = require('../models/acheteurs');

router.get('/:id', async (req, res) => {
  const profil = await getProfilAcheteur(req.params.id);
  const transAcheteurs = await getTransAcheteur(req.params.id);
  res.status(200).json({ profil: profil, transAcheteurs: transAcheteurs });
});

module.exports = router;
