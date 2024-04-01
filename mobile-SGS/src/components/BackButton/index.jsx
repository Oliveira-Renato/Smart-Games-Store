import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./styles";
import { View } from "react-native";

//Componente responsavel para retornar o usuario a página anterior
export function BackButton() {
  return (
    <View style={styles.arrowContainer}>
      <MaterialIcons
        size={32}
        name="arrow-back"
        onPress={() => router.back()}
        style={styles.arrow}
      />
    </View>
  )
}