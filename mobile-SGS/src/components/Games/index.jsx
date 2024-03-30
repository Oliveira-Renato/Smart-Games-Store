import { ScrollView } from "react-native";
import { styles } from "./styles";
import { Game } from "../Game";
import { router, Link   } from "expo-router";
import { useEffect, useState } from "react";
import API from "@/services/api";

export function Games() {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const response  = await API.get("games");
      setData(response.data)
    } catch (error) {
      console.error("Erro ao buscar data:", error);
    }
  }
  
  const handleGameSelected = (id) => {
    router.navigate("/details/" + id)
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {data.map((game, index) => (
        <Game 
          key={game.id}
          name={game.name}
          description={game.descricao} 
          imageUri={game.imagem}
          price={game.preco}
          plataform={game.plataformas}
          stores={game.lojas}
          onPress={() => handleGameSelected(game.id)}
        />
      ))}
    </ScrollView>
  )
}