const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')

const Router = express.Router();

Router.get('/admin/add-product', (_, res) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'))
})

Router.post('/product',(_, res) => {
    res.redirect('/')
})

module.exports = Router