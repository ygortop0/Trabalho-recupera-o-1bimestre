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
      <Text>Digite Seu Nome:</Text>
      <TextInput onChangeText={setnome} value={nome} placeholder='Seu Nome'/>
      <Text>Digite Sua Idade:</Text>
      <TextInput onChangeText={setidade} value={idade} keyboardType='numeric' placeholder='Digite sua idade:'/>
      <Text>Digite Seu RG:</Text>
      <TextInput onChangeText={setRG} value={RG} placeholder='Digite Seu RG'/>
      <Text>Digite Seu Email:</Text>
      <TextInput onChangeText={setEmail} value={Email} placeholder='email@exemplo.com'/>
      <Text>Digite Seu Numero de Celular:</Text>
      <TextInput onChangeText={setcelular} value={celular} placeholder='(11) 999999999' keyboardType='numeric'/>
      <Text>Digite Seu Numero de Telefone:</Text>
      <TextInput onChangeText={settelefone} value={telefone} placeholder='(11) 99999999' keyboardType='numeric'/>
      <Text>Digite seu Endereço:</Text>
      <TextInput onChangeText={setendereco} value={endereco} placeholder='Rua exemplo 101'/>
      <Checkbox value={checkbox} onValueChange={setcheck} />
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
