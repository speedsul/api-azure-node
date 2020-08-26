const { ObjectID } = require("mongodb");
const createMongoClient = require("../shared/mongoClient");

module.exports = async function (context, req) {
    const { id } = req.params;
    const { client: MongoClient, clouseConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection("product");
    const res = await Products.findOneAndDelete({ _id: ObjectID(id) });

 
    const message = { "message": "O produto foi deletado com sucesso!!", res}
    clouseConnectionFn();
    context.res = {
      status: 200,
      body: message,
    };
}