import express from "express";
import GamesController from "../controllers/game.controller.js";
import {
  connection,
  connectionDatabase,
  closeDatabase,
} from "../database/db.js";

const router = express.Router();

// Rota para obter todos os dados
router.get("/", GamesController.getGames);
router.get("/:id", GamesController.getGame);

export default router;
