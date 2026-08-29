import { useState } from "react";
import { ActivityIndicator, Alert, Button, Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'red'} />
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

      <TouchableOpacity
        style={styles.botao}
        onPress={() => Alert.alert("Clicou no botao!")}>
        <Text>Meu botão!</Text>
      </TouchableOpacity>

      <Pressable
        style={[styles.botao, {backgroundColor: 'red'}]}
        onPressIn={() => console.log('ON PRESS IN', new Date())}
        onPressOut={() => console.log('ON PRESS OUT')}
        onPress={() => console.log('ON PRESS')}
        onLongPress={() => console.log('ON LONG PRESS', new Date())}
        delayLongPress={1000}
      >
        <Text>Mantenha pressionado!</Text>
      </Pressable>

      {/* <ScrollView horizontal>
        {Array.from({length: 50}).map((t, k) => <Text key={k}>TEXXTOOOO</Text>)}
      </ScrollView> */}

      <ActivityIndicator />
      <Image 
        source={require('@/assets/images/icon.png')}
        style={{width: 64, height: 64}}
      />
      <Image 
        source={{
          uri: 'https://www.ap.senac.br/img/logo-white.png',
        }}
        style={{width: 64, height: 64}}
      />
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    gap: 10,
    justifyContent: 'flex-end'
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 10
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 6,
    borderRadius: 10
  }
});
