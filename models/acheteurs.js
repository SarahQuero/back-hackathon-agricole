const db = require('../db');

const getProfilAcheteur = async id => {
  const res = await db.query(
    'SELECT a.name, a.type, count(t.price) AS nb, ROUND(SUM(t.quantity),2) AS somme FROM acheteurs AS a JOIN transactions AS t ON a.id=t.acheteurs_id WHERE a.id=?',
    [id]
  );
  res.map((el) => {
    el.role=false;
    return el; 
  })
  return res;
};

const getTransAcheteur = async id => {
  const trans = await db.query(
    'SELECT p.category, ROUND(SUM(t.quantity),2) AS somme FROM transactions AS t JOIN produits AS p ON p.id=t.produits_id JOIN acheteurs AS a ON a.id=t.acheteurs_id WHERE a.id=? GROUP BY p.category',
    [id]
  );
  return trans;
};

module.exports = {
  getProfilAcheteur,
  getTransAcheteur
};
