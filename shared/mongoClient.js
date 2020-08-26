const { MongoClient } = require('mongodb');
const config = {
  url: `mongodb+srv://strey:2328593E@cluster0.wxdrc.gcp.mongodb.net/digital?retryWrites=true&w=majority`
};

module.exports = () => new Promise((resolve, reject) => {
  MongoClient
    .connect(config.url, { useNewUrlParser: true }, (err, mongoConnection) =>
      err
        ? reject(err)
        : resolve({
          client: mongoConnection.db(config.dbName),
          clouseConnectionFn: () => setTimeout(() => {
            mongoConnection.close();
          }, 1000),
          mongoConnection
        })
        );
    });