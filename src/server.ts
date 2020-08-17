import express from 'express';
require('dotenv/config');

const app = express();
app.use(express.json());

app.get('/', (request, response)=> {
    response.send('Connected')
});

app.listen(process.env.PORT);