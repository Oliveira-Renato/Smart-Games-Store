import {
  connection,
  connectionDatabase,
  closeDatabase,
} from "../database/db.js";

async function getGames() {
  try {
    connectionDatabase(); // Estabelece a conexão com o banco de dados

    // Consulta SQL para obter todos os dados
    const query = "SELECT * FROM jogos";

    // Executa a consulta
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    return results;
  } catch (error) {
    console.error("Erro ao buscar todos os dados: ", error);
    throw error;
  }
}

async function getGame(id) {
  try {
    connectionDatabase(); // Estabelece a conexão com o banco de dados

    // Consulta SQL para obter um registro por ID
    const query = "SELECT * FROM jogos WHERE id = ?";

    // Executa a consulta com o ID fornecido
    const results = await new Promise((resolve, reject) => {
      connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    // Verifica se encontrou um registro
    if (results.length === 0) {
      throw { status: 404, message: "Registro não encontrado" };
    }

    // Retorna o registro encontrado como resposta
    return results[0];
  } catch (error) {
    console.error("Erro ao buscar o registro por ID: ", error);
    throw error;
  }
}

export default {
  getGames,
  getGame,
};
