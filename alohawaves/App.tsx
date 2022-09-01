// Porte d'entrée de l'App
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <View>
        <Text>Welcome Alohawaves !</Text>
  </View> */}

      <View style={styles.imagebox}>
        <Image style={styles.imagestyle}
          source={{
            uri:'https://sportihome.com/uploads/spots/59a70f35b27eb115986b6247/large/1504121018914.jpg'}}/>
      </View>

      <View style={styles.descriptionbox}>
          <Text style={styles.titlestyle}>Plage d'Hossegor</Text>

          <Text style={styles.locationstyle}>Hossegor, France</Text>

          <Text style={styles.difficultystyle}>Saison/difficulté</Text>
       
          <Text style={styles.descriptionstyle}>Aut exercitationem obcaecati vel tempore galisum eum aperiam fugiat a repellendus explicabo et adipisci tempore quo architecto accusamus? Et sapiente consequuntur sed consequatur vitae vel ipsum blanditiis est expedita reprehenderit non porro doloremque assumenda eveniet.</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagebox: {
    flex: 1,
    width: '100%',
  },
  imagestyle: {
    height: '100%',
  }, 
  descriptionbox: {
    flex: 2,
    width: '100%',
    backgroundColor: '#fcfcfa',
    padding: 30, 
  },
  titlestyle: {
    fontWeight: 'bold',
    fontSize: 25
  },
  locationstyle: {
    paddingBottom: 10,
    color: '#535254',
  },
  difficultystyle: {
    paddingBottom: 10,
  },
  descriptionstyle: {
    lineHeight: 23,
    color: '#535254',
  }
});
