//---------- Imports ---------
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");


//--------- Custom Imports ---------
const teste = require("./middleware/teste");


//---------- Configs ---------
const app = express();
app.use(cors());


//--------- Routes ---------
app.get("/", (req, res) => {
    res.send("Welcome to UKnow API service!");
});

app.post("/", (req, res) => {
    res.send(req.body);
});

app.get("/collection", async (req, res) => {
    await teste();

    res.json({
        "x": "sadfasdf"
    });
});


//---------- Exports -----------
exports.app = functions.https.onRequest(app);