const MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID;
const Cors = require('cors');
 
const cors = Cors({
  methods: ['PUT', 'HEAD'], 
  origin: 'https://products.nipoanz.com',
})
 

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
      if (result instanceof Error) return reject(result)
      return resolve(result)
      })
  })
}

let cachedDb = null
 
export default async function connectToDatabase(uri) {
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  const db = await client.db('NutryProducts')
  cachedDb = db
  return db
}

module.exports = async (req, res) => { 
  try{
    await runMiddleware(req, res, cors) 
    if(req.method === "PUT"){
      const db = await connectToDatabase(process.env.REACT_APP_MONGODB_URI)
      const { id, nameProduct, idProduct, count, mode, description, activateProduct } = req.body;
      var myquery = { _id: ObjectId(id) };
      var newvalues = { $set: {
        name: nameProduct, 
        id: idProduct, 
        count: count, 
        mode: mode,
        description: description,
        activateProduct: activateProduct
      } };
      const collection = await db.collection('products')
      const updateProduct = await collection.updateOne(myquery, newvalues) 
      res.status(200).json({ updateProduct, "error" : false })
      res.end();
    }else{
      res.status(400).json({ "message": "Error Query", "error" : true});
      res.end();
    }
  }catch(e){
    console.log("Error:", e)
    res.status(406).json({ "message": "The request cannot be answered properly", "error" : true, "errorCode": e });
    res.end();
  }
}