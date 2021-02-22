const connectToDatabase = require('../mongoConnect');
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

module.exports = async (req, res) => { 
  try{
    await runMiddleware(req, res, cors) 
    if(req.method === "POST"){
      const db = await connectToDatabase(process.env.REACT_APP_MONGODB_URI)
      const collection = await db.collection('products')
      const products = await collection.find({}).toArray()
      res.status(200).json({ products, "error" : false })
      res.end();
    }else{
      res.status(400).json({ "message": "Error Query", "error" : true});
      res.end();
    }
  }catch(e){
    console.log("Error:", e)
    res.status(406).json({ "message": "The request cannot be answered properly", "error" : true });
    res.end();
  }
}