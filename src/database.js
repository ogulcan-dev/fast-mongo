const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _client;

exports.connect = async (url) => {
    if(_client) return _client;

    try {
        _client = await MongoClient.connect(url, { useUnifiedTopology: true });
        return _client;
    } catch (err) {
        console.error(err);
    }
}