const bl = require('../businessLogic/bl');
async function login(req, res) {
  try {
    const inputData = {
      email: req.body.email,
      password: req.body.password
    }
    let result = await bl.login(inputData);
    res.status(200).send(result);
  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: "fail",
      data: err.data
    });
  }
}

module.exports = {login};