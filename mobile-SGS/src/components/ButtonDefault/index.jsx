import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

export function ButtonDefault({title, action, gameId}) {
  //função para navegar pelas rotas desejadas dependendo do parametro "action"
  const handleButtonAction = (action) => {
    switch(action) {
      case 1: 
        router.navigate("/maps/");
        break;
      case 2: 
        router.navigate("/cart/" + gameId);
        break;
      case 3: 
        router.navigate("/scanner/");
        break;
      default:
        break;
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => handleButtonAction(action)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}