import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Games } from "@/components/Games";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "@/theme";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={[theme.colors.header.red_300, theme.colors.header.red_200,theme.colors.header.red_100]}
          style={styles.header}
        />
        {/* Titulo e subtitulo */}
        <View style={styles.headerContainerTitle}>
          <View>
            <Text style={styles.title}>Smart Games Store</Text>
          </View>
          <Text  style={styles.subtitle}>Explore, compre e divirta-se!</Text>
        </View>
      </View>

      {/* lista de jogos */}
      <ScrollView style={styles.containerGames} showsVerticalScrollIndicator={false}>
        <Games />
      </ScrollView>

      {/* Fotter effect */}
      <LinearGradient
        colors={[theme.colors.header.red_trans, theme.colors.header.red_200]}
        style={styles.footer}
      />
      <LinearGradient
        colors={[theme.colors.header.red_300,theme.colors.header.red_200, theme.colors.header.red_100 ]}
        style={styles.footerTwo}
      />
    </View>
  );
}
