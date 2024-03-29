import GameServices from "../services/game.services.js";

async function getGames(req, res, next) {
  try {
    console.log(`GET /games`);
    res.send(await GameServices.getGames());
  } catch (error) {
    next(error);
  }
}

async function getGame(req, res, next) {
  try {
    if (req.params.id) {
      res.send(await GameServices.getGame(req.params.id));
      console.log(`GET /game  ID - `, req.params.id);
    }
    throw new Error("ID obrigatório para consulta!");
  } catch (error) {
    next(error);
  }
}

export default {
  getGames,
  getGame,
};
