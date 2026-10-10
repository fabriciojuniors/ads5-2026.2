import { Link, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const irParaExemplo = () => {
    router.push('/exemplo')
  }


  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>

      <Link href={'/exemplo'}>
        <Text>Ir para Exemplo</Text>
      </Link>

      <Link href={'/cursos'}>
        <Text>Ir para Cursos</Text>
      </Link>

      <Link href={'/rede-social'}>
        <Text>Ir para Redes Sociais</Text>
      </Link>

      <Button title="Ir para exemplo2"
        onPress={irParaExemplo} />
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
