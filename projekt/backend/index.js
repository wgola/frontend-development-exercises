import planEntryRouter from "./routes/planEntry.route.js";
import noteRouter from "./routes/note.route.js";
import { connectDB } from "./configs/db.config.js";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT | 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use("/planEntry", planEntryRouter);
app.use("/planEntry", noteRouter);

app.get("/", (req, res) => res.send("Backend of frontend project"));

app.listen(port, () =>
  console.log(`App is running at http://localhost:${port}`)
);
