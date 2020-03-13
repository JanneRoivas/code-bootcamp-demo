//import fakeProductList from './fakedata'

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

const port = 4000

const products = require('./products')


app.get('/products',(req,res) => products.getProducts(req,res))
app.get('/products/Kakut',(req,res) => products.getKakut(req,res))
app.get('/products/Tyyppi',(req,res) => products.getCategories(req,res))
app.post('/products',(req,res) => products.addProduct(req,res))
app.delete('/products/:id',(req,res) => products.deleteProduct(req,res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))