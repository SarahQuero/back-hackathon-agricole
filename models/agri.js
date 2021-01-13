
const db = require('../db');

const getAllAgri = async () => {
    const res = await db.query("SELECT registered_at, agriculteurs.id, farmsize, city, latitude, longitude FROM agriculteurs, villes WHERE agriculteurs.villes_id = villes.id", [])
    const trans = await db.query("SELECT agriculteurs_id AS idagri, category FROM transactions, produits WHERE transactions.produits_id = produits.id");
    trans.map((item) => {
        if (!res[item.idagri].type) {
            res[item.idagri].type = []
        }
        if (!res[item.idagri].type.includes(item.category)) {
            res[item.idagri].type.push(item.category)
        }
        return item;
    })
    return res;
}

module.exports = {
    getAllAgri,
}

