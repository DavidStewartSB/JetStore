const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./helpers/error-handle')

app.use(cors());
app.options('*', cors());
//Middlewares
app.use(express.json())
app.use(morgan('tiny')) //log das request no terminal
app.use('/public/upload', express.static(__dirname + '/public/upload'))
app.use(errorHandler)

//Routes
const productsRoutes = require('./routes/products')
const categoriesRoutes = require('./routes/categories')

const api = '/api/v1' //costumo deixar nas .env

app.use(`${api}/products`, productsRoutes)
app.use(`${api}/categories`, categoriesRoutes)

//Connect Database
mongoose.connect('mongodb+srv://admin:admin@jet-store.jt5zhpo.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Conexão com o banco: Completa!')
}).catch(err => {
    console.log(err)
})
//Servidor local
app.listen(3000, () => {
    console.log('Server rodando na porta http://localhost:3000')
})