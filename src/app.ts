import express from 'express';

const app = express();
const port: number = Number(process.env.PORT) || 3000; // set our port
app.get('/', (req, res) => {
  res.send('OK!');
});
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});