import { FlatList, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { ButtonDefault } from "@/components/ButtonDefault";
import { BackButton } from "@/components/BackButton";
import API from "@/services/api";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState({});
  const [plataformas, setPlataformas] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const response = await API.get(`games/${3}`);
      setData(response.data);
      if (response.data.lojas) {
        setPlataformas(response.data.lojas.split("/"));
      }
    } catch (error) {
      console.error("Erro ao buscar data:", error);
    }
  };

  const handlePlataform = (loja) => {
    router.navigate("/maps/" + loja);
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <Image style={styles.image} source={{ uri: data.imagem }} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data.nome}</Text>
        <Text>{data.descricao}</Text>

        <Text>{data.plataformas}</Text>
        <Text>R$ {data.preco}</Text>

        <View styles={styles.containerList}>
          <Text style={styles.listTitle}>Onde você pode encontrar:</Text>
          <FlatList
            data={plataformas}
            renderItem={({ item }) => (
              <Pressable onPress={() => handlePlataform(item)}>
                <Text>{item}</Text>
              </Pressable>
            )}
            ListEmptyComponent={() => (
              <Text style={styles.empty}>Nenhuma loja física encontrada.</Text>
            )}
          />
        </View>

        <ButtonDefault title={"Comprar"} action={2} gameId={id} />
      </View>
    </View>
  );
}
