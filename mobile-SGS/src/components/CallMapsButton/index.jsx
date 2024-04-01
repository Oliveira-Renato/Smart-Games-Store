import {  Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

export function CallMapsButton({store}) {
  //Função responsavel por chamar a tela de mapas
  const handleCallMaps = () => {
    router.navigate("/maps/")
  }

  return (
    <View style={styles.container}>
      <Text>{store}</Text>

      <TouchableOpacity activeOpacity={0.7} style={[styles.button]} onPress={() => handleCallMaps()}>
        <Text style={[styles.text]}>Ver loja fisica</Text>
      </TouchableOpacity>
    </View>
  )
}