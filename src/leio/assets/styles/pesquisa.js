import { StyleSheet } from "react-native";

const stylePesquisa = StyleSheet.create({
  bodyContent: {
    gap: 24,
    width: "100%",
  },
  imgsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    width: "100%",
  },
  imageView: {
    gap: 12,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: "50%",
  },
  imageText: {
    textAlign: "center",
  },
  titleText: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 18,
    color: "#8872DE",
    marginBottom: 12,
  },
});

export default stylePesquisa;
