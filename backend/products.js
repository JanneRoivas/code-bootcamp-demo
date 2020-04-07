const pgp = require('pg-promise')()
const db = pgp({
    host: process.env.POSTGRES_HOST || "localhost",
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_DB || "demo",
    user: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
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

const checkLogin = (req,res) => {
    const username = req.body.username
    const password = req.body.password
    let code = 0
    db.one("SELECT * FROM users WHERE username=$1 AND password=$2", [username,password])
    .then(apu => res.status(200).send(true))
    .catch(error => res.status(500).send(error))
}

   module.exports = {
        getProducts,
        getProduct,
        getCategories,
        checkLogin
    }

/* Paskaversio mut toimii
    .then(apu => res.status(200).send(true))
    .catch(error => res.status(500).send(error))
*/