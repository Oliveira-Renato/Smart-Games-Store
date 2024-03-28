import { Button, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";

export default function Details() {
  const {id} = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Button title="voltar" onPress={router.back}/>
      {/* Imagem do Jogo */}
      <Image
        style={styles.image} 
        source={{uri: "https://upload.wikimedia.org/wikipedia/pt/b/bf/Overwatch_logo.jpg"}} 
        />
      {/* Titulo do Jogo */}
      <Text style={styles.title}>
         Nome do jogo
      </Text>
      {/* Detalhes */}
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime magni voluptatibus molestias nam distinctio voluptate natus ad eaque reiciendis? Soluta quas placeat illum quibusdam reprehenderit voluptatem distinctio obcaecati esse rem!</Text>
      {/* Plataformas */}
      <Text>PS4/XBOX One</Text>
      {/* Preço */}
      <Text>R$200</Text>
      <Button title="Ver loja fisica"/>
      <Button title="Comprar"/>
    </View>
  );
}
