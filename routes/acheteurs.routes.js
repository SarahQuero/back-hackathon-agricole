const router = require('express').Router();
const {
  getProfilAcheteur,
  getTransAcheteur,
  getAllAcheteurs
} = require('../models/acheteurs');

router.get('/profile/:id', async (req, res) => {
  const profil = await getProfilAcheteur(req.params.id);
  const transAcheteurs = await getTransAcheteur(req.params.id);
  res.status(200).json({ profil: profil, transAcheteurs: transAcheteurs });
});

router.get('/', async (req, res) => {
  const getAllAcheteur = await getAllAcheteurs();
  res.status(200).json({ getAllAcheteurs: getAllAcheteur });
});

module.exports = router;
