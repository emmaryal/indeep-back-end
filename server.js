const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const {readdirSync} = require('fs');

// const dotenv = require("dotenv");

// dotenv.config();
require('dotenv').config()

//app
const app = express()

//db
//mongoose.connect(process.env.MONGO_URI, {
mongoose.connect(process.env.DATABASE, {
useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(()=> console.log('DB CONNECTED'))
.catch(err => console.log(`DB CONNECTION ERR : ${err}`))

//CORS SETTINGS
app.use(
    cors({
        credentials: true,
        origin: [
            "http://localhost:3000",
            "https://indeeprecords.herokuapp.com",
            "http://indeeprecords.herokuapp.com"
        ]
    })
)



//middlewares

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '2mb'}));
app.use(cors());




//routes middleware
readdirSync('./routes').map((r)=>
app.use('/api', require('./routes/' + r)));



//route for serving react app(index.html)
app.use((req, res, next) => {
    res.sendFile(__dirname + "/public/index.html")
});


//port
const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log(`Server is running on port${port}`))

