const express = require('express');
const bodyParser = require('body-parser');




const product = require('./routes/product.route'); // Imports routes for the products

const test = require('./routes/test.route'); // Imports routes for the products


// initialize our express app
const app = express();



// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://nirajhirachan:mlab147@ds018538.mlab.com:18538/products';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/',test);






let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});