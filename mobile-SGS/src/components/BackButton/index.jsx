import { router } from "expo-router";
import { Button } from "react-native";
import { styles } from "./styles";

export function BackButton() {
  const HandleGoBack = () => {
    router.back()
  }

  return <Button styles={styles.button} title="Voltar" onPress={HandleGoBack} />
}