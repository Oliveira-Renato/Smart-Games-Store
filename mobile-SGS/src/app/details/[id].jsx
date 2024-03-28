import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";

export default function Details() {
  const {id} = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Button title="voltar" onPress={router.back}/>
      <Text style={styles.title}>
         Detalhes
      </Text>
      <Text>{`Jogo de id =${id}`}</Text>
    </View>
  );
}
