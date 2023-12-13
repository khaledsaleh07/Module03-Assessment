import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/database.js";

import articleRoute from "./routes/articleRoute.js";

const app = express();
dotenv.config();
sequelize.sync
// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

app.use("/api", articleRoute);

//listen to port
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
  });