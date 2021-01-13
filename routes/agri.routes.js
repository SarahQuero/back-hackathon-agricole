const router = require('express').Router();
const { getAllAgri, getAgriById } = require('../models/agri');

router.get('/', async (req, res) => {
    const allAgri = await getAllAgri();
    res.status(200).json(allAgri);
});

router.get('/:id', async (req, res) => {
    const agriById = await getAgriById(req.params.id);
    res.status(200).json(agriById);
});

module.exports = router;

