import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';




export default function App() {
  //variavel para os registros 
  const [RG, setRG] = React.useState('');
  const [nome, setnome] = React.useState('');
  const [idade, setidade] = React.useState('');
  const [celular, setcelular] = React.useState('');
  const [telefone, settelefone] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [endereco, setendereco] = React.useState('');
  //checkbox
  const [checkbox, setcheck] = useState(false);
  //validar 
  const v_idade = parseInt(idade);

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setnome} value={nome} placeholder='Digite Seu Nome'/>
      <TextInput onChangeText={setRG} value={RG} placeholder='Digite Seu RG'/>
      <TextInput onChangeText={setEmail} value={Email} placeholder='Digite Seu Email'/>
      <TextInput onChangeText={setcelular} value={celular} placeholder='Digite Seu celular'/>
      <TextInput onChangeText={settelefone} value={telefone} placeholder='Digite Seu telefone'/>
      <TextInput onChangeText={setendereco} value={endereco} placeholder='Digite Seu endereco'/>
      <TextInput onChangeText={setidade} value={idade} keyboardType='numeric' placeholder='Digite sua idade:'/>
      <Checkbox value={checkbox} onValueChange={setcheck}/>
      <Text>test</Text>
      <Text>{v_idade}</Text>
      {v_idade < 18}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  org_chkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
