// Porte d'entrée de l'App
import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import key from '../../apiKey'; 
import BottomTabNavigator from '../navigation/mainnav';


const Item = ({destination, address, photos, navigation, propToPass}: {destination: string; address: string; photos: string; navigation: any; propToPass:any}) => (
  <View style={styles.descriptionbox}>
        <Text style={styles.titlestyle}>{destination}</Text>

        <Text style={styles.locationstyle}>{address}</Text>

        <View style={styles.imagebox}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome', {propToPass})}>
          <ImageBackground
            source={{
              uri: photos,
            }}
            style={styles.imagestyle}
          >
            <Image
              source={require("../assets/wavey.png")}
              style={styles.difficultystyle}
            />
          </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
)

export default function App({navigation}:{navigation: any}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  const renderItem = ({item}: {item: any}) => 
    (<Item 
      destination = {item.fields.Destination} 
      address = {item.fields.Address} 
      photos = {item.fields.Photos[0].thumbnails.large.url}
      navigation={navigation}
      propToPass = {{
        itemId : item.id, 
        destination: item.fields.Destination,
        address: item.fields.Address,
        photo: item.fields.Photos[0].thumbnails.large.url
      } }
      //fields = {item.records.fields}

      />);

  const SpotsListScreen = ({props}:{props:any}) => {
      const goTo = () => {
          props.navigation.push('SpotScreen');
      const SpotsListScreen = ({props}:{props:any}) => {
        const goTo = () => {
            props.navigation.push('SpotScreen');
        };
        return(
          <View>
            <Text>Spots-List</Text>
            <TouchableOpacity onPress={goTo}>
          <View style={styles.button}>
            <Text>Detail Spot</Text>
          </View>
        </TouchableOpacity>
          </View>
        )
      }}};

      const getSpotsSurf = async () => {
        try {
        const response = await fetch(`https://api.airtable.com/v0/appxT9ln6ixuCb3o1/Surf%20Destinations?api_key=${key}`);
          const data = await response.json()
          setData(data.records)
          console.log(data)
        } catch(error) {
          console.error(error)
        } finally { 
          setLoading(false)
        } 
      };

  useEffect(() => {
     getSpotsSurf();
  }, []);  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <View>
        <Text>Welcome Alohawaves !</Text>
  </View> */}

      {/* <View>
        <Text style={styles.titlelist}>SPOTS</Text>
      </View> */}

        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imagebox: {
    width: "100%",
    height: "70%",
  },
  imagestyle: {
    height: "100%",
  },
  descriptionbox: {
    flex: 2,
    width: "100%",
    height: 300, 
    backgroundColor: "#fcfcfa",
  },
  titlestyle: {
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 20,
  },
  locationstyle: {
    paddingBottom: 10,
    paddingLeft: 20,
    color: "#535254",
  },
  difficultystyle: {
    height: 30,
    width: 30,
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  titlelist: {
    padding: 50,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
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