import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

type CursoParams = {
    curso: string
}

export default function Curso() {
    const { curso } = useLocalSearchParams<CursoParams>()
    return (
        <View>
            <Text>Curso {curso}!</Text>
        </View>
    )
}