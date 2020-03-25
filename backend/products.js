const pgp = require('pg-promise')()
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'demo',
    user: 'postgres',
    password: 'jtihh6kd'
})
const getProducts = (req,res) => {
    const tyyppi = req.params.tyyppi
    db.any("SELECT id,tyyppi,nimi FROM bakedGoods WHERE tyyppi=$1", [tyyppi])
    .then((ProductListFromDb) =>res.send(ProductListFromDb))
    .catch(error => res.status(500).send(error))
    }
const getProduct = (req,res) => {
    const id = req.params.id
    db.one("SELECT id,nimi,kuvaus,ainesosat FROM bakedGoods WHERE id=$1", [id])
    .then((ProductDescFromDb) =>res.send(ProductDescFromDb))
    .catch(error => res.status(500).send(error))
}
const getCategories = (req,res) => {
    db.any("SELECT DISTINCT tyyppi FROM bakedGoods ORDER BY tyyppi")
    .then((CategoryListFromDb) =>res.send(CategoryListFromDb))
    .catch(error => res.status(500).send(error))
}

   module.exports = {
        getProducts,
        getProduct,
        getCategories
    }