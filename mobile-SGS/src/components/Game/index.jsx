import { Image, Pressable, Text } from "react-native";
import { styles } from "./styles";

export function Game({name, imageUri, id, ...rest}) {
  return (
    <Pressable {...rest}>
      <Image 
        style={styles.image}
        source={{uri: imageUri}}
      />
      <Text>{name}</Text>
    </Pressable>
  )
}