const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'dist')))
//   .get('/', (req, res) => res.render('dist/index'))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`))


/**
 * MongoDB:
 */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/planner';
  // Database Name
  const dbName = 'insta';
  let client;

  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    let r = await db.collection('photos').insertOne({a:1});
    assert.equal(1, r.insertedCount);

    // Insert multiple documents
    r = await db.collection('photos').insertMany([{a:2}, {a:3}]);
    assert.equal(2, r.insertedCount);
    
  } catch (err) {
    console.log(err.stack);
  }

  if (client) {
    client.close();
  }
})();