const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors');
const products = require('./products')
const feedBack = require('./feedBack')
//const login = require('./login')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
 }))

app.get('/:tyyppi', (req,res) => products.getProducts(req,res))
app.get('/:tyyppi/:id', (req,res) => products.getProduct(req,res))
app.get('/', (req,res) => products.getCategories(req,res))
app.post('/Login/', (req,res) => products.checkLogin(req,res))

app.use(cors())
app.post('/Yhteystiedot/', (req, res, next) => feedBack.sendFeedBack(req,res,next))

//app.post('/Login', (req,res) => login.checkLogin(req,res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))