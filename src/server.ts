import express from 'express';
require('dotenv/config');

const app = express();


app.get('/');

app.listen(process.env.PORT);