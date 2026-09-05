import { useState } from "react";
import { Button, FlatList, Modal, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [abrirModal, setAbrirModal] = useState(false)

  const listaDeCompras = Array.from({ length: 5 }).map((v, k) => ({
    categoria: 'Mercado',
    item: 'Item' + k
  }))

  return (
    <View style={styles.container}>
      <ScrollView>
        {listaDeCompras.map((item, key) => (
          <View key={key}>
            <Text>Categoria: {item.categoria}</Text>
            <Text>Item: {item.item}</Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={listaDeCompras}
        keyExtractor={(item) => `${item.categoria}-${item.item}`}
        renderItem={({ item }) => (
          <View>
            <Text>Categoria: {item.categoria}</Text>
            <Text>Item: {item.item}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View>
            <Text>Nenhum registro encontrado</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View>
            <Text style={{ fontWeight: 800 }}>Cabeçalho da lista!</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <Text style={{ fontWeight: 800, color: 'red' }}>Rodapé da lista!</Text>
          </View>
        )}
      />

      <Button title="Abrir modal!" onPress={() => setAbrirModal(true)} />
      <Modal
        visible={abrirModal}
        transparent={true}
        animationType="slide"
      >
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            backgroundColor: 'white',
            height: 500,
            padding: 20,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30
          }}>
            <Text>Conteúdo do modal!!!!</Text>
            <Button
              title="Fechar Modal"
              onPress={() => setAbrirModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
