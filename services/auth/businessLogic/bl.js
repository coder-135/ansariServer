const repository = require('../repository/repository');
const generate = require('../../../utils/generate');

const login = async (inputData) => {
  try {
    const userData = await repository.findUser({email: inputData.email});
    if (!userData) {
      throw {
        message: 'کاربر مورد نظر یافت نشد',
        status: 404
      }
    }
    if (inputData.password === userData.password) {
      const accessToken = generate.access(userData.id);
      return {
        status: 200,
        data: {
          message: 'به سرور انصاری خوش آمدید',
          result: {
            accessToken,
            userData
          }
        }
      }
    } else {
      throw {
        message: 'رمز عبور اشتباه است',
        status: 400
      }
    }
  } catch (err) {
    let statusCode = err.status || 400;
    throw {
      status: statusCode,
      data: {
        message: err.message,
      }
    }
  }
}


module.exports = {
  login
}