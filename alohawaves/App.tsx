// Porte d'entrée de l'App
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{padding:20,}}>
        <Text>Welcome Alohawaves !</Text>
      </View>

      <View>
        <Image
          source={{
            width:250,
            height:150,
            uri:'https://sportihome.com/uploads/spots/59a70f35b27eb115986b6247/large/1504121018914.jpg'}}/> 
      </View>

      <View>
        <Text>Hossegor</Text>
        <Text>Plage d'Hossegor</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
