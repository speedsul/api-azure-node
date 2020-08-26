const createMongoClient = require("../shared/mongoClient");
module.exports = async function (context, req) {
  const product = req.body;

  const { client: MongoClient, clouseConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection("product");
  const res = await Products.insert(product);
  clouseConnectionFn();
  context.res = {
    status: 201,
    body: res,
  };
};
