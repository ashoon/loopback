const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const url = 'mongodb+srv://ashoon:sc315860@arnoldsdemocluster-d7pax.gcp.mongodb.net/sample_weatherdata';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

  assert.equal(null, err);
  console.log('Connected successfully to server');
  var db = client.db('sample_weatherdata');
  db.collection('data').countDocuments({}, (error, numOfDocs) => {
    assert.equal(null, error);
    console.log('This db collection contains '+ numOfDocs + ' docs');
  });
  client.close();  

});