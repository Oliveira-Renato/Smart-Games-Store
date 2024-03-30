import { FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";
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
      const response = await API.get(`games/${id}`);
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
      {/* image description */}
      <View>
        <Image style={styles.image} source={{ uri: data.imagem }} resizeMode="cover" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data.nome}</Text>
        {/* Plataformas */}
        <View style={styles.boxDefault}>
          <Text style={styles.fontDefault}>{data.plataformas}</Text>
        </View>

        {/* Preços */}
        <View style={styles.boxDefault}>
          <Text style={styles.fontDefault}>R$ {data.preco}</Text>
        </View>

        {/* Lojas físicas */}
        <View style={styles.boxDefault}>
          <Text style={styles.fontLisTitle}>Onde você pode encontrar:</Text>

          <FlatList
            style={styles.containerList}
            data={plataformas}
            renderItem={({ item }) => (
              <Pressable onPress={() => handlePlataform(item)}>
                <Text style={styles.fontList}>{item}</Text>
              </Pressable>
            )}
            ListEmptyComponent={() => (
              <Text style={styles.empty}>Nenhuma loja física encontrada.</Text>
            )}
          />
        </View>
      </View>

      {/* Description */}
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.descriptionContainer}> 
          <Text style={styles.fontDesc}>{data.descricao}</Text>
        </View>

        <ButtonDefault title={"Comprar"} action={2} gameId={id} />
      </ScrollView>
    </View>
  );
}
