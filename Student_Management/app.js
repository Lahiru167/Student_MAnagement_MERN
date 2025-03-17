//pass = BbU4cHldpe8xfwxG
//pass2 = 1hR7FmCbFksmxP4j


const express = require('express');
const mongoose = require('mongoose');

const cors = require("cors");

const router = require('./Route/UserRouter');
const app = express();

//Middleware
app.use(express.json());
app.use("/users", router);

app.use(cors());
app.use("/uploads", express.static("uploads"));


mongoose
  .connect("mongodb+srv://admin:BbU4cHldpe8xfwxG@cluster0.bofqi.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
    
