import express from 'express';
import dotenv from 'dotenv';
import mongodb from 'mongodb';
import { connect } from './db/mongodb';

dotenv.config();

/**
 * Express.js
 */
/*
const app = express();
const port: number = Number(process.env.PORT) || 3000; // set our port
app.get('/', (req, res) => {
  res.send('OK!');
});
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
*/

/**
 * MongoDB
 */

connect();