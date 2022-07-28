//---------- Imports ---------
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");


//--------- Custom Imports ---------
const CheckLogin = require("./actions/login/CheckLogin");


//---------- Configs ---------
const app = express();
app.use(cors());
app.use(express.json());


//--------- Routes ---------
app.get("/", (req, res) => {
    res.send("Welcome to UKnow API service!");
});


//--------- Login e Cadastro ---------
app.post("/email/:email/senha/:senha", async (req, res) => {
    const checklogin = await CheckLogin(req.params);

    res.status(checklogin.status).json(checklogin);
});


//---------- Exports -----------
exports.app = functions.https.onRequest(app);