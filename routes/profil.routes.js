const router = require("express").Router();
const {getProfil, getTrans} = require("../models/profil")

router.get('/:id', async (req, res) => {
    const profil = await getProfil(req.params.id);
    const trans = await getTrans(req.params.id);
    res.status(200).json({profil: profil, trans: trans})
})

module.exports = router;