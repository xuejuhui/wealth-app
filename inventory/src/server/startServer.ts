import express from "express";
import bodyParser from "body-parser";
import accessEnv from "helpers/accessEnv";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = accessEnv("PORT", 7100);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
