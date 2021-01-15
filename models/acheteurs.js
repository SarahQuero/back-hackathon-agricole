const db = require('../db');

const getProfilAcheteur = async id => {
  const res = await db.query(
    'SELECT a.name, a.type, count(t.price) AS nb, ROUND(SUM(t.quantity),2) AS somme FROM acheteurs AS a JOIN transactions AS t ON a.id=t.acheteurs_id WHERE a.id=?',
    [id]
  );
  res.map(el => {
    el.role = false;
    return el;
  });
  return res[0];
};

const getTransAcheteur = async id => {
  const trans = await db.query(
    'SELECT p.category, ROUND(SUM(t.quantity)) AS somme FROM transactions AS t JOIN produits AS p ON p.id=t.produits_id JOIN acheteurs AS a ON a.id=t.acheteurs_id WHERE a.id=? GROUP BY p.category',
    [id]
  );
  return trans;
};

const getAllAcheteurs = async () => {
  const res = await db.query(
    'SELECT acheteurs.id, name, zipcode, city, latitude, longitude FROM acheteurs, villes WHERE acheteurs.villes_id = villes.id',
    []
  );
  const trans = await db.query(
    'SELECT acheteurs_id AS idacheteur, category FROM transactions, produits WHERE transactions.produits_id = produits.id'
  );
  trans.map(item => {
    if (!res[item.idacheteur]) {
      return item;
    }
    if (!res[item.idacheteur].type) {
      res[item.idacheteur].type = [];
    }
    if (!res[item.idacheteur].type.includes(item.category)) {
      res[item.idacheteur].type.push(item.category);
    }
    return item;
  });
  res.map(el => {
    el.role = false;
    return el;
  });
  return res;
};

module.exports = {
  getProfilAcheteur,
  getTransAcheteur,
  getAllAcheteurs
};
