import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  arrowContainer: {
    borderRadius: 16,
    overflow: "hidden",
    position: "absolute",
    bottom: 50,
    left: 12,
    backgroundColor: theme.colors.black_200,
    borderRadius: 100,
    padding: 8,
    zIndex: 1,
  },
  arrow: {
    color: theme.colors.white,
  },
});
