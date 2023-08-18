const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')
const router = express.Router()

router.get('/', (_, res) => {
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    const productData = {
        name: 'First Book',
        price: '$24.99',
        description: 'some book details'        
    }
    res.render('shop', {productData}) // this will execute shop.ejs
})


module.exports = router