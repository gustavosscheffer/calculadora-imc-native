import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { typesIMC } from "./utils/variables";

function Home() {
  const [altura, setAltura] = useState(0);
  const [massa, setMassa] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [resultadoText, setResultadoText] = useState("");

  const textBaseadInIMC = useCallback((imc) => {
    for (const item of typesIMC) {
      if (item.value > imc) {
        return item.title;
      }
    }
    return "Obesidade Grau 3°";
  }, []);

  const calculate = useCallback(() => {
    const imc = massa / Math.pow(altura, 2);
    const text = textBaseadInIMC(imc);
    console.log(text);
    setResultadoText(text);
    setResultado(imc);
  }, [massa, altura, textBaseadInIMC]);

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          autoCapitalize="none"
          placeholder="Altura"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={setAltura}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Massa"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={setMassa}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttontext}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado.toFixed(2)}</Text>
      <Text style={[styles.resultado, { fontSize: 20 }]}>{resultadoText}</Text>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  entrada: {
    flexDirection: "row",
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 34,
  },
  button: {
    backgroundColor: "#2962ff",
  },
  buttontext: {
    textAlign: "center",
    padding: 30,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  resultado: {
    alignSelf: "center",
    color: "#757575",
    fontSize: 45,
    fontWeight: "bold",
    padding: 6,
  },
});
