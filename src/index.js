const db = require('./database')
const { connect } = db;
const {set} = require('./methods/set')
const {add} = require('./methods/add')
const {update} = require('./methods/update')
const {ping} = require('./methods/ping')
let _client;

exports.connect = async (url) => {
    if(_client) return _client;
    

    try {
        _client = await connect(url)
        return _client;
    } catch(err) {
        console.log(err)
    }
}

exports.set = set(_client)
exports.add = add(_client)
exports.update = update(_client)
exports.ping = ping(_client)

exports.db = (dbName, collectionName) => {
    return {
        set: set(_client, dbName, collectionName),
        add: add(_client, dbName, collectionName),
        update: update(_client, dbName, collectionName),
    }
}
