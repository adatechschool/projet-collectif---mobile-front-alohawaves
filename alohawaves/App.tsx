// Porte d'entrée de l'App
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      {/* <View>
        <Text>Welcome Alohawaves !</Text>
  </View> */}

      <View >
          <Text style={styles.titlelist}>SPOTS</Text>
      </View>

      <View style={styles.descriptionbox}>
            <Text style={styles.titlestyle}>Plage d'Hossegor</Text>

            <Text style={styles.locationstyle}>Hossegor, France</Text>

            

      <View style={styles.imagebox}>
                 <ImageBackground source={{
              uri:'https://sportihome.com/uploads/spots/59a70f35b27eb115986b6247/large/1504121018914.jpg'}} style={styles.detailstyle}>
                  <Image source={require('./src/assets/wave.png')} style={styles.difficultystyle}/>
                </ImageBackground>

            </View>
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
    height: '35%',
  }, 
  descriptionbox: {
    flex: 2,
    width: '100%',
    backgroundColor: '#fcfcfa',
  },
  titlestyle: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 20,
  },
  locationstyle: {
    paddingBottom: 10,
    paddingLeft: 20,
    color: '#535254',
  },
  detailstyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  difficultystyle: {
    height: 25,
    width: 25,
  },
  titlelist: {
    padding: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    
  }

});
