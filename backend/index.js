const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
const products = require('./products')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
 }))


app.get('/:tyyppi', (req,res) => products.getProducts(req,res))
app.get('/:tyyppi/:id', (req,res) => products.getProduct(req,res))
app.get('/', (req,res) => products.getCategories(req,res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))