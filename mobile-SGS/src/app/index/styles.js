import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
    backgroundColor: theme.colors.black,
  },
  headerContainer: {
    backgroundColor: theme.colors.black_200,
    borderBottomLeftRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
  },
  headerContainerTitle: {
    paddingHorizontal: theme.fonts.size.heading.lg,
    paddingVertical: theme.fonts.size.heading.md,
  },
  header: {
    paddingTop: 54,
    paddingBottom: theme.fonts.size.heading.lg,
    paddingHorizontal: theme.fonts.size.heading.lg,
    borderBottomLeftRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.lg,
    color: theme.colors.white,
    textAlign: "left",
  },
  titleTwo: {
    color: theme.colors.yellow_200,
  },
  subtitle: {
    color: theme.colors.white_200,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.heading.xs,
  },
  containerGames: {
    backgroundColor: theme.colors.black,
    width: "100%",
    marginBottom: -65,
  },
  footer: {
    position: "absolute",
    borderTopLeftRadius: theme.borderRadius.full,
    borderTopRightRadius: theme.borderRadius.full,
    width: "100%",
    height: 35,
    bottom: 1,
    left: 0,
  },
  footerTwo: {
    position: "absolute",
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
    width: "100%",
    height: 20,
    bottom: 0,
    left: 0,
  },
});
