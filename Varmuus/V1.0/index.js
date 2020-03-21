const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const products = require('./products')

app.get('/kakut',(req,res) => products.getKakut(req,res))
app.get('/leivokset',(req,res) => products.getLeivokset(req,res))
app.get('/pullat',(req,res) => products.getPullat(req,res))
app.get('/tortut',(req,res) => products.getTortut(req,res))


/*
app.post('/fruits',(req,res) => fruits.addFruit(req,res))
app.delete('/fruits/:id',(req,res) => fruits.deleteFruit(req,res))
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))