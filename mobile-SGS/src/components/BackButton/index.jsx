import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./styles";

export function BackButton() {
  return (
    <MaterialIcons
      size={32}
      name="arrow-back"
      onPress={() => router.back()}
      style={styles.arrow}
    />
  )
}