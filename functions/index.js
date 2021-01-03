const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51I4NI5EOBe7AMdugWIzIYNJAysh8y14LFPM59cbP9cyGx0WXdwW6Wh7UR1QFPCMNrtfa1mRZfhEOXCir2AXqMXBr00Ep2u4heJ"
);

//API

// -App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());
// -API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

// -Listen command
exports.api = functions.https.onRequest(app)