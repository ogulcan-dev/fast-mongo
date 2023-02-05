const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

exports.uptade = (client, dbName, collectionName) => {
    return async (data) => {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        try {
            const result = await collection.updateOne({ name: data.name }, { $set: data });
            return result;
        } catch (err) {
            console.error(err);
        }
    }
}