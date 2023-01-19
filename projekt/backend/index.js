import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./configs/db.config.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT | 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () =>
  console.log(`App is running at http://localhost:${port}`)
);
