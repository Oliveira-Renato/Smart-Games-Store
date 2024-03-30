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
          // Background Linear Gradient
          colors={[theme.colors.header.red_300, theme.colors.header.red_200,theme.colors.header.red_100]}
          style={styles.header}
        >
          <Text style={styles.title}>
            Smart Games{"\n"}
            <Text style={styles.titleTwo}>STORE</Text>
          </Text>
          <Text  style={styles.subtitle}>Explore, Compre e Divirta-se!</Text>
        </LinearGradient>
      </View>
    
      <ScrollView style={styles.containerGames} showsVerticalScrollIndicator={false}>
        <Games />
      </ScrollView>

      {/* <View style={styles.footer} /> */}
      <LinearGradient
        // Background Linear Gradient
        colors={[theme.colors.header.red_trans, theme.colors.header.red_200]}
        style={styles.footer}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={[theme.colors.header.red_300,theme.colors.header.red_200, theme.colors.header.red_100 ]}
        style={styles.footerTwo}
      />
    </View>
  );
}
