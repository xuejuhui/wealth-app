import mongoose from "mongoose";
import accessEnv from "helpers/accessEnv";

console.log(accessEnv("DB_URL"));
async function dbConnection() {
  await mongoose.connect(
    "mongodb+srv://ray:123321xxX!@wealth.omzpi.azure.mongodb.net/inventory?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
}

export default dbConnection;
