import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Games } from "@/components/Games";
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#6A040F", "#9D0208","#D00000"]}
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
        colors={["rgba(208, 0, 0, 0.8)", "#9D0208"]}
        style={styles.footer}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["#D00000","#9D0208", "#6A040F" ]}
        style={styles.footerTwo}
      />
    </View>
  );
}
