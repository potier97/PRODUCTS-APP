const connectToDatabase = require('../mongoConnect');
const Cors = require('cors');
const runMiddleware = require('../middleware');

const cors = Cors({
  methods: ['POST', 'HEAD'], 
  origin: 'https://products.nipoanz.com',
})
 

module.exports = async (req, res) => { 
  
  await runMiddleware(req, res, cors) 
  if(req.method === "POST"){
    const db = await connectToDatabase(process.env.REACT_APP_MONGODB_URI)
    const collection = await db.collection('products')
    const products = await collection.find({}).toArray()
    res.status(200).json({ products })
    res.end();
  }else{
    console.log("Error:", err)
    res.status(406).json({ "message": "The request cannot be answered properly", "error" : true });
    res.end();
  }
  
}