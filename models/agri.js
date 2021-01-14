
const db = require('../db');

const getAllAgri = async () => {
    const res = await db.query("SELECT registered_at, agriculteurs.id, farmsize, zipcode, city, latitude, longitude FROM agriculteurs, villes WHERE agriculteurs.villes_id = villes.id", [])
    const trans = await db.query("SELECT agriculteurs_id AS idagri, category FROM transactions, produits WHERE transactions.produits_id = produits.id");
    const villes = await db.query("SELECT zipcode, longitude, latitude FROM villes WHERE zipcode LIKE '%000'");
    trans.map((item) => {
        if (!res[item.idagri].type) {
            res[item.idagri].type = []
        }
        if (!res[item.idagri].type.includes(item.category)) {
            res[item.idagri].type.push(item.category)
        }
        return item;
    })
    res.map((el) => {
        el.role = true;
        return el;
    });
    return {res, villes};
}

const getAgriById = async (id) => {
    const res = await db.query("SELECT registered_at, agriculteurs.id, farmsize, zipcode, city, latitude, longitude FROM agriculteurs, villes WHERE agriculteurs.villes_id = villes.id AND agriculteurs.id = ?", [id]);
    res[0].transac = await db.query("SELECT created_at, price, quantity, name, category FROM transactions, produits WHERE transactions.produits_id = produits.id AND agriculteurs_id = ?", [id]);
    return res[0];
}

module.exports = {
    getAllAgri,
    getAgriById,
}

