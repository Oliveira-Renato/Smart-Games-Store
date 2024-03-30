import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
    backgroundColor: "#000814",
  },
  headerContainer: {},
  header: {
    paddingTop: 44,
    paddingBottom: 26,
    paddingHorizontal: 26,
    borderBottomLeftRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
    color: "#fff",
    textAlign: "center",
  },
  titleTwo: {
    color: "#FAA307",
  },
  subtitle: {
    textAlign: "center",
    color: "#dfdfdf",
    fontFamily: theme.fonts.family.medium,
  },
  containerGames: {
    backgroundColor: "#03071E",
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
