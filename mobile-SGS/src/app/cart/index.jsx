import { Button, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { ButtonDefault } from "@/components/ButtonDefault";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Confirmar Compra
      </Text>

      {/* Total da compra */}
      <View>
        <Text>Total</Text>
        <Text>R$200</Text>
      </View>

      {/* QR code para verificação de desconto */}
      <View>
        <Button title="Resgatar Código QR" />
      </View>

      {/* resumo da compra */}
      <View>
        <Image
          style={styles.image} 
          source={{uri: "https://upload.wikimedia.org/wikipedia/pt/b/bf/Overwatch_logo.jpg"}} 
        />
        <View>
          <Text>Titulo do jogo</Text>
          <Text>Preço</Text>
          <Text>Plataforma</Text>
        </View>
      </View>

      {/* Botão Confirmar compra */}
      <ButtonDefault title={"Confirmar Compra"} action={2} />
    </View>
  );
}
