import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function Index() {
  const [populacao, setPopulacao] = useState('');
  const [diasTrabalhados, setDiasTrabalhados] = useState('');

  const estimar = () => {
    // Fórmula: B = (POP * CPOP) / (QAD* DTM) 
    const numPopulacao = Number(populacao);
    const numDiasTrabalhados = Number(diasTrabalhados);

    if (!populacao || !diasTrabalhados || isNaN(numPopulacao) || isNaN(numDiasTrabalhados)) {
      Alert.alert('Erro!', 'Informe valores numéricos.')
      return;
    }

    const estimativaBarbearias = (numPopulacao * 0.485) / (16 * numDiasTrabalhados);
    Alert.alert('Estimativa!', `São necessárias ${Math.ceil(estimativaBarbearias)} barbearias.`)
    setDiasTrabalhados('');
    setPopulacao('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        placeholder="População"
        style={styles.input}
        value={populacao}
        onChangeText={setPopulacao}
      />
      <TextInput
        keyboardType="number-pad"
        placeholder="Dias trabalhados no mês"
        style={styles.input}
        value={diasTrabalhados}
        onChangeText={setDiasTrabalhados}
      />
      <Button title="Estimar barbearias" onPress={estimar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    gap: 10
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 10
  }
});
