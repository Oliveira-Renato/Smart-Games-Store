import { Button,Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";

export default function Maps() {

  return (
    <View style={styles.container}>
      <Button title="voltar" onPress={router.back}/>
      {/* Titulo do Jogo */}
      <Text style={styles.title}>
         Mapa
      </Text>
      {/* Detalhes */}
      <Text>Vá até uma loja fisica e busque seu game você mesmo!</Text>
    </View>
  );
}
