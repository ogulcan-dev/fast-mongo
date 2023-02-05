const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

exports.add = (client, dbName, collectionName, data) => {
    return async (data) => {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(data);
        try {
            const result = await collection.insertOne(data)
            return result;
        } catch (err) {
            console.error(err)
        }
    }
}