import React from 'react';
import {StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native';

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

calcular(){
  let imc = this.state.massa / (this.state.altura * this.state.altura)
  let calculo = this.state
  calculo.resultado = imc
  if(calculo.resultado < 16){
    calculo.resultadoText ='Muito abaixo do peso'
  }
   else if (calculo.resultado < 17){
    calculo.resultadoText ='Moderadamente abaixo do peso'
   }
   else if (calculo.resultado < 18.5){
    calculo.resultadoText ='Abaixo do peso'
   }
   else if (calculo.resultado < 25) {
    calculo.resultadoText ='Saudavel'
   }
   else if (calculo.resultado < 30) {
    calculo.resultadoText ='Sobrepeso'
   }
   else if (calculo.resultado < 35) {
    calculo.resultadoText ='Obesidade Grau 1°'
   }
   else if (calculo.resultado < 40) {
    calculo.resultadoText ='Obesidade Grau 2°'
   }
   else{
    calculo.resultadoText ='Obesidade Grau 3°'
   }
  this.setState(calculo)
 }

 render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <TextInput autoCapitalize="none" placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput autoCapitalize="none" placeholder="Massa"  keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  entrada:{
    flexDirection:'row',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:34,
  },
  button:{
   backgroundColor:"#2962ff",
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:25,
    fontWeight:'bold',
    color:"white",
  },
  resultado:{
    alignSelf:"center",
    color:"#757575",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },
});
