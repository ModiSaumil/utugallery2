const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/utugallery");


module.exports = () => {
    mongoose.connect('mongodb://localhost:27017', {
        dbName: 'utugallery'
    })
    .then(()=>{
        console.log('Mongodb connected .....');
    })
    .catch((err) => console.log(err,message));

    mongoose.connection.on('connected', ()=>{
            console.log('database connected');
    });

    mongoose.connection.on('error', (err) => console.log(err.message));

}















//how to connect to mongodb to nodejs?
// var db = null // global variable to hold the connection

// MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
//     if(err) { console.error(err) }
//     db = client.db('utugallery') // once connected, assign the connection to the global variable
// })

// app.get('/', function(req, res) {
//     db.collection('user').find({}).toArray(function(err, docs) {
//         if(err) { console.error(err) }
//         res.send(JSON.stringify(docs))
//     })
// })


// var conn = MongoClient.connect('mongodb://localhost:27017/') // returns a Promise

// app.get('/', function(req, res) {
//     conn.then(client=> client.db('utugalery').collection('user').find({}).toArray(function(err, docs) {
//         if(err) { console.error(err) }
//         res.send(JSON.stringify(docs))
//     }))
// })


