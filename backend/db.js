const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://chauhanayush7983:ayush7983@cluster0.9srfmfg.mongodb.net/QuickJot1";
const connectToMongo = () => {
  mongoose.connect(mongoURI);
  console.log("Connected to mongo successfully");
};

module.exports = connectToMongo;
