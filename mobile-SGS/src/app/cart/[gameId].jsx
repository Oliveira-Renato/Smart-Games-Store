import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { ButtonDefault } from "@/components/ButtonDefault";
import { BackButton } from "@/components/BackButton";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import API from "@/services/api";

export default function Cart() {
  const { gameId } = useLocalSearchParams();
  const [data, setData] = useState({});

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const response = await API.get(`games/${gameId}`);
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar data:", error);
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Botão para voltar a pagina anterior */}
      <BackButton />
      <Text style={styles.title}>
        Confirmar Compra
      </Text>

      {/* Total da compra */}
      <View>
        <Text>Total</Text>
        <Text>R$ { data.preco }</Text>
      </View>

      {/* QR code para verificação de desconto */}
      <View>
        {/* <Button title="Resgatar Código QR" /> */}
        <ButtonDefault title={"Resgatar Código QR"} action={3} />
      </View>

      {/* resumo da compra */}
      <View>
        <Image
          style={styles.image} 
          source={{uri: data.imagem}} 
        />
        <View>
          <Text>{ data.nome }</Text>
          <Text>R$ { data.preco }</Text>
          <Text>{ data.plataformas }</Text>
        </View>
      </View>

      {/* Botão Confirmar compra */}
      <ButtonDefault title={"Confirmar Compra"} action={4} />
    </View>
  );
}
