import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body); // body er dataen i requesten

    const client = await MongoClient.connect("mongodb+srv://samuelhimmelstrup:3520Farsrum@cluster0.eaqkd.mongodb.net/wimHofSessions?retryWrites=true&w=majority")
    const db = client.db();
    const questionCollection = db.collection("wimHofSessions");

    const result = await questionCollection.insertOne(data);
        
    client.close();

    res.status(201).json({message: "question submitted!"});

  }
}

export default handler