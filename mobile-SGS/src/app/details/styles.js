import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 64,
  },
  infoContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
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
  containerList: {},
  listTitle: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md,
    marginBottom: 18,
  },
});
