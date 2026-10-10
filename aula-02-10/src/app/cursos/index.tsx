import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const CURSOS = [
    {
        id: 1,
        titulo: 'ADS'
    },
    {
        id: 2,
        titulo: 'Design de Moda'
    },
    {
        id: 3,
        titulo: 'Gastronomia'
    }
]

export default function Cursos() {
    return (
        <View>
            <Text>Cursos!</Text>
            <FlatList
                data={CURSOS}
                renderItem={({ item }) => (
                    <Link href={{
                        pathname: '/cursos/[curso]',
                        params: {
                            curso: item.titulo
                        }
                    }}>
                        <View>
                            <Text>{item.id} - {item.titulo}</Text>
                        </View>
                    </Link>
                )}
            />
        </View>
    )
}