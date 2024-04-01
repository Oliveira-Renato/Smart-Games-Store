import express from "express";
import cors from "cors";
import gamesRoute from "./routes/games.route.js";
import { insertDataIntoDatabase } from "./utils/insertData.js";

const app = express();
const port = 3000;

insertDataIntoDatabase();

app.use(express.json());
app.use(cors());

app.use("/games", gamesRoute);

app.listen(port, console.log(`Server is running on port ${port}`));
