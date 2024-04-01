import { Slot } from "expo-router";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";


export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  // Renderiza o componente Slot se as fontes estiverem carregadas, caso contrário, retorna null
  return fontsLoaded ? <Slot /> : null;
}
