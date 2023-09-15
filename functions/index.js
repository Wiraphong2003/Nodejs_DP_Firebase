const functions = require("firebase-functions");
const express = require('express')
const app = express();

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send("API FRIEND");
  });


  
exports.app = functions.https.onRequest(app);