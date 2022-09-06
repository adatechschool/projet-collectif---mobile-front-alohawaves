// Porte d'entrée de l'App
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Ajouts Marine
const SpotScreen = (props) => {
  const goTo = () => {
    console.log("props", props);
  };
  return(
    <View>
      <Text>Welcome to the Spot</Text>
      <TouchableOpacity onPress={goTo}>
        <View style={styles.button}>
          <Text>Log-in</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
// Fin ajout Marine

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

          <View style={styles.detailstyle}>
            <Text style={styles.seasonstyle}>Haute Saison</Text>
            <Image source={require('./src/assets/wave.png')} style={styles.difficultystyle}/>
            <Text style={styles.beachstyle}> </Text>
          </View>
       
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
  detailstyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  seasonstyle: {

  },
  difficultystyle: {
    height: 25,
    width: 25,
  },
  beachstyle: {

  },
  descriptionstyle: {
    lineHeight: 23,
    color: '#535254',
  },
  // Ajout Marine
  button: {
    backgroundColor: "lightBlue",
    borderColor: "darkblue",
    borderwidth: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
  }
});
