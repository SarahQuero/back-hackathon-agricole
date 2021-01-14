const router = require('express').Router();
const db = require('../db');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const sql =
    'SELECT a.name, a.type, count(t.price) AS nb, ROUND(SUM(t.quantity),2) AS somme FROM acheteurs AS a JOIN transactions AS t ON a.id=t.acheteurs_id WHERE a.id=?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ errorMessage: 'internal error server' });
    } else {
      res.status(200).send(result);
    }
  });
});



module.exports = router;
