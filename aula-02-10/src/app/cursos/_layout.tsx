import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function CursosLayout() {
    return (
        <View>
            <Slot />
            <Text>Rodapé</Text>
        </View>
    )
}