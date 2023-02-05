const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

exports.ping = (client) => {
    return async () => {
        try {
            const start = Date.now();
            await client.command({ ping: 1 });
            const duration = Date.now() - start;
            return duration;
        } catch (err) {

        }
    }
}