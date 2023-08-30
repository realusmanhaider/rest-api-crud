const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const uri = 'MongoDBURL'

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });




const dotenv = require("dotenv");
dotenv.config();

const app = express();
const router = require("./router");


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);

app.listen(3000, () => {
    console.log(`Server Started at http://localhost:3000`);
});
