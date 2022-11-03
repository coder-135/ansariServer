const mongodb = require('mongodb');

class Config {
  static async initMongo() {
    const mongoUsername = process.env.ANSARI_MONGO_USERNAME
    const mongoPassword = process.env.ANSARI_MONGO_PASSWORD
    Config.mongoConfig = {
      server: process.env.ANSARI_MONGO_SERVER,
      port: process.env.ANSARI_MONGO_PORT,
    };
    Config.databaseName = process.env.ANSARI_MONGO_DATABASE;
    const mongoUrl = `mongodb://${mongoUsername}:${mongoPassword}@${Config.mongoConfig.server}:${Config.mongoConfig.port}`

    Config.mongoDBConnection = await mongodb.MongoClient.connect(
      mongoUrl,
      {useNewUrlParser: true}
    );
    Config.mongoDB = Config.mongoDBConnection.db(Config.databaseName);
  }


  static async Initialize() {
    await Config.initMongo();
  }
}

module.exports = Config;


