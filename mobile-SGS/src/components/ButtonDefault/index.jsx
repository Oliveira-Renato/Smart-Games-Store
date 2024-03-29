import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

export function ButtonDefault({title, action}) {
  const handleButtonAction = (action) => {
    
    switch(action) {
      case 1: 
        router.navigate("/maps/");
        break;
      case 2: 
        router.navigate("/cart/");
        break;
      default:
        router.navigate("/scanner/");
        break;
    }
   
  }

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button]} onPress={() => handleButtonAction(action)}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  )
}