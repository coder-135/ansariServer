const config = require('../../../utils/initializer')

async function addProduct(inputData) {
  await config.mongoDB.collection('products').insertOne(inputData);
}

async function getProducts() {
  return await config.mongoDB.collection('products').find({}, {projection: {_id: 0}}).toArray();
}

async function getProduct(inputData) {
  return await config.mongoDB.collection('products').findOne({id: inputData.id}, {projection: {_id: 0}});
}



async function  updateProduct(inputData) {
   await config.mongoDB.collection('products').updateOne({id: inputData.id}, {
    $set: inputData
  });
  return await config.mongoDB.collection('products').findOne({id: inputData.id}, {projection: {_id: 0}});
}

async function deleteProduct(inputData) {
   await config.mongoDB.collection('products').deleteOne({id: inputData.id});
}

module.exports = {addProduct, getProducts, getProduct,updateProduct,deleteProduct}