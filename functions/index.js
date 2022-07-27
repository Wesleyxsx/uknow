//---------- Imports ---------
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: true });


//---------- Configs ---------
const app = express();
app.use(cors);


//--------- Routes ---------
app.get("/welcome", (req, res) => {
    res.send("Welcome to UKnow API service!");
});


//---------- Exports -----------
exports.app = functions.https.onRequest(app);