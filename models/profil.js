const db = require('../db');

const getProfil = async(id) => {
    const res = await db.query("SELECT a.registered_at, a.farmsize, count(t.price) AS nb, ROUND(SUM(t.quantity),2) AS somme FROM agriculteurs AS a JOIN transactions AS t ON a.id=t.agriculteurs_id WHERE a.id=?", [id]);
    return res;
}

const getTrans = async(id) => {
    const trans = await db.query("SELECT p.category, ROUND(SUM(t.quantity),2) AS somme FROM transactions AS t JOIN produits AS p ON p.id=t.produits_id JOIN agriculteurs AS a ON a.id=t.agriculteurs_id WHERE a.id=? GROUP BY p.category", [id])
    return trans
}

module.exports = {
    getProfil,
    getTrans,
}