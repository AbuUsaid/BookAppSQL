import express from 'express';
import mysql from 'mysql2';

/*environment variable */
import dotenv from 'dotenv';

dotenv.config();

const password = process.env.SQL_PASSWORD;

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'test',
});

app.get('/', (req, res) => {
  res.json('hello this is the backend');
});

app.listen(8800, () => {
  console.log(`Connected to backend! `);
});
