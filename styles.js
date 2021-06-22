import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "ghostwhite",
    padding: 10,
    paddingTop: 20
  },

  textInputContainer: {
    alignSelf: "stretch"
  },

  textInputLabel: {
    marginBottom: 4
  },

  textInput: {
    backgroundColor: "white",
    height: 20,
    fontSize: 11
  },
  //sombra en texto
  textWithShadow:{
    flex: 1,
    marginTop: 0,
    textShadowColor: 'rgba(255, 255, 255, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    color: 'white',
    fontSize: 20,
  }
});

