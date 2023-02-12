const adminController = require("../controllers/adminController");
const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");

const admin = (app) => {
    app.get('/admin', adminController.index);
    
    // routing of category
    app.get('/admin/category', categoryController.index);
    app.get('/admin/category-add', categoryController.add);
    app.post('/admin/category-add', categoryController.create);

    app.get('/admin/category-update/:id', categoryController.edit);
    app.post('/admin/category-update/:id', categoryController.update);

    app.get('/admin/category-delete/:id', categoryController.delete);


    // Routing of product
    app.get('/admin/product', productController.index);
    
    app.get('/admin/product-add', productController.add);
    app.post('/admin/product-add', productController.create);

    app.get('/admin/product-edit/:id', productController.edit);
    app.post('/admin/product-edit/:id', productController.update);

    app.get('/admin/product-delete/:id', productController.delete);
}
module.exports = admin;         