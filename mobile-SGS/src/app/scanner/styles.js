import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 64,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.black,
  },
  containerCamera: {
    width: 260,
    height: 260,
    borderWidth: 2,
    borderColor: theme.colors.yellow_100,
    borderRadius: theme.borderRadius.lg,
    marginVertical: 24,
  },
  camera: {
    flex: 1,
  },
  scanned: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
  },
  fontDefault: {
    color: theme.colors.white_200,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md,
    textAlign: "center",
  },
});
