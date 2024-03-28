import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

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