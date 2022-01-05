import {MongoClient, Db} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const url = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;
const defaultDBName = process.env.MONGO_DATABASE || '';

const client = new MongoClient(url);

export let db: Db;
export const connect = async (dbName: string = defaultDBName) => {
    const conn = await client.connect();
    db = conn.db(dbName);
    return client;
};