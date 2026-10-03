import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Tela inicial",
          // headerBackground: () => (
          //   <View style={{backgroundColor: 'black', flex: 1}}>

          //   </View>
          // )
          headerStyle:{
            // backgroundColor: 'blue',
          },
          headerShown: true,
          headerRight: (props) => (
            <Text>Botão direito!</Text>
          )
        }} />

        <Stack.Screen 
          name="exemplo"
          
         />
    </Stack>
  );
}
