import { Button, FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { CallMapsButton } from "@/components/CallMapsButton";
import { ButtonDefault } from "@/components/ButtonDefault";
import { BackButton } from "@/components/BackButton";

export default function Details() {
  const {id} = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <BackButton />
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
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime magni voluptatibus molestias nam distinctio voluptate natus ad eaque reiciendis? Soluta quas placeat illum quibusdam reprehenderit voluptatem distinctio obcaecati esse rem!
      </Text>
      {/* Plataformas */}
      <Text>PS4/XBOX One</Text>
      {/* Preço */}
      <Text>R$200</Text>

      {/* Lista de lojas fisicas */}
      <View styles={styles.containerList}>
        <Text style={styles.listTitle}>Onde você pode encontrar:</Text>
        <FlatList
          data={[
            {key: 'Shopping Tambore'},
            {key: 'Shopping União'}
          ]}
          renderItem={({item}) => <CallMapsButton store={item.key} />}
        />
      </View>
      {/* Comprar Button */}
      <ButtonDefault title={"Comprar"} action={2} />
    </View>
  );
}
