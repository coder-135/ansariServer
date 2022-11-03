const bl = require('../businessLogic/bl')
const uuid = require('uuid');
const {checkAccess} = require('../../../utils/accessControl')

async function addProduct(req, res) {
  try {
    await checkAccess(req)
    const {body} = req;
    const productData = {
      id: uuid.v4(),
      name: body.name,
      price: body.price,
      imageUrl: body.imageUrl
    }
    const result = await bl.addProduct(productData);
    res.send(result);
  } catch (err) {
    err.status = err.status || 500;
    res.status(err.status).send({
      error: err.error || {message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید'},
    })
  }
}

async function getProduct(req, res) {
  try {
    await checkAccess(req)
    let result;
    if (req.query.id)
      result = await bl.getProduct({id: req.query.id});
    else
      result = await bl.getProducts();

    res.send(result);
  } catch (err) {
    err.status = err.status || 500;
    res.status(err.status).send({
      error: err.error || {message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید'},
    })
  }
}

async function updateProduct(req, res) {
  try {
    await checkAccess(req)
    if (!req.query.id) {
      throw {
        status: 400,
        error: {message: 'شناسه محصول را ارسال نمایید'}
      }
    }
    const inputData = {id: req.query.id, ...req.body};
    let result = await bl.updateProduct(inputData);
    res.send(result);
  } catch (err) {
    err.status = err.status || 500;
    res.status(err.status).send({
      error: err.error || {message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید'},
    })
  }
}

async function deleteProduct(req, res) {
  try {
    await checkAccess(req)
    if (!req.query.id) {
      throw {
        status: 400,
        error: {message: 'شناسه محصول را ارسال نمایید'}
      }
    }
    const inputData = {id: req.query.id};
    let result = await bl.deleteProduct(inputData);
    res.send(result);
  } catch (err) {
    err.status = err.status || 500;
    res.status(err.status).send({
      error: err.error || {message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید'},
    })
  }
}

module.exports = {addProduct, getProduct, updateProduct, deleteProduct}