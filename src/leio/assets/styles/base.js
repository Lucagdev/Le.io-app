import { StyleSheet } from "react-native";

//Estilos gerais
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 40,
    gap: 16,
    backgroundColor: "#F4F3FF",
    minHeight: "100vh",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
    width: "100%",
    maxWidth: 500,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "transparent",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  successText: {
    color: "green",
    textAlign: "center",
    marginTop: 10,
  },
  //Estilos de botão
  button: {
    color: "white",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  //Estilos dos livros
  bookContainer: {
    gap: 16,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  book: {
    width: 95,
    height: 144,
  },
  bookImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 12,
  },
  //Estilos do menu
  menuContainer: {
    position: "fixed",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#F4F3FF",
    shadowColor: "#939393",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  menuItem: {
    width: 40,
    height: 40,
    padding: 6,
  },
  menuItemAtivo: {
    backgroundColor: "#8872DE",
    borderRadius: 12,
  },
  menuIcon: {
    width: "100%",
    height: "100%",
  },
  menuIconAtivo: {
    tintColor: "white",
  },
});

export default styles;
