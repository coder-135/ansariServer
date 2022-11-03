const {Router} = require('express');
const router = Router();
const {addProduct, getProduct, updateProduct, deleteProduct} = require('./controller/controller')


router.post('/product', addProduct);
router.get('/product', getProduct);
router.put('/product', updateProduct);
router.delete('/product', deleteProduct);


module.exports = router;
