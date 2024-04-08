import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView, Button, Alert } from "react-native";
import { TextInputMask } from "react-native-masked-text";

export default function App() {
  //variavel para os registros
  const [RG, setRG] = React.useState("");
  const [nome, setnome] = React.useState("");
  const [idade, setidade] = React.useState("");
  const [celular, setcelular] = React.useState("");
  const [telefone, settelefone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [endereco, setendereco] = React.useState("");
  //checkbox
  const [checkbox, setcheck] = useState(false);
  //validar coisas

  function btn_enviar() {
    if (parseInt(idade) < 18){
      return Alert.alert('Você não tem idade suficiente para o curso!');
    } else {
      if (RG === '' || nome === '' || celular === '' || telefone === '' || Email === '' || endereco === '') {
        Alert.alert('Existe campos invalidos!');
      } else {
        Alert.alert('Sucesso!');
      }
    }
  }

  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.texto}>Bem vindos à </Text>
        <Text style={styles.texto}>ETEC Jardim Angela</Text>
        <Text></Text>

        <Text style={styles.texto}>Nome:</Text>
        <TextInput
          style={styles.textoConteudo}
          onChangeText={setnome}
          value={nome}
          placeholder="Digite seu nome"
          />

        <Text style={styles.texto}>Idade:</Text>
        <TextInput
          style={styles.textoConteudo}
          onChangeText={setidade}
          value={idade}
          keyboardType="numeric"
          placeholder="Digite sua idade"
          />
        
        <Text style={styles.texto}>RG:</Text>
        <TextInput
          style={styles.textoConteudo}
          onChangeText={setRG}
          value={RG}
          placeholder="Digite Seu RG"
          />

        <Text style={styles.texto}>E-mail:</Text>
        <TextInput
          style={styles.textoConteudo}
          onChangeText={setEmail}
          value={Email}
          placeholder="email@exemplo.com"
          />

        <Text style={styles.texto}>Celular:</Text>
        <TextInputMask
          type={'cel-phone'}
          style={styles.textoConteudo}
          onChangeText={setcelular}
          value={celular}
          placeholder="(11) 9 9999-9999"
          keyboardType="numeric"
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask:'(99) '
          }}
          />
        <Text style={styles.texto}>Telefone fixo:</Text>
        <TextInputMask
          style={styles.textoConteudo}
          onChangeText={settelefone}
          value={telefone}
          placeholder="(11) 9999-9999"
          keyboardType="numeric"
          //mascara
          type={'custom'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            mask: '(99) 9999-9999'
            //Não acresentei a obrigatoriedade do +55 pois duvido que um aluno da etec tenha um numero fora do brasil
          }}
          />
        <Text style={styles.texto}>Endereço:</Text>
        <TextInput
          style={styles.textoConteudo}
          onChangeText={setendereco}
          value={endereco}
          placeholder="Digite se endereço"
          />

        <View>
          <Text style={styles.texto}>Selecione o curso desejado:</Text>
          <Text>Administração</Text>
          <Checkbox value={checkbox} onValueChange={setcheck} />
          <Text>Desenvolvimento de Sistemas</Text>
          <Checkbox value={checkbox} onValueChange={setcheck} />
          <Text>Enfermagem</Text>
          <Checkbox value={checkbox} onValueChange={setcheck} />
        </View>
        
        <Button onPress={btn_enviar} title="enviar"></Button>
        <Text style={styles.textoErro}>{vld_idade(idade)}</Text>
    
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: "#f2f2f2",
  },
  
  texto: {
    fontSize: 18,
    marginTop: 5,
    color: "#000",
  },

  textoErro: {
    fontSize: 18,
    marginTop: 5,
    color: "red",
  },

  textoConteudo: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    padding: 8,
  },

  org_chkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
});