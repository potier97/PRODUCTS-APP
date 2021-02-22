const MongoClient = require('mongodb').MongoClient

let cachedDb = null
 
export default async function connectToDatabase(uri) {
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  const db = await client.db('NutryProducts')
  cachedDb = db
  return db
}