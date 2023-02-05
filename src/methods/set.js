const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

exports.set = (client, dbName, collectionName, data, callback) => {
    return async (data) => {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        try {
            const result = await collection.insertOne(data);
            return result;
        } catch (err) {
            console.error(err)
        }
    }
}