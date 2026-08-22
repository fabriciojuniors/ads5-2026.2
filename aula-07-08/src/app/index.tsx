import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [nome, setNome] = useState('');

  const cliqueDoBotao = () => {
    Alert.alert("Título do alerta!",
      "Mensagem...",
      [
        {
          text: 'CONCORDO',
          isPreferred: true
        },
        {
          text: 'DESCORDO!',
          isPreferred: true
        }
      ])
  }

  return (
    <View style={styles.container}>
      <Text>sdsfd</Text>
      <Button title="Clique aqui!"
        color={"orange"}
        onPress={cliqueDoBotao}
      />

      <TextInput 
        style={[styles.campo]}
        value={nome}
        onChangeText={setNome}
        keyboardType="default"
        secureTextEntry={false}
        multiline
        autoCapitalize="sentences"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    gap: 10,
    justifyContent: "center",
  }
});
