const express = require('express')
const bodyParser = require('body-parser')
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const path = require('path')
const rootDir = require('./utils/path')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))


//app.use(express.static(publicPath))
app.get('/about', (_, resp) => {
    resp.sendFile(path.join(rootDir, 'views', 'about.html'))
})

app.use(adminRoute)
app.use(shopRoute)

app.get('*', (_, resp) => {
    console.log(path.join(rootDir, 'views', 'nopage.html'))
    resp.sendFile(path.join(rootDir, 'views', 'nopage.html'))
})

app.listen(3000)

