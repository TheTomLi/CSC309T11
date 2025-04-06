const express = require("express");
const routes = require("./routes");
require('dotenv').config();
const cors = require('cors');

const FRONTEND_URL = process.env.FRONTEND_URL || "https://extraordinary-heart-production.up.railway.app";
const app = express();
app.use(express.json());
app.use(cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use('', routes);

module.exports = app;