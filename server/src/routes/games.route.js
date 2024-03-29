import express from "express";
import {
  connection,
  connectionDatabase,
  closeDatabase,
} from "../database/db.js";

const router = express.Router();

// Rota para obter todos os dados
router.get("/", async (req, res) => {
  try {
    connectionDatabase(); // Estabelece a conexão com o banco de dados

    // Consulta SQL para obter todos os dados
    const query = "SELECT * FROM jogos";

    // Executa a consulta
    connection.query(query, (error, results) => {
      if (error) {
        throw error;
      }
      // Retorna os resultados como resposta
      res.json(results);
    });
  } catch (error) {
    console.error("Erro ao buscar todos os dados: ", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  } finally {
    //closeDatabase(); // Fecha a conexão com o banco de dados
  }
});

router.get("/:id", async (req, res) => {
  try {
    connectionDatabase(); // Estabelece a conexão com o banco de dados

    const { id } = req.params;

    // Consulta SQL para obter um registro por ID
    const query = "SELECT * FROM jogos WHERE id = ?";

    // Executa a consulta com o ID fornecido
    connection.query(query, [id], (error, results) => {
      if (error) {
        throw error;
      }

      // Verifica se encontrou um registro
      if (results.length === 0) {
        return res.status(404).json({ error: "Registro não encontrado" });
      }

      // Retorna o registro encontrado como resposta
      res.json(results[0]);
    });
  } catch (error) {
    console.error("Erro ao buscar o registro por ID: ", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  } finally {
    //closeDatabase(); // Fecha a conexão com o banco de dados
  }
});

export default router;
