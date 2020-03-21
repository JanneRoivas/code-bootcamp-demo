const pgp = require('pg-promise')()
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'demo',
    user: 'postgres',
    password: 'jtihh6kd'
})
const getKakut = (req,res) => {
    db.any("SELECT * FROM bakedGoods WHERE tyyppi='Kakut'")
    .then((ProductListFromDb) =>res.send(ProductListFromDb))
    .catch(error => res.status(500).send(error))
    }
const getLeivokset = (req,res) => {
    db.any("SELECT * FROM bakedGoods WHERE tyyppi='Leivokset'")
    .then((ProductListFromDb) =>res.send(ProductListFromDb))
    .catch(error => res.status(500).send(error))
    }
const getPullat = (req,res) => {
    db.any("SELECT * FROM bakedGoods WHERE tyyppi='Pullat'")
    .then((ProductListFromDb) =>res.send(ProductListFromDb))
    .catch(error => res.status(500).send(error))
    }
const getTortut = (req,res) => {
    db.any("SELECT * FROM bakedGoods WHERE tyyppi='Tortut'")
    .then((ProductListFromDb) =>res.send(ProductListFromDb))
    .catch(error => res.status(500).send(error))
    }
const getProduct = (req,res) => {
    const id = req.params.id;
    db.one("SELECT * FROM bakedGoods WHERE id=$1", [id])
    .then((ProductListFromDb) =>res.send(ProductListFromDb))
    .catch(error => res.status(500).send(error))
    }


    
    module.exports = {
        getKakut,
        getLeivokset,
        getPullat,
        getTortut,
        getProduct
    }