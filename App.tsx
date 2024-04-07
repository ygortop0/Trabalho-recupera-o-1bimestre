import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

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
  //validar
  const v_idade = parseInt(idade);

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
        <TextInput
          style={styles.textoConteudo}
          onChangeText={setcelular}
          value={celular}
          placeholder="(11) 9 9999-9999"
          keyboardType="numeric"
        />
        <Text style={styles.texto}>Telefone:</Text>
        <TextInput
          style={styles.textoConteudo}
          onChangeText={settelefone}
          value={telefone}
          placeholder="(11) 9999-9999"
          keyboardType="numeric"
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

        <Text style={styles.texto}>{v_idade}</Text>
        {v_idade < 18}
        <StatusBar style="auto" />
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
