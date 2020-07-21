import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";

export default function FormacaoScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../img/formacao.jpg")}
      ></Image>
      <Text style={styles.title}>Formação</Text>

      <Text style={styles.dados1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam
        repudiandae nostrum possimus quod quidem unde at sed perspiciatis?
        Doloribus similique iure reiciendis corrupti ab iste dolorem cum itaque
        voluptatibus.
      </Text>

      <Text style={styles.dados2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam
        repudiandae nostrum possimus quod quidem unde at sed perspiciatis?
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
