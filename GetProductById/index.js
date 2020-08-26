const { ObjectID } = require("mongodb");
const createMongoClient = require("../shared/mongoClient");
module.exports = async function (context, req) {
  const { id } = req.params;
  const { client: MongoClient, clouseConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection("product");
  const res = await Products.findOne({ _id: ObjectID(id) });
  clouseConnectionFn();
  context.res = {
    status: 200,
    body: res,
  };
};
