const express = require("express");
const mongoose = require("mongoose");
const { restart } = require("nodemon");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

const port = 8080;

const DB_URL =
  "mongodb+srv://gafarovgg:azmp101@cluster0.fvihkmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Schema = mongoose.Schema;

const EstoreSchema = new Schema({
  title: { type: String, require: true },
  newPrice: { type: Number, require: true },
  oldPrice: { type: Number, require: true },
  imageUrl: { type: String, require: true },
});

const EstoreModel = mongoose.model("EstoreModel", EstoreSchema);

app.get("/api/products", async (req, res) => {
  try {
    const products = await EstoreModel.find({});
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await EstoreModel.findById({ id });
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(404).send({ message: "data not fount" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProducts = await EstoreModel.findByIdAndDelete({ id });
    res
      .status(200)
      .send({ message: "deleted successfully", data: deletedProducts });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new EstoreModel(req.body);
    await newProduct.save();
    res.status(201).send({ message: "Posted Successfully", data: newProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
