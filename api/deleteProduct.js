const MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID;
const Cors = require('cors');

const cors = Cors({
  methods: ['DELETE', 'HEAD'], 
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
    if(req.method === "DELETE"){
      const db = await connectToDatabase(process.env.REACT_APP_MONGODB_URI)
      const { id } = req.body;
      const collection = await db.collection('products')
      const deleteResponse = await collection.deleteOne({ _id: ObjectId(id)  })
      res.status(200).json({ deleteResponse, "error" : false })
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