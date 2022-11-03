const config = require('../../../utils/initializer');


async function findUser(query) {
  return await config.mongoDB.collection('users').findOne(query, {projection: {_id: 0}});
}

module.exports = {findUser};