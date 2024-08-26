const { MongoClient } = require ("mongodb");

const abc = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(abc);

const dbName = "shop";
const collectionsName = "products";

const main = async () =>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionsName);
    const data = await collection.find({price:{$gt:1200}}).toArray(); 
    console.log(data);
    return "done";
};

main().then(console.log()).catch((e) => console.log(e)).finally(()=> client.close());
