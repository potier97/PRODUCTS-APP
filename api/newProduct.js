const MongoClient = require('mongodb').MongoClient
const Cors = require('cors');

const cors = Cors({
  methods: ['POST', 'HEAD'], 
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
    if(req.method === "POST"){
      const db = await connectToDatabase(process.env.REACT_APP_MONGODB_URI)
      const { nameProduct, idProduct, count, mode, description, activateProduct} = req.body;
      const collection = await db.collection('products')
      const newProducts = await collection.insert({ 
        name: nameProduct, 
        id: idProduct, 
        count: count, 
        mode: mode,
        description: description,
        activateProduct: activateProduct
      })
      res.status(200).json({ newProducts, "error" : false }); 
      res.end();
    }else{
      res.status(400).json({ "message": "Error Query", "error" : true});
      res.end();
    }
  }catch(e){
    console.log("Error:", e)
    res.status(406).json({ "message": "The request cannot be answered properly", "error" : true, errorCode: e });
    res.end();
  }
}