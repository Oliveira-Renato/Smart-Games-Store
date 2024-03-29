import GamesRepository from "../repositories/game.repository.js";

async function getGames() {
  return await GamesRepository.getGames();
}

async function getGame(id) {
  return await GamesRepository.getGame(id);
}

export default {
  getGames,
  getGame,
};
