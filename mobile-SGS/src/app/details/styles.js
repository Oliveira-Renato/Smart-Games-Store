import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
    backgroundColor: theme.colors.black,
  },
  infoContainer: {
    paddingTop: 32,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
    paddingBottom: 12,
    color: theme.colors.white,
  },
  image: {
    width: "full",
    height: 200,
    borderBottomRightRadius: theme.borderRadius.md,
    borderBottomLeftRadius: theme.borderRadius.md,
  },
  containerList: {
    paddingTop: theme.fonts.size.body.md,
  },
  descriptionContainer: {
    backgroundColor: "#111",
    width: "100%",
    padding: theme.fonts.size.heading.md,
    borderRadius: theme.borderRadius.md,
    marginVertical: 36,
    marginHorizontal: 0,
  },
  fontDesc: {
    color: theme.colors.white_200,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
  },
  fontDefault: {
    color: theme.colors.white_200,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
  fontList: {
    color: theme.colors.yellow_100,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
    paddingBottom: 6,
  },
  fontLisTitle: {
    color: theme.colors.white_200,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.body.sm,
  },
  boxDefault: {
    backgroundColor: theme.colors.black_200,
    width: "100%",
    padding: theme.fonts.size.body.md,
    borderRadius: theme.borderRadius.md,
    marginTop: 12,
  },
});
