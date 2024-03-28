import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Game } from "../Game";
import { router } from "expo-router";

export function Games() {
  const handleGameSelected = (id) => {
    console.log("CLICOU")
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