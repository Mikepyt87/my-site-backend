import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import meRouter from "./routes/meRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/me", meRouter);
export const api = functions.https.onRequest(app);
