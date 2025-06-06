import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "ecomdb";
let db;

export const connectToMongoDB = async () => {
  try {
    const client = await MongoClient.connect(url);
    console.log("MongoDB is connected");
    db = client.db(dbName);  // Set the db instance here
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export const getDB = () => {
  if (!db) {
    throw new Error("Database not connected. Call connectToMongoDB first.");
  }
  return db;
};
