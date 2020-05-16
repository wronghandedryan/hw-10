const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getNotes = (req, res, next) => {
    notes.fetchAll(notes => {
        res.render('notes.html', {
            prods: Notes,
            pageTitle: 'All Notes',
            path: '/notes'
        });
    });
};

exports.getNotes = (req, res, next) => {
    const notedId = req.params.noteId;
    Product.findById(noteId, notes => {
        res.render('shop/product-detail', {
            product: notes,
            pageTitle: notes.title,
            path: '/notes'
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/notes.html'
        });
    });
};

exports.get = (req, res, next) => {
    index.getNotes(Notes => {
        notes.fetchAll(notes => {
            const indexNotes = [];
            for (product of products) {
                const indexNotesData = index.notes.find(
                    notes => prod.id === notes.id
                );
                if (cartProductData) {
                    cartProducts.push({
                        productData: product,
                        qty: cartProductData.qty
                    });
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: cartProducts
            });
        });
    });
};

exports.postNotes = (req, res, next) => {
    const prodId = req.body.productId;
    notes.findById(notersId, notes => {
        notes.addProduct(prodId, notes);
    });
    res.redirect('/notes');
};

exports.postNotesDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
    });
};

exports.getNotes = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};