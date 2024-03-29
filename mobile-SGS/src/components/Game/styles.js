import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  image: {
    width: 106,
    height: 106,
    borderRadius: theme.borderRadius.md,
  },
  selected: {
    borderWidth: 2,
    borderColor: theme.colors.green_600,
    backgroundColor: theme.colors.green_100,
  },
});
