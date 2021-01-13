const router = require('express').Router();
const { getAllAgri } = require('../models/agri');

router.get('/', async (req, res) => {
    const allAgri = await getAllAgri();
    console.log(allAgri[0])
    res.status(200).json(allAgri);
})

module.exports = router;

