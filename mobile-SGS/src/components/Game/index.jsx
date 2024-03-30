import { Image, Pressable } from "react-native";
import { styles } from "./styles";

export function Game({name, description, imageUri, price, plataform, stores, ...rest}) {
  return (
    <Pressable {...rest}>
      <Image 
        style={styles.image}
        source={{uri: imageUri}}
      />
    </Pressable>
  )
}