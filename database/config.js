const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://devitrack_app:vOcSbrRHUqtAIIZx@devitrackdb.3gjzkid.mongodb.net/devitrackdb");

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar DB");
  }
};

module.exports = {
  dbConnection,
};
