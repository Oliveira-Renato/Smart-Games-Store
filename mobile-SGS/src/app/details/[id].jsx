import { Button, FlatList, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams, Link } from "expo-router";
import { CallMapsButton } from "@/components/CallMapsButton";
import { ButtonDefault } from "@/components/ButtonDefault";
import { BackButton } from "@/components/BackButton";
import API from "@/services/api";
import { useEffect, useState } from "react";

export default function Details() {
  const {id}  = useLocalSearchParams();
  const [data, setData] = useState({});
  const [plataformas, setPlataformas] = useState("");
  let arrayPlataformas  = []

  if(plataformas) {
    arrayPlataformas = plataformas.split("/")
  }

  useEffect(() => {
    handleFetchData();
  }, [plataformas]);
  
  const handleFetchData = async () => {
    try {
      const response  = await API.get(`games/${id}`);
      setData(response.data);
      setPlataformas(data.lojas)
      

    } catch (error) {
      console.error("Erro ao buscar data:", error);
    }
  }

  const handlePlataform = (loja) => {
    router.navigate("/maps/" + loja)
  }

  return (
    <View style={styles.container}>
      <BackButton />
      {/* Imagem do Jogo */}
      <Image
        style={styles.image} 
        source={{uri: data.imagem}} 
        />
      <View style={styles.infoContainer}>
        {/* Titulo do Jogo */}
        <Text style={styles.title}>
          {data.nome}
        </Text>
        {/* Detalhes */}
        <Text>
          {data.descricao}
        </Text>
        {/* Plataformas */}
        <Text>{data.plataformas}</Text>
        {/* Preço */}
        <Text>R$ {data.preco}</Text>

        {/* Lista de lojas fisicas */}
        <View styles={styles.containerList}>
          <Text style={styles.listTitle}>Onde você pode encontrar:</Text>
          <FlatList
            data={arrayPlataformas}
            renderItem={({item}) => (
              <Pressable
                onPress={() => handlePlataform(item)}
              >
                <Text>{item}</Text>
              </Pressable>
            )}
            ListEmptyComponent={() => (
              <Text style={styles.empty}>
                Nenhuma loja física encontrada.
              </Text>
            )}
          />
        </View>
        {/* Comprar Button */}
        <ButtonDefault title={"Comprar"} action={2} />
      </View>
    </View>
  );
}
