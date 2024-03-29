import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Game } from "../Game";
import { router } from "expo-router";
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
      {Array.from({length: 8}).map((item, index) => (
        <Game 
          key={index} 
          name={"Titulo do Jogo"} 
          imageUri={"https://upload.wikimedia.org/wikipedia/pt/b/bf/Overwatch_logo.jpg"}
          id={index}
          onPress={() => handleGameSelected(index)}
        />
      ))}
    </ScrollView>
  )
}