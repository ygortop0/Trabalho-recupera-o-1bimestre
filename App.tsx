import React from 'react';
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
  return (
    <View style={styles.container}>
      <TextInput onChangeText={setidade} value={idade}  keyboardType='numeric' placeholder='Digite sua idade:'/>
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
});
