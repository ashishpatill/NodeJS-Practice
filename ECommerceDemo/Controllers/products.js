const Router = express.Router();

Router.get('/add-product', (_, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
    res.sendFile(path.join(rootDir, 'views', 'admin.html'))
})