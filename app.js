const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('HomePage');
});

mongoose.connect(process.env.DB_CONNECTOR, {dbName: 'mini-post'}).then(() => {
    console.log('Your mongoDB connector is on... Atlas');
})

app.listen(3000, ()=>{
    console.log('Server is up and running on: http://localhost:3000');
})
