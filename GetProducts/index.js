const createMongoClient = require("../shared/mongoClient");

module.exports = async function (context, req) {
  const { client: MongoClient, clouseConnectionFn } = await createMongoClient();

  const Products = MongoClient.collection("product");
  const res = await Products.find({});
  const body = await res.toArray();
  clouseConnectionFn();
  context.res = {
    status: 200,
    body: body,
  };
};
