const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();


const DB_URL = "mongodb://localhost:27017/Farmer";
// const username = encodeURIComponent("abhinav23012003");
// const password = encodeURIComponent("Tinku@!123");

// let uri =
//   `mongodb+srv://${username}:${password}@cluster0.32rilsf.mongodb.net/?retryWrites=true&w=majority`;
// mongoose.connect(
//   uri,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     err && console.error(err);
//     console.log("Successfully connected to MongoDB: NAV_BHARAT_logindb");
//   });

mongoose.connect(DB_URL).then(()=>{
	console.log("DB MONGO connect successfully");
});

const app = require('./app');

app.listen(6023,()=>{
	console.log("Farmer backend running on 6023");
})


