"use strict" 

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 5000;
const HOST = "0.0.0.0";
const app = express(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 