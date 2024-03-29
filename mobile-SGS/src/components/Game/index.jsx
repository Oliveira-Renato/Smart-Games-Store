import { Image, View } from "react-native";
import { styles } from "./styles";

export function Game({name, description, imageUri, price, plataform, stores, ...rest}) {
  return (
    <View>
      <Image 
        style={styles.image}
        source={{uri: imageUri}}
      />
    </View>
  )
}