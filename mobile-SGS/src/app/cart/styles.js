import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 64,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.black,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
    paddingBottom: 12,
    color: theme.colors.white,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.black_200,
    width: "100%",
    padding: theme.fonts.size.body.md,
    borderRadius: theme.borderRadius.md,
    marginVertical: 18,
  },
  input: {
    backgroundColor: theme.colors.black_100,
    width: "100%",
    padding: theme.fonts.size.body.md,
    borderRadius: theme.borderRadius.md,
    marginVertical: 18,
    color: theme.colors.white_200,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
  },
  fontDefault: {
    color: theme.colors.white_200,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: theme.borderRadius.md,
  },
});
