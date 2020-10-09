//importar o mongo db
var mongo = require('mongodb');

//devolver os resultados do banco só quando necessário sua chamada
var connMongoDB = function () {
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            27017,
            {}
        ),
        {}
    );//primeiro parametro é o nome do banco

    return db;
}

module.exports = function () {
    return connMongoDB;
}