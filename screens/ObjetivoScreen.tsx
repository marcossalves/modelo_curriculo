import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";

export default function FormacaoScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../img/objetivo.jpg")}
      ></Image>
      <Text style={styles.title}>Objetivo</Text>

      <Text style={styles.dados1}>
        Colaborar em um ambiente de trabalho onde possa colocar em pratica meus
        conhecimentos em favor da instituição na qual viso integrar, focando
        sempre o beneficio e o crescimento da organização e o crescimento
        profissional.
      </Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f5e9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    marginBottom: 270,
  },

  imagem: {
    marginHorizontal: 0,
    marginBottom: 10,
  },

  dados1: {
    fontSize: 15,
    marginHorizontal: 15,
    textAlign: "justify",
    lineHeight: 25,
    marginBottom: 10,
  },

  dados2: {
    fontSize: 15,
    marginHorizontal: 15,
    textAlign: "justify",
    lineHeight: 25,
  },
});
