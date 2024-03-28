import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 20,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
  },
  subtitle: {},
  image: {
    width: "full",
    height: 200,
    borderRadius: theme.borderRadius.md,
  },
});
