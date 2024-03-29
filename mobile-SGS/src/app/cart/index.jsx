import { Button, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { ButtonDefault } from "@/components/ButtonDefault";
import { QRcode } from "@/components/QRcode";
import { BackButton } from "@/components/BackButton";

export default function Cart() {
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
        <Text>R$200</Text>
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
