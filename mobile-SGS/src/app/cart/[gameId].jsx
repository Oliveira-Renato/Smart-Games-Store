import { Image, Text, TextInput,  View } from "react-native";
import { styles } from "./styles";
import { ButtonDefault } from "@/components/ButtonDefault";
import { BackButton } from "@/components/BackButton";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import API from "@/services/api";

export default function Cart() {
  const { gameId } = useLocalSearchParams();
  const [data, setData] = useState({});
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    handleFetchData();
  }, []);

  // Função para buscar os dados do jogo da API pelo gameId
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
      <View style={styles.total}>
        <Text style={styles.fontDefault}>Total</Text>
        <Text style={styles.fontDefault}>R$ { data.preco }</Text>
      </View>

      {/* QR code para verificação de desconto */}
      <View>
        {/* <Button title="Resgatar Código QR" /> */}
        <ButtonDefault title={"Resgatar Código QR"} action={3} />
        <TextInput
          style={styles.input}
          placeholder="Cole seu QRCode aqui"
          onChangeText={newText => setQrCode(newText)}
          defaultValue={qrCode}
          placeholderTextColor={"#8D8D99"}
        />
      </View>

      {/* resumo da compra */}
      <Text style={styles.fontSumaryTitle}>Resumo</Text>
      
      <View style={styles.boxSummary}>
        <Image
          style={styles.image} 
          source={{uri: data.imagem}} 
        />
        <View>
          <Text style={styles.fontDefault}>{ data.nome }</Text>
          <Text style={styles.fontDefault}>R$ { data.preco }</Text>
          <Text style={styles.fontDefault}>{data.plataformas }</Text>
        </View>
      </View>

      {/* Botão Confirmar compra */}
      <ButtonDefault title={"Confirmar Compra"} action={4} />
    </View>
  );
}
