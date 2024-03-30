import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 12,
  },
  button: {
    height: 48,
    width: "full",
    backgroundColor: theme.colors.yellow_300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.sm,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.bold,
  },
});
