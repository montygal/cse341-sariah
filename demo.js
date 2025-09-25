const {MongoClient} = require('mongodb');

async function main() {
    const url = "mongodb+srv://sariahtanner:<Monet4411>@sariah3tanner.inmauqe.mongodb.net/?retryWrites=true&w=majority&appName=sariah3tanner"


    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);