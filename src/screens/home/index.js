import React, { useState, useCallback } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { typesIMC } from "./utils/variables";
import { styles } from './utils/styles'
import { set } from "react-native-reanimated";

function Home() {
  const [altura, setAltura] = useState(null);
  const [massa, setMassa] = useState(null);
  const [resultado, setResultado] = useState(0);
  const [resultadoText, setResultadoText] = useState("");

  const textBasedInIMC = useCallback((imc) => {
    for (const item of typesIMC) {
      if (item.value > imc) {
        return item.title;
      }
    }
    return "Obesidade Grau 3°";
  }, []);

  const calculate = useCallback(() => {
    if(!altura || !massa){
      setResultado(0)
      setResultadoText("")
      return alert('Insira altura e massa')
    }
    const imc = massa / Math.pow(altura, 2);
    const text = textBasedInIMC(imc);
    setResultadoText(text);1.801
    setResultado(imc);
  }, [massa, altura, textBasedInIMC]);

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


