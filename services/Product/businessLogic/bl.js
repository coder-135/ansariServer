const repository = require('../repository/repository')


async function addProduct(inputData) {
  await repository.addProduct(inputData);
  delete inputData._id;
  return {
    message: 'اطلاعات محصول با موفقیت ثبت شد',
    result: inputData
  }
}

async function getProducts() {
  const result = await repository.getProducts();
  return {
    message: 'اطلاعات محصول ها با موفقیت دریافت شد',
    result
  }
}

async function getProduct(inputData) {
  const result = await repository.getProduct(inputData);
  return {
    message: 'اطلاعات محصول با موفقیت دریافت شد',
    result
  }
}

async function updateProduct(inputData) {
  const result = await repository.updateProduct(inputData);
  return {
    message: 'اطلاعات محصول با موفقیت ویرایش شد',
    result
  }
}
async function deleteProduct(inputData) {
 await repository.deleteProduct(inputData);
  return {
    message: 'اطلاعات محصول با موفقیت حذف شد'
  }
}


module.exports = {addProduct, getProducts, getProduct, updateProduct , deleteProduct}